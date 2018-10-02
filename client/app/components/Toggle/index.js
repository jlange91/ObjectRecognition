import React from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  test: {
    color: 'white',
    width: '60px',
    textAlign: 'center',
  },
});

class Toggle extends React.Component {
  state = {
    language: this.props.value,
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
    this.props.onToggle(event.target.value);
  };

  render() {
    const { classes } = this.props;

    return (
      <FormControl>
        <Select
          value={this.state.language}
          onChange={this.handleChange}
          name="language"
          className={classes.test}
        >
          {this.props.values.map(language => (
            <MenuItem value={language} key={language}>
              {language}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    );
  }
}

Toggle.propTypes = {
  onToggle: PropTypes.func.isRequired,
  values: PropTypes.array.isRequired,
  value: PropTypes.string.isRequired,
};

export default withStyles(styles)(Toggle);
