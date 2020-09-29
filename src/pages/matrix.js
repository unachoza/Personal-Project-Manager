import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { format } from 'date-fns';
import EnhancedLittle from '../ui/Enhancedlittle';

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
    createData('Stable', 'yes', '', '', '', '', '', ''),
    createData('Hierarchical', 'no', '', '', '', '', '', ''),
    createData('Allows Duplicates', 'yes', '', '', '', '', '', ''),
    createData('Has Value', '', '', 'yes', '', '', '', ''),
    createData('Has Reference to Other Nodes', 'no', '', '', '', '', '', ''),
    createData('Node Can Contain Information', 'no', '', '', '', '', '', ''),
    createData('Node Can Only Point To Child (Not Root Or Parent', 'no', '', '', '', '', '', ''),
    createData('One Enterance to Data Structure', 'no', '', '', '', '', '', ''),
    createData('Weighted Relationships', 'no', '', '', '', '', '', ''),
    createData('Unweighted Relationships', 'no', '', '', '', '', '', '', '', ''),
    createData('Asyclic Relationships', 'no', '', '', '', '', '', ''),
    createData('Cyclic Relationships', 'no', '', '', '', '', '', ''),
    createData('Directed Relationships', 'no', '', '', '', '', '', ''),
    createData('Undirected Relationships', 'no', '', '', '', '', '', ''),
    createData('Preserves Relationships', 'no', '', '', '', '', '', ''),
    createData('Can Only Have Two Children', 'no', '', '', '', '', '', ''),
    createData('Sorted Data', 'yes', '', '', '', '', '', ''),
    createData('Unsorted Data', 'yes', '', '', '', '', '', ''),
    createData('Priority', 'no', '', '', '', '', '', ''),
    createData('Linear', 'yes', '', '', '', '', '', ''),
    createData('Null Terminated', 'no', '', '', '', '', '', ''),
    createData('Flexible Size', 'yes', '', '', '', '', '', ''),
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
