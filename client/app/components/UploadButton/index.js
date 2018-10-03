import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { withStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';

import styles from './styles';
import messages from './messages';

class UploadButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    let file = event.target.files[0];
    let reader = new FileReader();
    let { onChangeImage } = this.props;

    reader.onloadend = function() {
      onChangeImage(reader.result);
    };
    reader.readAsDataURL(file);
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
              id="test1"
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

export default withStyles(styles)(UploadButton);
