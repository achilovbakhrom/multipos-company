
import red from '@material-ui/core/colors/red';

const PrimaryLightColor = '#b7dffd';
const PrimaryColor = '#49a4de';
const DarkGray = '#84adc6';
const DarkPrimary = '#245275';
const SuccessColor = '#4bb04f';
const SecondaryLightColor = '#d7b7fd';
const SecondaryColor = '#6200ee';
const SecondaryDarkColor = '#6200ee';
const BlackColor = '#212112';
const WhiteColor = '#ffffff';
const GrayColor = '#dadada';
const DarkGrayColor = '#5e5e5e';
const BackgroundGray = '#eeeeee';
const HeaderColor = '#4d8aaf';

export default {
  palette: {
    primary: {
      header: HeaderColor,
      light: PrimaryLightColor,
      main: PrimaryColor,
      dark: DarkPrimary,
      darkGray:DarkGray,
      contrastText: WhiteColor,
    },
    secondary: {
      light: SecondaryLightColor,
      main: SecondaryColor,
      dark: SecondaryDarkColor,
      contrastText: WhiteColor,
    },
    success:SuccessColor,
    error: red
  },
  common: {
    black: BlackColor,
    white: WhiteColor,
    gray: GrayColor,
    darkGray: DarkGrayColor,
    lightGray: BackgroundGray
  }
};