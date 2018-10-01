import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import axios from 'axios';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import CircularProgress from '@material-ui/core/CircularProgress';

import styles from './styles';
import messages from './messages';

class SendButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    };
  }

  handleButtonClick = () => {
    this.setState({
      loading: true,
    });
    axios
      .post('http://localhost:3000/objectRecognition', {
        imgBase64: this.props.imageUrl,
      })
      .then(response => {
        console.log(response.data);
        this.setState({
          loading: false,
        });
      });
  };

  render() {
    const { loading, success } = this.state;
    const { classes } = this.props;

    return (
      <div>
        <div className={classes.wrapper}>
          <Button
            variant="contained"
            color="primary"
            disabled={loading || this.props.imageUrl === ''}
            onClick={this.handleButtonClick}
            className={classes.button}
          >
            <FormattedMessage {...messages.header} />
            <Icon className={classes.rightIcon}>send</Icon>
          </Button>
          {loading && (
            <CircularProgress size={24} className={classes.buttonProgress} />
          )}
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(SendButton);