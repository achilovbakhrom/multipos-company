import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputBase from '@material-ui/core/InputBase';

const BootstrapInput = withStyles(theme => ({
  root: {
    'label + &': {
      marginTop: theme.spacing.unit * 3,
    },
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    width: 'auto',
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}))(InputBase);

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
 
  bootstrapFormLabel: {
    fontSize: 18,
  },
});

class CustomizedSelects extends React.Component {
  state = {
    age: '',
  };

  handleChange = event => {
    this.setState({ age: event.target.value });
  };

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.root} autoComplete="off">
        <FormControl style={{paddingLeft: 30, width: 300}}>
          <Select
            value={this.state.age}
            onChange={this.handleChange}
            input={<BootstrapInput name="age" id="age-customized-select" />}
          >
            <MenuItem value={10}>Tashkent</MenuItem>
            <MenuItem value={20}>Russia</MenuItem>
            <MenuItem value={30}>United Kingdom</MenuItem>
          </Select>
        </FormControl>
      </form>
    );
  }
}


export default withStyles(styles)(CustomizedSelects);