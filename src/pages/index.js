import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import AddIcon from '@material-ui/icons/Add';
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import { format } from 'date-fns';
import EnhancedTable from '../ui/EnhancedTable';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Hidden from '@material-ui/core/Hidden';
// import Switches from '../ui/Switches.js';

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

const createData = (name, date, service, features, complexity, platforms, users, total, search) => ({
  name,
  date,
  service,
  features,
  complexity,
  platforms,
  users,
  total,
  search,
});

export default function ProjectManager() {
  const classes = useStyles();
  const theme = useTheme();
  const [rows, setRows] = useState([
    createData(
      'Reece Witherspoon',
      '11/2/20',
      'Personal Projects',
      'E-Commerce',
      'High',
      'N/A',
      '10-100',
      '$15000',
      true
    ),
    createData(
      'Bill Gates',
      '10/17/19',
      'Get Job',
      'GPS, Push Notifications, Users/Authentication, File Transfer',
      'Medium',
      'Web Application',
      '0-10',
      '$1600',
      true
    ),
    createData(
      'Steve Jobs',
      '2/13/19',
      'Study',
      'Photo/Video, File Transfer, Users/Authentication',
      'Low',
      'Web Application',
      '10-100',
      '$1250',
      true
    ),
    createData(
      'Stan Smith',
      '2/13/19',
      'Andes Freelance',
      'Photo/Video, File Transfer, Users/Authentication',
      'Low',
      'iOS, Android',
      '10-100',
      '$1250',
      true
    ),

    createData(
      'Albert Einstein',
      '2/13/19',
      'Personal Projects',
      'Photo/Video, File Transfer, Users/Authentication',
      'Low',
      'Android',
      '10-100',
      '$1250',
      true
    ),
  ]);

  const platformOptions = ['Web', 'iOS', 'Android'];
  var featureOptions = [
    'Photo/Video',
    'GPS',
    'File Transfer',
    'Users/Authentication',
    'Biometrics',
    'Push Notifications',
  ];
  var getJobOptions = ['Basic', 'Interactive', 'E-Commerce'];

  const [jobChecked, setJobChecked] = useState(false);
  const [personalProjectsChecked, setPersonalProjectsChecked] = useState(false);
  const [andesFreelanceChecked, setAndesFreelanceChecked] = useState(false);
  const [studyChecked, setStudyChecked] = useState(false);
  const [completedChecked, setCompletedChecked] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [name, setName] = useState('');
  const [date, setDate] = useState(new Date());
  const [total, setTotal] = useState('');
  const [service, setService] = useState('');
  const [complexity, setComplexity] = useState('');
  const [users, setUsers] = useState('');
  const [platforms, setPlatforms] = useState([]);
  const [features, setFeatures] = useState([]);
  const [search, setSearch] = useState('');
  const [page, setPage] = React.useState(0);
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

  const addProject = () => {
    setRows([
      ...rows,
      createData(
        name,
        format(date, 'MM/dd/yy'),
        service,
        features.join(', '),
        service === 'Get Job' ? 'N/A' : complexity,
        service === 'Get Job' ? 'N/A' : platforms.join(', '),
        service === 'Get Job' ? 'N/A' : users,
        `$${total}`,
        true
      ),
    ]);
    setDialogOpen(false);
    setName('');
    setDate(new Date());
    setTotal('');
    setService('');
    setComplexity('');
    setUsers('');
    setPlatforms([]);
    setFeatures([]);
  };

  const handleSearch = (event) => {
    setSearch(event.target.value);

    const rowData = rows.map((row) => Object.values(row).filter((option) => option !== true && option !== false));

    const matches = rowData.map((row) =>
      row.map((option) => option.toLowerCase().includes(event.target.value.toLowerCase()))
    );

    const newRows = [...rows];
    matches.map((row, index) =>
      row.includes(true) ? (newRows[index].search = true) : (newRows[index].search = false)
    );

    setRows(newRows);
    setPage(0);
  };

  const serviceQuestions = (
    <React.Fragment>
      <Grid item style={{ marginTop: matchesSM ? 20 : '2em' }}>
        <Typography variant="h4">Service</Typography>
      </Grid>
      <Grid item>
        <RadioGroup
          aria-label="service"
          name="service"
          value={service}
          onChange={(event) => {
            setService(event.target.value);
            setFeatures([]);
          }}
        >
          <FormControlLabel classes={{ label: classes.service }} value="Get Job" label="Get Job" control={<Radio />} />
          <FormControlLabel
            classes={{ label: classes.service }}
            value="Personal Projects"
            label="Personal Projects"
            control={<Radio />}
          />
          <FormControlLabel
            classes={{ label: classes.service }}
            value="Andes Freelance"
            label="Andes Freelance"
            control={<Radio />}
          />
          <FormControlLabel classes={{ label: classes.service }} value="Study" label="Study" control={<Radio />} />
        </RadioGroup>
      </Grid>
    </React.Fragment>
  );

  const complexityQuestions = (
    <Grid item style={{ marginBottom: matchesSM ? 50 : null }}>
      <Grid item container direction="column" style={{ marginTop: matchesSM ? 50 : '2em' }}>
        <Grid item>
          <Typography variant="h4">Complexity</Typography>
        </Grid>
        <Grid item>
          <RadioGroup
            aria-label="complexity"
            name="complexity"
            value={complexity}
            onChange={(event) => setComplexity(event.target.value)}
          >
            <FormControlLabel classes={{ label: classes.service }} value="Low" label="Low" control={<Radio />} />
            <FormControlLabel classes={{ label: classes.service }} value="Medium" label="Medium" control={<Radio />} />
            <FormControlLabel classes={{ label: classes.service }} value="High" label="High" control={<Radio />} />
            <FormControlLabel classes={{ label: classes.service }} value="Ultra" label="Ultra" control={<Radio />} />
          </RadioGroup>
        </Grid>
      </Grid>
    </Grid>
  );

  const userQuestions = (
    <Grid item style={{ alignSelf: matchesSM ? 'center' : 'flex-end' }}>
      <Grid item container direction="column" style={{ marginTop: matchesSM ? 50 : '2em' }}>
        <Grid item>
          <Typography variant="h4">Users</Typography>
        </Grid>
        <Grid item>
          <RadioGroup aria-label="users" name="users" value={users} onChange={(event) => setUsers(event.target.value)}>
            <FormControlLabel
              disabled={service === 'Get Job'}
              classes={{
                label: classes.service,
                root: classes.users,
              }}
              value="0 - 10"
              label="0 - 10"
              control={<Radio />}
            />
            <FormControlLabel
              disabled={service === 'Get Job'}
              classes={{
                label: classes.service,
                root: classes.users,
              }}
              value="10 - 100"
              label="10 - 100"
              control={<Radio />}
            />
            <FormControlLabel
              disabled={service === 'Get Job'}
              classes={{
                label: classes.service,
                root: classes.users,
              }}
              value="100 - 500"
              label="100 - 500"
              control={<Radio />}
            />
            <FormControlLabel
              disabled={service === 'Get Job'}
              classes={{
                label: classes.service,
                root: classes.users,
              }}
              value="infinite / unknown"
              label="infinite / unknown"
              control={<Radio />}
            />
          </RadioGroup>
        </Grid>
      </Grid>
    </Grid>
  );

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils} style={{ zindex: 20 }}>
      <Grid container direction="column" alignItems={matchesSM ? 'center' : undefined}>
        <Grid item style={{ marginTop: '2em', marginLeft: matchesSM ? 0 : '2em' }}>
          <Typography variant="h1">Projects</Typography>
        </Grid>
        <Grid item>
          <TextField
            placeholder="Search project details or create a new entry."
            value={search}
            onChange={handleSearch}
            style={{
              width: matchesSM ? '25em' : '35em',
              marginLeft: matchesSM ? 0 : '5em',
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end" style={{ cursor: 'pointer ' }} onClick={() => setDialogOpen(true)}>
                  <AddIcon color="primary" style={{ fontSize: 30 }} />
                </InputAdornment>
              ),
            }}
          />
        </Grid>

        <Grid item style={{ marginLeft: matchesSM ? 0 : '5em', marginTop: '2em' }}>
          <FormGroup row>
            <Grid container direction={matchesSM ? 'column' : 'row'} justify={matchesSM ? 'center' : undefined}>
              <Grid item>
                <FormControlLabel
                  style={{ marginRight: matchesSM ? 0 : '5em' }}
                  control={<Switch checked={jobChecked} color="primary" onChange={() => setJobChecked(!jobChecked)} />}
                  label="Get Jobs"
                  labelPlacement={matchesSM ? 'end' : 'start'}
                />
              </Grid>
              <Grid item>
                <FormControlLabel
                  style={{ marginRight: matchesSM ? 0 : '5em' }}
                  control={
                    <Switch
                      checked={personalProjectsChecked}
                      color="primary"
                      onChange={() => setPersonalProjectsChecked(!personalProjectsChecked)}
                    />
                  }
                  label="Personal Projects"
                  labelPlacement={matchesSM ? 'end' : 'start'}
                />
              </Grid>
              <Grid item>
                <FormControlLabel
                  style={{ marginRight: matchesSM ? 0 : '5em' }}
                  control={
                    <Switch
                      checked={andesFreelanceChecked}
                      color="primary"
                      onChange={() => setAndesFreelanceChecked(!andesFreelanceChecked)}
                    />
                  }
                  label="Andes Freelance"
                  labelPlacement={matchesSM ? 'end' : 'start'}
                />
              </Grid>
              <Grid item>
                <FormControlLabel
                  style={{ marginRight: matchesSM ? 0 : '5em' }}
                  control={
                    <Switch checked={studyChecked} color="primary" onChange={() => setStudyChecked(!studyChecked)} />
                  }
                  label="Study"
                  labelPlacement={matchesSM ? 'end' : 'start'}
                />
              </Grid>
              <Grid item>
                <FormControlLabel
                  control={
                    <Switch
                      checked={completedChecked}
                      color="primary"
                      onChange={() => setCompletedChecked(!completedChecked)}
                    />
                  }
                  label="Completed"
                  labelPlacement={matchesSM ? 'end' : 'start'}
                />
              </Grid>
            </Grid>
          </FormGroup>
        </Grid>
        <Grid
          item
          style={{
            marginTop: '1em',
            maxWidth: '100%',
            marginBottom: matchesMD ? '5em' : '3em',
          }}
        >
          <EnhancedTable
            rows={rows}
            setRows={setRows}
            page={page}
            setPage={setPage}
            jobChecked={jobChecked}
            personalProjectsChecked={personalProjectsChecked}
            andesFreelanceChecked={andesFreelanceChecked}
            studyChecked={studyChecked}
            completedChecked={completedChecked}
          />
        </Grid>
        <Dialog
          maxWidth="md"
          open={dialogOpen}
          fullScreen={matchesSM}
          style={{ zIndex: 12 }}
          onClose={() => setDialogOpen(false)}
        >
          <Grid container justify="center">
            <Grid item>
              <Typography variant="h1" gutterBottom>
                Add a new project
              </Typography>
            </Grid>
          </Grid>
          <DialogContent>
            <Grid container justify="space-between" direction={matchesSM ? 'column' : 'row'}>
              <Grid item>
                <Grid item container direction="column" alignItems={matchesSM ? 'center' : undefined} sm>
                  <Hidden mdUp>{serviceQuestions}</Hidden>
                  <Hidden mdUp>{userQuestions}</Hidden>
                  <Hidden mdUp>{complexityQuestions}</Hidden>
                  <Grid item>
                    <TextField
                      label="Name"
                      style={{ width: matchesSM ? 250 : undefined }}
                      fullWidth={!matchesSM}
                      id="name"
                      value={name}
                      onChange={(event) => setName(event.target.value)}
                    />
                  </Grid>
                  <Grid item container direction="column" alignItems={matchesSM ? 'center' : undefined}>
                    <Hidden smDown>{serviceQuestions}</Hidden>
                    <Grid item style={{ marginTop: matchesSM ? 50 : '2em' }}>
                      <Select
                        labelId="platforms"
                        id="platforms"
                        disabled={service === 'Get Job'}
                        multiple
                        style={{ width: matchesSM ? 250 : '12em' }}
                        displayEmpty
                        renderValue={platforms.length > 0 ? undefined : () => 'Platforms'}
                        value={platforms}
                        onChange={(event) => setPlatforms(event.target.value)}
                      >
                        {platformOptions.map((option) => (
                          <MenuItem key={option} value={option}>
                            {option}
                          </MenuItem>
                        ))}
                      </Select>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Grid item container direction="column" sm alignItems="center" style={{ marginTop: 16 }}>
                  <Grid item style={{ marginTop: matchesSM ? 50 : null }}>
                    <KeyboardDatePicker
                      style={{ width: matchesSM ? 250 : undefined }}
                      format="MM/dd/yyyy"
                      value={date}
                      onChange={(newDate) => setDate(newDate)}
                    />
                  </Grid>
                  <Hidden smDown>{complexityQuestions}</Hidden>
                </Grid>
              </Grid>
              <Grid item>
                <Grid item container direction="column" sm alignItems={matchesSM ? 'center' : undefined}>
                  <Grid item style={{ marginTop: matchesSM ? 50 : null }}>
                    <TextField
                      style={{ width: matchesSM ? 250 : undefined }}
                      InputProps={{
                        startAdornment: <InputAdornment position="start">$</InputAdornment>,
                      }}
                      value={total}
                      id="total"
                      label="Total"
                      onChange={(event) => setTotal(event.target.value)}
                    />
                  </Grid>
                  <Hidden smDown>{userQuestions}</Hidden>

                  <Grid item style={{ marginTop: matchesSM ? 50 : '2em' }}>
                    <Select
                      labelId="features"
                      style={{ width: matchesSM ? 250 : '12em' }}
                      MenuProps={{ style: { zIndex: 1302 } }}
                      id="features"
                      multiple
                      displayEmpty
                      renderValue={features.length > 0 ? undefined : () => 'Features'}
                      value={features}
                      onChange={(event) => setFeatures(event.target.value)}
                    >
                      {service === 'Get Job' ? (featureOptions = getJobOptions) : null}
                      {featureOptions.map((option) => (
                        <MenuItem key={option} value={option}>
                          {option}
                        </MenuItem>
                      ))}
                    </Select>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid container justify="center" style={{ marginTop: '3em' }}>
              <Grid item>
                <Button onClick={() => setDialogOpen(false)} color="primary" style={{ fontWeight: 300 }}>
                  Cancel
                </Button>
              </Grid>
              <Grid item>
                <Button
                  variant="contained"
                  className={classes.button}
                  onClick={addProject}
                  disabled={
                    service === 'Get Job'
                      ? name.length === 0 || total.length === 0 || features.length === 0 || features.length > 1
                      : name.length === 0 ||
                        total.length === 0 ||
                        features.length === 0 ||
                        users.length === 0 ||
                        complexity.length === 0 ||
                        platforms.length === 0 ||
                        service.length === 0
                  }
                >
                  Add Project +
                </Button>
              </Grid>
            </Grid>
          </DialogContent>
        </Dialog>
      </Grid>
    </MuiPickersUtilsProvider>
  );
}
