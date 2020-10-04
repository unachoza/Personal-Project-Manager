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
    createData(
      'Hierarchical',
      null,
      null,
      null,
      <FiberManualRecordIcon className={classes.icon} />,
      <FiberManualRecordIcon className={classes.icon} />,
      null,
      <FiberManualRecordIcon className={classes.icon} />
    ),
    createData(
      'Allows Duplicates',
      <FiberManualRecordIcon className={classes.icon} />,
      <FiberManualRecordIcon className={classes.icon} />,
      <FiberManualRecordIcon className={classes.icon} />,
      null,
      null,
      null,
      null
    ),
    createData(
      'Has Value',
      <FiberManualRecordIcon className={classes.icon} />,
      <FiberManualRecordIcon className={classes.icon} />,
      <FiberManualRecordIcon className={classes.icon} />,
      <FiberManualRecordIcon className={classes.icon} />,
      null,
      <FiberManualRecordIcon className={classes.icon} />,
      <FiberManualRecordIcon className={classes.icon} />
    ),
    createData(
      'Has Reference to Other Nodes',
      null,
      <FiberManualRecordIcon className={classes.icon} />,
      <FiberManualRecordIcon className={classes.icon} />,
      <FiberManualRecordIcon className={classes.icon} />,
      null,
      <FiberManualRecordIcon className={classes.icon} />,
      <FiberManualRecordIcon className={classes.icon} />
    ),
    createData(
      'Node Can Contain Information',
      null,
      <FiberManualRecordIcon className={classes.icon} />,
      <FiberManualRecordIcon className={classes.icon} />,
      <FiberManualRecordIcon className={classes.icon} />,
      null,
      <FiberManualRecordIcon className={classes.icon} />,
      <FiberManualRecordIcon className={classes.icon} />
    ),
    createData(
      'Node Can Only Point To Child (Not Root Or Parent)',
      null,
      null,
      null,
      <FiberManualRecordIcon className={classes.icon} />,
      <FiberManualRecordIcon className={classes.icon} />,
      null,
      null
    ),
    createData(
      'One Enterance to Data Structure',
      null,
      <FiberManualRecordIcon className={classes.icon} />,
      null,
      <FiberManualRecordIcon className={classes.icon} />,
      <FiberManualRecordIcon className={classes.icon} />,
      null,
      <FiberManualRecordIcon className={classes.icon} />
    ),
    createData(
      'Weighted Relationships',
      null,
      null,
      null,
      null,
      null,
      <FiberManualRecordIcon className={classes.icon} />,
      null
    ),
    createData(
      'Unweighted Relationships',
      <FiberManualRecordIcon className={classes.icon} />,
      <FiberManualRecordIcon className={classes.icon} />,
      <FiberManualRecordIcon className={classes.icon} />,
      <FiberManualRecordIcon className={classes.icon} />,
      <FiberManualRecordIcon className={classes.icon} />,
      <FiberManualRecordIcon className={classes.icon} />,
      null,
      '',
      ''
    ),
    createData(
      'Asyclic Relationships',
      null,
      <FiberManualRecordIcon className={classes.icon} />,
      null,
      <FiberManualRecordIcon className={classes.icon} />,
      <FiberManualRecordIcon className={classes.icon} />,
      <FiberManualRecordIcon className={classes.icon} />,
      null
    ),
    createData(
      'Cyclic Relationships',
      null,
      null,
      null,
      null,
      null,
      <FiberManualRecordIcon className={classes.icon} />,
      null
    ),
    createData(
      'Directed Relationships',
      null,
      <FiberManualRecordIcon className={classes.icon} />,
      <FiberManualRecordIcon className={classes.icon} />,
      <FiberManualRecordIcon className={classes.icon} />,
      <FiberManualRecordIcon className={classes.icon} />,
      <FiberManualRecordIcon className={classes.icon} />,
      <FiberManualRecordIcon className={classes.icon} />
    ),
    createData(
      'Undirected Relationships',
      null,
      null,
      null,
      null,
      null,
      <FiberManualRecordIcon className={classes.icon} />,
      null
    ),
    createData(
      'Preserves Relationships',
      null,
      null,
      null,
      <FiberManualRecordIcon className={classes.icon} />,
      <FiberManualRecordIcon className={classes.icon} />,
      null,
      <FiberManualRecordIcon className={classes.icon} />
    ),
    createData('Can Only Have Two Children', null, null, null, null, null, null, null),
    createData('Sorted Data', <FiberManualRecordIcon className={classes.icon} />, null, null, null, null, null, null),
    createData(
      'Unsorted Data',
      <FiberManualRecordIcon className={classes.icon} />,
      <FiberManualRecordIcon className={classes.icon} />,
      <FiberManualRecordIcon className={classes.icon} />,
      <FiberManualRecordIcon className={classes.icon} />,
      <FiberManualRecordIcon className={classes.icon} />,
      <FiberManualRecordIcon className={classes.icon} />,
      <FiberManualRecordIcon className={classes.icon} />
    ),
    createData('Priority', null, null, null, null, null, null, <FiberManualRecordIcon className={classes.icon} />),
    createData(
      'Linear',
      <FiberManualRecordIcon className={classes.icon} />,
      <FiberManualRecordIcon className={classes.icon} />,
      <FiberManualRecordIcon className={classes.icon} />,
      null,
      null,
      null,
      <FiberManualRecordIcon className={classes.icon} />
    ),
    createData(
      'Null Terminated',
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      <FiberManualRecordIcon className={classes.icon} />
    ),
    createData(
      'Flexible Sizes',
      <FiberManualRecordIcon className={classes.icon} />,
      <FiberManualRecordIcon className={classes.icon} />,
      <FiberManualRecordIcon className={classes.icon} />,
      <FiberManualRecordIcon className={classes.icon} />,
      <FiberManualRecordIcon className={classes.icon} />,
      <FiberManualRecordIcon className={classes.icon} />,
      <FiberManualRecordIcon className={classes.icon} />
    ),
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
