import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';

import { makeSelectResponse } from 'containers/HomePage/redux/selectors';
import { changeResponseAction } from 'containers/HomePage/redux/actions';

import styles, { CustomTableCell } from './styles';
import messages from './messages';

class ObjectTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = { toggle: true };
    this.handleChangeHeader = this.handleChangeHeader.bind(this);
    this.handleChangeBody = this.handleChangeBody.bind(this);
  }

  handleChangeHeader() {
    this.setState({ toggle: !this.state.toggle });
    const response = this.props.response.slice();
    response.map(data => {
      const ret = data;
      ret.show = !this.state.toggle;
      return ret;
    });
    this.props.onChangeResponse(response);
  }

  handleChangeBody(e) {
    const id = e.target.getAttribute('tabindex');
    const ret = this.props.response.slice();
    ret[id].show = !ret[id].show;
    this.props.onChangeResponse(ret);
  }

  render() {
    const { classes, response } = this.props;

    let id = -1;

    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <CustomTableCell className={classes.title} padding="checkbox">
                <Checkbox
                  checked={this.state.toggle}
                  color="secondary"
                  onClick={this.handleChangeHeader}
                />
                <FormattedMessage {...messages.name} />
              </CustomTableCell>
              <CustomTableCell className={classes.title} numeric>
                <FormattedMessage {...messages.confidence} />
              </CustomTableCell>
              <CustomTableCell numeric>X</CustomTableCell>
              <CustomTableCell className={classes.title} numeric>
                Y
              </CustomTableCell>
              <CustomTableCell className={classes.title} numeric>
                <FormattedMessage {...messages.height} />
              </CustomTableCell>
              <CustomTableCell className={classes.title} numeric>
                <FormattedMessage {...messages.width} />
              </CustomTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {response.map(row => {
              id += 1;
              return (
                <TableRow className={classes.row} key={id}>
                  <CustomTableCell
                    component="th"
                    scope="row"
                    padding="checkbox"
                  >
                    <Checkbox
                      checked={row.show}
                      color="secondary"
                      tabIndex={id}
                      onClick={this.handleChangeBody}
                    />
                    {row.className}
                  </CustomTableCell>
                  <CustomTableCell numeric>{row.confidence}</CustomTableCell>
                  <CustomTableCell numeric>{row.rect.x}</CustomTableCell>
                  <CustomTableCell numeric>{row.rect.y}</CustomTableCell>
                  <CustomTableCell numeric>{row.rect.height}</CustomTableCell>
                  <CustomTableCell numeric>{row.rect.width}</CustomTableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

ObjectTable.propTypes = {
  classes: PropTypes.object.isRequired,
  response: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
  onChangeResponse: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  response: makeSelectResponse(),
});

function mapDispatchToProps(dispatch) {
  return {
    onChangeResponse: response => dispatch(changeResponseAction(response)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withStyles(styles)(ObjectTable));
