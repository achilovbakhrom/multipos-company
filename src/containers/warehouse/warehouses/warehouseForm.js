import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Done from '@material-ui/icons/Done';
import Close from '@material-ui/icons/Close';
import TextField from '@material-ui/core/TextField';
import Switch from '@material-ui/core/Switch';
import { Field, reduxForm } from 'redux-form'

class WarehouseForm extends Component {
  
  state = {
    checkedA: true,
    checkedB: false,
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  render() { 
    const {handleSubmit, reset} = this.props;
    const submit = (value) => console.log(value);

    return ( 
    <form onSubmit={handleSubmit(submit)}>
      <Grid container>
          <Grid item xs={12} container justify="space-between">
            <Grid item >
              <Typography variant="h4" gutterBottom style={{margin: 15}}>
                  Add Warehouse
              </Typography>
            </Grid>
            <Grid item style={{ margin: 7}}>
              <IconButton type="submit">
                <Done fontSize="large" />
              </IconButton>
              <IconButton onClick={reset}>
                <Close fontSize="large" />
              </IconButton>
            </Grid>
          </Grid>
          <Grid item xs={12} style={{padding: 15}}>
            <Typography variant="subtitle1">
              Label
            </Typography>
            <Field
              name="Label"
              component={input => 
                <TextField
                value={input.value}
                onChange={input.onChange}
                id="outlined-bare"
                placeholder="Label"
                variant="outlined"
                fullWidth
            />}
            />
          </Grid>
          <Grid item xs={12} style={{padding: 15}}>
            <Typography variant="subtitle1">
                Address
            </Typography>
            <TextField
              id="outlined-bare"
              placeholder="Address"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} style={{padding: 15}}>
            <Typography variant="h4">
                Warehouse Manager
            </Typography>
          </Grid>
          <Grid container  style={{padding: 15}}>
            <Grid item xs={6}>
              <Typography variant="subtitle1">
                Name
              </Typography>
              <TextField
                style={{paddingRight: 15}}
                id="outlined-bare"
                placeholder="Address"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <Typography variant="subtitle1">
                Phone Number
              </Typography>
              <TextField
                id="outlined-bare"
                placeholder="Address"
                variant="outlined"
                fullWidth
              />
            </Grid>
          </Grid>
          <Grid container style={{padding: 15}} >
            <Grid item xs={6} >
              <Typography>
                Main Warehouse
              </Typography>
              <Switch
                checked={this.state.checkedA}
                onChange={this.handleChange('checkedA')}
                value="checkedA"
                color="primary"
              />
            </Grid>
            <Grid item xs={6} >
              <Typography>
                Activity
              </Typography>
              <Switch
                checked={this.state.checkedB}
                onChange={this.handleChange('checkedB')}
                value="checkedB"
                color="primary"
              />
            </Grid>
          </Grid>
          <Grid item xs={12} style={{padding: 15}}>
            <Typography variant="subtitle1">
              Description
            </Typography>
            <TextField
              id="outlined-bare"
              placeholder="Description"
              variant="outlined"
              fullWidth
            />
          </Grid>
      </Grid> 
      </form>
     );
  }
}
export default reduxForm({
  form: 'warehouseForm', // a unique identifier for this form
})(WarehouseForm);
