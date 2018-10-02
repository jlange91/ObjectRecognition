import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';
import { MuiThemeProvider } from '@material-ui/core/styles';

import HomePage from 'containers/HomePage';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';

import { styles, theme } from './styles';

function App(props) {
  const { classes } = props;

  return (
    <MuiThemeProvider theme={theme}>
      <div className={classes.root}>
        <Header />
        <div className={classes.wrapper1}>
          <div className={classes.wrapper2}>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route component={NotFoundPage} />
            </Switch>
          </div>
        </div>
      </div>
    </MuiThemeProvider>
  );
}

export default withStyles(styles)(App);
