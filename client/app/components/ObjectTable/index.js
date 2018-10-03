import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import styles, { CustomTableCell } from './styles';
import messages from './messages';

function ObjectTable(props) {
  const { classes, response } = props;

  let id = 0;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <CustomTableCell className={classes.title}>
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
                <CustomTableCell component="th" scope="row">
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

ObjectTable.propTypes = {
  classes: PropTypes.object.isRequired,
  response: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
};

export default withStyles(styles)(ObjectTable);
