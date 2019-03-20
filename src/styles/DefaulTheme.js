import {createMuiTheme} from '@material-ui/core/styles/index';
import theme from './Style';
function pxToRem(value) {
  return `${value / 16}rem`;
}
const DefaultTheme = createMuiTheme({
  palette: {
    primary: {
      light: theme.palette.primary.light,
      main: theme.palette.primary.main,
      dark: theme.palette.primary.dark,
      contrastText: theme.common.white,
    },
    secondary: {
      light: theme.palette.secondary.light,
      main: theme.palette.secondary.main,
      dark: theme.palette.secondary.dark,
      contrastText: theme.common.white,
    },
    error: theme.palette.error,
  },
  overrides: {
    MuiTypography: {
      h6: {
        fontSize: pxToRem(14),
        fontWeight:'bold',
      },
      h5:{
        fontWeight:'bold',
      }

    }
  },
});

export default DefaultTheme;