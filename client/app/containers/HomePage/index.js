import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { withStyles } from '@material-ui/core/styles';
import Fade from '@material-ui/core/Fade';

import ObjectRecognitionStepper from 'components/ObjectRecognitionStepper';
import UploadButton from 'components/UploadButton';
import SendButton from 'components/SendButton';
import ObjectTable from 'components/ObjectTable';
import ConfidenceSlider from 'components/ConfidenceSlider';

import injectReducer from 'utils/injectReducer';
import {
  makeSelectImage,
  makeSelectResponse,
  makeSelectConfidence,
} from './redux/selectors';
import reducer from './redux/reducer';
import {
  changeImageAction,
  changeResponseAction,
  changeConfidenceAction,
} from './redux/actions';

import styles from './styles';

const HomePage = ({
  classes,
  response,
  imageUrl,
  onChangeImage,
  onChangeResponse,
  onChangeConfidence,
  confidence,
}) => (
  <Fade in timeout={1000}>
    <div>
      <ObjectRecognitionStepper imageUrl={imageUrl} response={response} />
      <UploadButton onChangeImage={onChangeImage} imageUrl={imageUrl} />
      <div className={classes.wrapper}>
        <ConfidenceSlider
          confidence={confidence}
          onChangeConfidence={onChangeConfidence}
          disabled={imageUrl === ''}
        />
        <SendButton
          imageUrl={imageUrl}
          onChangeResponse={onChangeResponse}
          confidence={confidence}
        />
      </div>
      <ObjectTable response={response} />
    </div>
  </Fade>
);

HomePage.propTypes = {
  classes: PropTypes.object.isRequired,
  onChangeImage: PropTypes.func.isRequired,
  onChangeResponse: PropTypes.func.isRequired,
  onChangeConfidence: PropTypes.func.isRequired,
  imageUrl: PropTypes.string.isRequired,
  response: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
  confidence: PropTypes.number.isRequired,
};

const mapStateToProps = createStructuredSelector({
  imageUrl: makeSelectImage(),
  response: makeSelectResponse(),
  confidence: makeSelectConfidence(),
});

function mapDispatchToProps(dispatch) {
  return {
    onChangeImage: image => dispatch(changeImageAction(image)),
    onChangeResponse: response => dispatch(changeResponseAction(response)),
    onChangeConfidence: confidence =>
      dispatch(changeConfidenceAction(confidence)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'request', reducer });

export default compose(
  withReducer,
  withConnect,
)(withStyles(styles)(HomePage));
