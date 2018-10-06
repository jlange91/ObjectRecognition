import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { withStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';

import { makeSelectImage } from 'containers/HomePage/redux/selectors';
import { changeImageAction } from 'containers/HomePage/redux/actions';

import styles from './styles';
import messages from './messages';

class UploadButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    if (event.target.files[0] !== undefined)
      this.props.onChangeImage(
        window.URL.createObjectURL(event.target.files[0]),
      );
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <input
          accept="image/*"
          className={classes.input}
          id="icon-button-file"
          type="file"
          onChange={this.handleChange}
        />

        <ButtonBase
          focusRipple
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
        >
          <label htmlFor="icon-button-file">
            <span
              className={classes.imageSrc}
              style={{
                backgroundImage: `url(${this.props.imageUrl})`,
              }}
            />
            <span className={classes.imageBackdrop} />
            <span className={classes.imageButton}>
              <Typography
                component="span"
                variant="subheading"
                color="inherit"
                className={classes.imageTitle}
              >
                <FormattedMessage {...messages.upload} />
                <span className={classes.imageMarked} />
              </Typography>
            </span>
          </label>
        </ButtonBase>
      </div>
    );
  }
}

UploadButton.propTypes = {
  classes: PropTypes.object.isRequired,
  onChangeImage: PropTypes.func.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

const mapStateToProps = createStructuredSelector({
  imageUrl: makeSelectImage(),
});

function mapDispatchToProps(dispatch) {
  return {
    onChangeImage: image => dispatch(changeImageAction(image)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withStyles(styles)(UploadButton));
