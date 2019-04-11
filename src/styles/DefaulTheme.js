import { createMuiTheme } from "@material-ui/core/styles/index";
import theme from "./Style";

function pxToRem(value) {
  return `${value / 16}rem`;
}

const DefaultTheme = createMuiTheme({
  palette: {
    primary: {
      header: theme.palette.primary.header,
      light: theme.palette.primary.light,
      main: theme.palette.primary.main,
      dark: theme.palette.primary.dark,
      darkGray: theme.palette.primary.darkGray,
      contrastText: theme.common.white
    },
    secondary: {
      light: theme.palette.secondary.light,
      main: theme.palette.secondary.main,
      dark: theme.palette.secondary.dark,
      contrastText: theme.common.white
    },
    success: theme.palette.success,
    error: theme.palette.error
  },
  common: {
    gray: theme.common.gray
  },
  typography: {
    useNextVariants: true
  },
  overrides: {
    MuiTypography: {
      h6: {
        fontSize: pxToRem(14),
        fontWeight: "bold"
      },
      h5: {
        fontWeight: "bold"
      }
    },
    MuiTableCell: {
      root: {
        border: "1px solid rgba(224, 224, 224, 1)"
      }
    }
  }
});

export default DefaultTheme;