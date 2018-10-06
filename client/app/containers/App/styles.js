import { createMuiTheme } from '@material-ui/core/styles';
import { blue, grey } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: blue[300],
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#757ce8',
      main: grey[300],
      dark: '#002884',
      contrastText: '#fff',
    },
  },
});

const styles = {
  root: {
    minHeight: '100%',
    minWidth: '440px',
    backgroundColor: '#F2F2F2',
  },
  wrapper1: {
    padding: '10px',
    overflow: 'scroll',
  },
  wrapper2: {
    backgroundColor: '#EAEAEA',
    padding: '10px',
  },
};

export { theme, styles };
