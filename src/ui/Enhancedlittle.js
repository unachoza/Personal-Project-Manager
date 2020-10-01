import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Paper from '@material-ui/core/Paper';

import Grid from '@material-ui/core/Grid';

const headCells = [
  { id: 'attribute', label: 'Attribute' },
  { id: 'array', label: 'Array' },
  { id: 'singleLL', label: 'Singly Linked List' },
  { id: 'doubleLL', label: 'Doubly Linked List' },
  { id: 'tree', label: 'Tree' },
  { id: 'trie', label: 'Trie' },
  { id: 'graph', label: 'Graph' },
  { id: 'stack', label: 'Stacks' },
  { id: 'queues', label: 'Queues' },
  { id: 'heaps', label: 'Heaps' },
  { id: 'hashTables', label: 'HashTables' },
];

const EnhancedTableHead = () => {
  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell key={headCell.id} align="center">
            <TableSortLabel>{headCell.label}</TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  paper: {
    borderRadius: '8px',
    boxShadow: '0 0.5rem 1rem rgba(0, 0, 0, 0.2)',
    padding: '13px',
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
  chip: {
    marginRight: '2em',
    backgroundColor: theme.palette.common.blue,
    color: '#fff',
  },
}));

export default function EnhancedLittle(props) {
  const classes = useStyles();

  return (
    <div className={classes.root} style={{ width: '90%', margin: '0 auto' }}>
      <Paper className={classes.paper} elevation={0}>
        <TableContainer>
          <Table className={classes.table} aria-labelledby="tableTitle" size="medium" aria-label="enhanced table">
            <EnhancedTableHead classes={classes} />
            <TableBody>
              {props.rows.map((row, index) => {
                const labelId = `enhanced-table-checkbox-${index}`;
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.name}>
                    <TableCell align="left" component="th" id={labelId} scope="row" marginLeft="50">
                      {row.attribute}
                    </TableCell>
                    <TableCell align="center">{row.array}</TableCell>
                    <TableCell align="center">{row.singleLL}</TableCell>
                    <TableCell align="center">{row.doubleLL}</TableCell>
                    <TableCell align="center">{row.tree}</TableCell>
                    <TableCell align="center">{row.trie}</TableCell>
                    <TableCell align="center">{row.graph}</TableCell>
                    <TableCell align="center">{row.stack}</TableCell>
                    <TableCell align="center">{row.queue}</TableCell>
                    <TableCell align="center">{row.heap}</TableCell>
                    <TableCell align="center">{row.hashTable}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
        <Grid container justify="flex-end"></Grid>
      </Paper>
    </div>
  );
}
