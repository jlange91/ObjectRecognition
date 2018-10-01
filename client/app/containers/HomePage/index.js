/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectReducer from 'utils/injectReducer';
import makeSelectImage from './selectors';
import reducer from './reducer';

import { withStyles } from '@material-ui/core/styles';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

import UploadButton from 'components/UploadButton';
import SendButton from 'components/SendButton';
import { changeImageAction } from 'containers/HomePage/actions';

const styles = {
  root: {
    padding: '10px',
    overflow: 'scroll',
  },
  wrapper: {
    backgroundColor: '#EAEAEA',
    padding: '10px',
    textAlign: 'center',
  },
};

class HomePage extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Fade in timeout={1000}>
        <div className={classes.root}>
          <div className={classes.wrapper}>
            <UploadButton
              onChangeImage={this.props.onChangeImage}
              imageUrl={this.props.imageUrl}
            />
            <SendButton imageUrl={this.props.imageUrl} />
          </div>
        </div>
      </Fade>
    );
  }
}

HomePage.propTypes = {
  onChangeImage: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  imageUrl: makeSelectImage(),
});

function mapDispatchToProps(dispatch) {
  return {
    onChangeImage: image => dispatch(changeImageAction(image)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'HomePage', reducer });

export default compose(
  withReducer,
  withConnect,
)(withStyles(styles)(HomePage));
