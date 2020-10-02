import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { format } from 'date-fns';
import EnhancedLittle from '../ui/Enhancedlittle';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

const useStyles = makeStyles((theme) => ({
  title: {
    marginLeft: '80px',
    fontSize: '50px',
  },
  icon: {
    color: 'green',
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
    createData('Stable', <FiberManualRecordIcon className={classes.icon} />, '', '', '', '', '', ''),
    createData('Hierarchical', null, '', '', '', '', '', ''),
    createData('Allows Duplicates', <FiberManualRecordIcon className={classes.icon} />, '', '', '', '', '', ''),
    createData('Has Value', <FiberManualRecordIcon className={classes.icon} />, '', '', '', '', '', ''),
    createData('Has Reference to Other Nodes', null, '', '', '', '', '', ''),
    createData('Node Can Contain Information', null, '', '', '', '', '', ''),
    createData('Node Can Only Point To Child (Not Root Or Parent', null, '', '', '', '', '', ''),
    createData('One Enterance to Data Structure', null, '', '', '', '', '', ''),
    createData('Weighted Relationships', null, '', '', '', '', '', ''),
    createData(
      'Unweighted Relationships',
      <FiberManualRecordIcon className={classes.icon} />,
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      ''
    ),
    createData('Asyclic Relationships', null, '', '', '', '', '', ''),
    createData('Cyclic Relationships', null, '', '', '', '', '', ''),
    createData('Directed Relationships', null, '', '', '', '', '', ''),
    createData('Undirected Relationships', null, '', '', '', '', '', ''),
    createData('Preserves Relationships', null, '', '', '', '', '', ''),
    createData('Can Only Have Two Children', null, '', '', '', '', '', ''),
    createData('Sorted Data', <FiberManualRecordIcon className={classes.icon} />, '', '', '', '', '', ''),
    createData('Unsorted Data', <FiberManualRecordIcon className={classes.icon} />, '', '', '', '', '', ''),
    createData('Priority', null, '', '', '', '', '', ''),
    createData('Linear', <FiberManualRecordIcon className={classes.icon} />, '', '', '', '', '', ''),
    createData('Null Terminated', null, '', '', '', '', '', ''),
    createData('Flexible Sizesssss', <FiberManualRecordIcon className={classes.icon} />, '', '', '', '', '', ''),
  ]);

  return (
    <Grid container direction="column" alignItems>
      <Typography className={classes.title} variant="h1">
        Data Structures
      </Typography>
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
