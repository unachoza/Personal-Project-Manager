import { createMuiTheme } from '@material-ui/core/styles';

const pink = '#AD1457';
const turquiose = '#006064';
const arcGrey = '#868686';

export default createMuiTheme({
  palette: {
    common: {
      blue: pink,
      orange: turquiose,
    },
    primary: {
      main: pink,
    },
    secondary: {
      main: turquiose,
    },
  },
  typography: {
    tab: {
      fontFamily: 'Raleway',
      textTransform: 'none',
      fontWeight: 700,
      color: 'white',
      fontSize: '1rem',
    },
    estimate: {
      fontFamily: 'Pacifico',
      fontSize: '1rem',
      textTransform: 'none',
      color: 'white',
    },
    h1: {
      fontFamily: 'Raleway',
      fontWeight: 700,
      fontSize: '2.5rem',
      color: pink,
      lineHeight: 1.5,
    },
    h3: {
      fontFamily: 'Pacifico',
      fontSize: '2.5rem',
      color: pink,
    },
    h4: {
      fontFamily: 'Raleway',
      fontSize: '1.75rem',
      color: pink,
      fontWeight: 700,
    },
    h6: {
      fontWeight: 500,
      fontFamily: 'Raleway',
      color: pink,
    },
    subtitle1: {
      fontSize: '1.25rem',
      fontWeight: 300,
      color: arcGrey,
    },
    subtitle2: {
      color: 'white',
      fontWeight: 300,
      fontSize: '1.25rem',
    },
    body1: {
      fontSize: '1.25rem',
      color: arcGrey,
      fontWeight: 300,
    },
    caption: {
      fontSize: '1rem',
      fontWeight: 300,
      color: arcGrey,
    },
    learnButton: {
      borderColor: pink,
      borderWidth: 2,
      textTransform: 'none',
      color: pink,
      borderRadius: 50,
      fontFamily: 'Roboto',
      fontWeight: 'bold',
    },
  },
  overrides: {
    MuiTableCell: {
      head: {
        fontSize: '1rem',
        fontWeight: 700,
        color: pink,
        borderColor: pink,
        borderWidth: 2,
      },
      body: {
        color: arcGrey,
        borderColor: pink,
        borderWidth: 2,
      },
    },
    MuiTableSortLabel: {
      root: {
        '&:hover': {
          color: turquiose,
        },
        '&.MuiTableSortLabel-active': {
          color: turquiose,
        },
      },
      icon: {
        fill: turquiose,
      },
    },
    MuiSvgIcon: {
      root: {
        '&.MuiSelect-icon': {
          fill: turquiose,
        },
      },
    },
    MuiFormControlLabel: {
      label: {
        color: pink,
        fontWeight: 700,
      },
      labelPlacementStart: {
        marginLeft: 0,
      },
    },
    MuiInputLabel: {
      root: {
        color: pink,
        fontSize: '1rem',
      },
    },
    MuiInput: {
      root: {
        color: arcGrey,
        fontWeight: 300,
      },
      underline: {
        '&:before': {
          borderBottom: `2px solid ${pink}`,
        },
        '&:hover:not($disabled):not($focused):not($error):before': {
          borderBottom: `2px solid ${pink}`,
        },
      },
    },
  },
});
