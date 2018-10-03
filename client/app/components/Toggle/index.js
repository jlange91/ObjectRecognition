import React from 'react';
import PropTypes from 'prop-types';

import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { withStyles } from '@material-ui/core/styles';

import styles from './styles';

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
  classes: PropTypes.object.isRequired,
  onToggle: PropTypes.func.isRequired,
  values: PropTypes.array.isRequired,
  value: PropTypes.string.isRequired,
};

export default withStyles(styles)(Toggle);
