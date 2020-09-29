import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { format } from 'date-fns';
import EnhancedLittle from '../ui/EnhancedLittle';

const useStyles = makeStyles((theme) => ({
  service: {
    fontWeight: 300,
  },
  users: {
    marginRight: 0,
  },
  button: {
    color: '#fff',
    backgroundColor: theme.palette.common.orange,
    borderRadius: 50,
    textTransform: 'none',
    '&:hover': {
      backgroundColor: theme.palette.secondary.light,
    },
  },
}));

const createData = (attribute, array, singleLL, doubleLL, tree, trie, graph, stacks, queues, heaps, hashTables) => ({
  attribute,
  array,
  singleLL,
  doubleLL,
  tree,
  trie,
  graph,
  stacks,
  queues,
  heaps,
  hashTables,
});

export default function ProjectManager() {
  const classes = useStyles();
  const theme = useTheme();
  const [rows, setRows] = useState([
    createData('Stable', '', '', '', '', '', '', ''),
    createData('Hierarchical', '', '', '', '', '', '', ''),
    createData('Allows Duplicates', '', '', '', '', '', '', ''),
    createData('Has Value', '', '', 'yes', '', '', '', ''),
    createData('Has Reference to Other Nodes', '', '', '', '', '', '', ''),
    createData('Node Can Contain Information', '', '', '', '', '', '', ''),
    createData('Node Can Only Point To Child (Not Root Or Parent', '', '', '', '', '', '', ''),
    createData('One Enterance to Data Structure', '', '', '', '', '', '', ''),
    createData('Weighted Relationships', 'no', '', '', '', '', '', ''),
    createData('Unweighted Relationships', '', '', '', '', '', '', '', '', ''),
    createData('Asyclic Relationships', '', '', '', '', '', '', ''),
    createData('Cyclic Relationships', '', '', '', '', '', '', ''),
    createData('Directed Relationships', '', '', '', '', '', '', ''),
    createData('Undirected Relationships', '', '', '', '', '', '', ''),
    createData('Preserves Relationships', '', '', '', '', '', '', ''),
    createData('Can Only Have Two Children', '', '', '', '', '', '', ''),
    createData('Sorted Data', '', '', '', '', '', '', ''),
    createData('Unsorted Data', '', '', '', '', '', '', ''),
    createData('Priority', '', '', '', '', '', '', ''),
    createData('Linear', '', '', '', '', '', '', ''),
    createData('Null Terminated', '', '', '', '', '', '', ''),
    createData('Flexible Size', '', '', '', '', '', '', ''),
    createData('Stable', '', 'me', '', '', '', '', '', '', ''),
  ]);

  return (
    <Grid container direction="column" alignItems>
      <Typography variant="h1">Data Structures</Typography>
      <Grid
        item
        style={{
          marginTop: '1em',
          maxWidth: '100%',
        }}
      >
        <EnhancedLittle rows={rows} setRows={setRows} />
      </Grid>
    </Grid>
  );
}
