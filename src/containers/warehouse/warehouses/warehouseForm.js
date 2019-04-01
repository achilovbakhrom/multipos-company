import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components'
import IconButton from '@material-ui/core/IconButton';
import Done from '@material-ui/icons/Done';
import Cancel from '@material-ui/icons/Clear';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputBase from '@material-ui/core/InputBase';
import Switch from '@material-ui/core/Switch';

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
      height: 32,
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

  
class WarehouseForm extends Component {
    state = {
        age: '',
        checkedB: true,
        checkedA: false,
      };
      handleChange = event => {
        this.setState({ age: event.target.value });
      };
      handleChange1 = name => event => {
        this.setState({ [name]: event.target.checked });
      };
      
    render() { 
        const { classes } = this.props;
        return ( 
            <div>
                <Grid item sm style={{fontSize: 20, paddingLeft: 30, paddingTop: 20, paddingBottom: 30, paddingRight: 30}}> 
                    <br/>
                    <Grid item style={{display: 'inline-block'}}>
                        Add Warehouse  
                    </Grid>
                    <Grid style={{display: 'inline-block', float: 'right'}}>
                        <IconButton aria-label="Delete">
                            <Done color="secondary"/>
                        </IconButton>
                        <IconButton aria-label="Delete">
                            <Cancel color="primary"/>
                        </IconButton>
                    </Grid>
                </Grid>
                <Grid container>
                  <Grid item sm>
                  <Grid item>
                    <Typography variant={'h6'} gutterBottom style={{paddingLeft: 30, width: 400}}>
                      Label
                    </Typography>
                  </Grid>
                    <TextField
                        style={{paddingLeft: 30, width: 400}}
                        id="outlined-bare"
                        placeholder="Label"
                        margin="normal"
                        variant="outlined"
                    />
                  </Grid>  
                  <Grid item sm>
                  <Grid item>
                    <Typography variant={'h6'} gutterBottom>
                      Address
                    </Typography>
                  </Grid>
                    <TextField
                        style={{width: 400}}
                        id="outlined-bare"
                        placeholder="Address"
                        margin="normal"
                        variant="outlined"
                    />
                  </Grid>
                </Grid>
                <Grid item style={{fontSize: 20, padding: 30}}>
                    Warehouse manager
                </Grid>
                <Grid container>
                <Grid item sm>
                <Grid item>
                    <Typography variant={'h6'} gutterBottom style={{paddingLeft: 30, width: 400}}>
                      Name
                    </Typography>
                  </Grid>
                  <Grid item>
                  <br/>
                  <FormControl style={{paddingLeft: 30, width: 400, height: 70}}>
                        <Select
                            size="large"
                            value={this.state.age}
                            onChange={this.handleChange}
                            input={<BootstrapInput name="age" id="age-customized-select" />}
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl> 
                  </Grid>
                    
                </Grid>
                <Grid item sm>
                <Grid item>
                    <Typography variant={'h6'} gutterBottom>
                      Phone Number
                    </Typography>
                  </Grid>
                    <TextField
                        style={{width: 400}}
                        id="outlined-bare"
                        placeholder="Phone Number"
                        margin="normal"
                        variant="outlined"
                    />
                </Grid>
                </Grid>
                <Grid container>
               
                    <Grid item sm style={{fontSize: 20, padding: 30}}>
                        Main Warehouse
                    <Switch
                        checked={this.state.checkedB}
                        onChange={this.handleChange1('checkedB')}
                        value="checkedB"
                        color="primary"
                    />
                    </Grid>
                    <Grid item sm style={{fontSize: 20, padding: 30}}>
                        Active
                        <Switch
                        checked={this.state.checkedA}
                        onChange={this.handleChange1('checkedA')}
                        value="checkedB"
                        color="primary"
                    />
                    </Grid>
                </Grid>
                <Grid container>
                <Typography variant={'h6'} gutterBottom style={{paddingLeft: 30, width: 400}}>
                      Description
                    </Typography>
                  </Grid>
                    <TextField
                        style={{paddingLeft: 30, width: 900}}
                        id="outlined-bare"
                        placeholder="Description"
                        margin="normal"
                        variant="outlined"
                    />
                </div>
            
         );
    }
}
 
export default withStyles(styles)(WarehouseForm);