import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import axios from 'axios';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import CircularProgress from '@material-ui/core/CircularProgress';

import {
  makeSelectImage,
  makeSelectConfidence,
} from 'containers/HomePage/redux/selectors';
import { changeResponseAction } from 'containers/HomePage/redux/actions';

import styles from './styles';
import messages from './messages';

export const fetchAsBlob = url => fetch(url).then(response => response.blob());

export const convertBlobToBase64 = blob =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = reject;
    reader.onload = () => {
      resolve(reader.result);
    };
    reader.readAsDataURL(blob);
  });

class SendButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    };
  }

  handleButtonClick = () => {
    const { confidence } = this.props;
    this.setState({
      loading: true,
    });
    fetchAsBlob(this.props.imageUrl)
      .then(convertBlobToBase64)
      .then(imgBase64 => {
        axios
          .post('http://localhost:3000/objectRecognition', {
            imgBase64,
            confidence,
          })
          .then(response => {
            const reduxResponse = response.data.map(data => {
              const ret = data;
              ret.show = true;
              return ret;
            });
            this.props.onChangeResponse(reduxResponse);
            this.setState({
              loading: false,
            });
          });
      });
  };

  render() {
    const { loading } = this.state;
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

SendButton.propTypes = {
  classes: PropTypes.object.isRequired,
  imageUrl: PropTypes.string.isRequired,
  onChangeResponse: PropTypes.func.isRequired,
  confidence: PropTypes.number.isRequired,
};

const mapStateToProps = createStructuredSelector({
  imageUrl: makeSelectImage(),
  confidence: makeSelectConfidence(),
});

function mapDispatchToProps(dispatch) {
  return {
    onChangeResponse: response => dispatch(changeResponseAction(response)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withStyles(styles)(SendButton));
