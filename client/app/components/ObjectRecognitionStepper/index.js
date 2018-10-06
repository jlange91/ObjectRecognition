import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepButton from '@material-ui/core/StepButton';

import {
  makeSelectImage,
  makeSelectResponse,
} from 'containers/HomePage/redux/selectors';

import messages from './messages';
import styles from './styles';

const ObjectRecognitionStepper = ({ classes, imageUrl, response }) => {
  let step = 0;

  step = imageUrl !== '' ? 1 : step;
  step = response.size === 0 ? step : 2;

  return (
    <div className={classes.root}>
      <Stepper activeStep={step}>
        <Step>
          <StepButton>
            <FormattedMessage {...messages.step1} />
          </StepButton>
        </Step>
        <Step>
          <StepButton>
            <FormattedMessage {...messages.step2} />
          </StepButton>
        </Step>
      </Stepper>
    </div>
  );
};

ObjectRecognitionStepper.propTypes = {
  classes: PropTypes.object,
  imageUrl: PropTypes.string.isRequired,
  response: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
};

const mapStateToProps = createStructuredSelector({
  imageUrl: makeSelectImage(),
  response: makeSelectResponse(),
});

export default connect(
  mapStateToProps,
  null,
)(withStyles(styles)(ObjectRecognitionStepper));
