import { withStyles } from "@material-ui/core";
import InputBase from "@material-ui/core/InputBase";
import { rgbToColorString } from "polished";

const BootstrapInput = withStyles(theme => ({
  root: {
    'label + &': {
      marginTop: theme.spacing.unit * 3,
    },
    "& svg":{
        color:theme.palette.primary.darkGray,
    }
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    boxShadow:'0px 1px 3px -1px '+rgbToColorString({ red: 0, green: 0, blue: 0, alpha: 0.5 }),
    fontSize: 16,
    width: 'auto',
    padding: '15px 26px 15px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    '&:focus': {
      backgroundColor: theme.palette.background.paper,
      borderRadius: 4,
    },

  },
}))(InputBase);

export default BootstrapInput;