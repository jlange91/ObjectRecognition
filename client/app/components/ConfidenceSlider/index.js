import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/lab/Slider';

import {
  makeSelectImage,
  makeSelectConfidence,
} from 'containers/HomePage/redux/selectors';
import { changeConfidenceAction } from 'containers/HomePage/redux/actions';
import messages from './messages';
import styles from './styles';

class ConfidenceSlider extends React.Component {
  handleChange = (event, value) => {
    this.props.onChangeConfidence(value);
  };

  render() {
    const { classes, confidence, imageUrl } = this.props;
    const disabled = imageUrl === '';

    return (
      <div className={classes.root}>
        <Typography id="label" className={classes.title}>
          <FormattedMessage {...messages.confidence} />
        </Typography>
        <Slider
          value={confidence}
          min={0}
          max={1}
          step={0.1}
          aria-labelledby="label"
          disabled={disabled}
          onChange={this.handleChange}
        />
        <Typography id="label">{Math.round(confidence * 10) / 10}</Typography>
      </div>
    );
  }
}

ConfidenceSlider.propTypes = {
  classes: PropTypes.object.isRequired,
  confidence: PropTypes.number.isRequired,
  onChangeConfidence: PropTypes.func.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

const mapStateToProps = createStructuredSelector({
  imageUrl: makeSelectImage(),
  confidence: makeSelectConfidence(),
});

function mapDispatchToProps(dispatch) {
  return {
    onChangeConfidence: confidence =>
      dispatch(changeConfidenceAction(confidence)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withStyles(styles)(ConfidenceSlider));
