import { green, blue } from '@material-ui/core/colors';

const styles = theme => ({
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
  buttonProgress: {
    color: green[500],
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
  wrapper: {
    position: 'relative',
  },
  button: {
    margin: theme.spacing.unit,
    color: 'white',
    '&:hover': {
      backgroundColor: blue[500],
    },
  },
});

export default styles;
