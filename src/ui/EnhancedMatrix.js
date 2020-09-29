import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { lighten, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import DeleteIcon from '@material-ui/icons/Delete';
import FilterListIcon from '@material-ui/icons/FilterList';
import Snackbar from '@material-ui/core/Snackbar';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Chip from '@material-ui/core/Chip';
import Grid from '@material-ui/core/Grid';

function desc(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getSorting(order, orderBy) {
  return order === 'desc' ? (a, b) => desc(a, b, orderBy) : (a, b) => -desc(a, b, orderBy);
}

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

function EnhancedTableHead(props) {
  const { classes, onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{ 'aria-label': 'select all desserts' }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell key={headCell.id} align="center" sortDirection={orderBy === headCell.id ? order : false}>
            <TableSortLabel
              hideSortIcon
              active={orderBy === headCell.id}
              direction={order}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const useToolbarStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
  },
  highlight:
    theme.palette.type === 'light'
      ? {
          color: theme.palette.secondary.main,
          backgroundColor: lighten(theme.palette.secondary.light, 0.85),
        }
      : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.secondary.dark,
        },
  title: {
    flex: '1 1 100%',
  },
  menu: {
    '&:hover': {
      backgroundColor: '#fff',
    },
    '&.Mui-focusVisible': {
      backgroundColor: '#fff',
    },
  },
  totalFilter: {
    fontSize: '2rem',
    color: theme.palette.common.orange,
  },
  dollarSign: {
    fontSize: '1.5rem',
    color: theme.palette.common.orange,
  },
}));

const EnhancedTableToolbar = (props) => {
  const classes = useToolbarStyles();
  const { numSelected } = props;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [openMenu, setOpenMenu] = React.useState(false);

  const [alert, setAlert] = React.useState({
    open: false,
    color: '#FF3232',
    message: 'Row deleted!',
  });

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
    setOpenMenu(true);
  };

  const handleClose = (e) => {
    setAnchorEl(null);
    setOpenMenu(false);
  };

  const filterChange = (operator) => {
    if (props.filterPrice !== '') {
      const newRows = [...props.rows];
      newRows.map((row) =>
        eval(`${props.filterPrice} ${operator === '=' ? '===' : operator} ${row.total.slice(1, row.total.length)}`)
          ? (row.search = true)
          : (row.search = false)
      );
      props.setRows(newRows);
    }
  };

  return (
    <Toolbar
      className={clsx(classes.root, {
        [classes.highlight]: numSelected > 0,
      })}
    >
      {numSelected > 0 ? (
        <Typography className={classes.title} color="inherit" variant="subtitle1">
          {numSelected} selected
        </Typography>
      ) : (
        <Typography className={classes.title} color="inherit" variant="subtitle1">
          {null}
        </Typography>
      )}

      <Snackbar
        open={alert.open}
        ContentProps={{
          style: {
            backgroundColor: alert.color,
          },
        }}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        message={alert.message}
      />
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        open={openMenu}
        onClose={handleClose}
        elevation={0}
        style={{ zIndex: 1302 }}
        keepMounted
      >
        <MenuItem classes={{ root: classes.menu }}>
          <TextField
            value={props.filterPrice}
            placeholder="Enter a price to filter"
            InputProps={{
              type: 'number',
              startAdornment: (
                <InputAdornment position="start">
                  <span className={classes.dollarSign}>$</span>
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment
                  onClick={() => {
                    props.setTotalFilter(props.totalFilter === '>' ? '<' : props.totalFilter === '<' ? '=' : '>');
                    filterChange(props.totalFilter === '>' ? '<' : props.totalFilter === '<' ? '=' : '>');
                  }}
                  position="end"
                  style={{ cursor: 'pointer' }}
                >
                  <span className={classes.totalFilter}>{props.totalFilter}</span>
                </InputAdornment>
              ),
            }}
          />
        </MenuItem>
      </Menu>
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
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

export default function EnhancedMatrix(props) {
  const classes = useStyles();
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('name');
  const [selected, setSelected] = React.useState([]);
  const [rowsPerPage, setRowsPerPage] = React.useState(30);
  const [filterPrice, setFilterPrice] = React.useState('');
  const [totalFilter, setTotalFilter] = React.useState('>');

  const handleRequestSort = (event, property) => {
    const isDesc = orderBy === property && order === 'desc';
    setOrder(isDesc ? 'asc' : 'desc');
    setOrderBy(property);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
    }

    setSelected(newSelected);
  };
  const isSelected = (name) => selected.indexOf(name) !== -1;

  return (
    <div className={classes.root} style={{ width: '90%', margin: '0 auto' }}>
      <Paper className={classes.paper} elevation={0}>
        <EnhancedTableToolbar
          rows={props.rows}
          setRows={props.setRows}
          selected={selected}
          setSelected={setSelected}
          numSelected={selected.length}
          setFilterPrice={setFilterPrice}
          totalFilter={totalFilter}
          setTotalFilter={setTotalFilter}
        />
        <TableContainer>
          <Table className={classes.table} aria-labelledby="tableTitle" size="medium" aria-label="enhanced table">
            <EnhancedTableHead
              classes={classes}
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              rowCount={props.rows.length}
            />
            <TableBody>
              {props.rows.map((row, index) => {
                const labelId = `enhanced-table-checkbox-${index}`;

                return (
                  <TableRow
                    hover
                    onClick={(event) => handleClick(event, row.name)}
                    role="checkbox"
                    tabIndex={-1}
                    key={row.name}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox checked={false} inputProps={{ 'aria-labelledby': labelId }} />
                    </TableCell>
                    <TableCell align="center" component="th" id={labelId} scope="row" padding="none">
                      {row.attribute}
                    </TableCell>
                    <TableCell align="center">{row.array}</TableCell>
                    <TableCell align="center">{row.singleLL}</TableCell>
                    <TableCell align="center">{row.doubleLL}</TableCell>
                    <TableCell align="center" style={{ width: '5em' }}>
                      {row.tree}
                    </TableCell>
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
