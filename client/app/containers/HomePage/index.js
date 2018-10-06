import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { withStyles } from '@material-ui/core/styles';
import Fade from '@material-ui/core/Fade';

import ObjectRecognitionStepper from 'components/ObjectRecognitionStepper';
import UploadButton from 'components/UploadButton';
import SendButton from 'components/SendButton';
import ObjectTable from 'components/ObjectTable';
import ConfidenceSlider from 'components/ConfidenceSlider';
import ORCanvas from 'components/ORCanvas';

import injectReducer from 'utils/injectReducer';
import reducer from './redux/reducer';

import styles from './styles';

const HomePage = ({ classes }) => (
  <Fade in timeout={1000}>
    <div>
      <ObjectRecognitionStepper />
      <UploadButton />
      <div className={classes.wrapper}>
        <ConfidenceSlider />
        <SendButton />
      </div>
      <ORCanvas />
      <ObjectTable />
    </div>
  </Fade>
);

HomePage.propTypes = {
  classes: PropTypes.object.isRequired,
};

const withConnect = connect(
  null,
  null,
);

const withReducer = injectReducer({ key: 'ObjectRecognitionPage', reducer });

export default compose(
  withReducer,
  withConnect,
)(withStyles(styles)(HomePage));
