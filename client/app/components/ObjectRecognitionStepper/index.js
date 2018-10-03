import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepButton from '@material-ui/core/StepButton';

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

export default withStyles(styles)(ObjectRecognitionStepper);
