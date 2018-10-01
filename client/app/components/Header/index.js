import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Fade from '@material-ui/core/Fade';

import LocaleToggle from 'containers/LocaleToggle';
import messages from './messages';
import styles from './styles';

function Header(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Fade in timeout={1000}>
        <AppBar position="static" color="primary">
          <Toolbar className={classes.toolbar}>
            <Typography variant="title" color="inherit">
              <FormattedMessage {...messages.title} />
            </Typography>
            <div className={classes.language}>
              <LocaleToggle className={classes.language} />
            </div>
          </Toolbar>
        </AppBar>
      </Fade>
    </div>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
