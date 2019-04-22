import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Done from "@material-ui/icons/Done";
import Close from "@material-ui/icons/Close";
import TextField from "@material-ui/core/TextField";
import Switch from "@material-ui/core/Switch";

class WarehouseForm extends Component {
  state = {
    label: "",
    address: "",
    name: "",
    phoneNumber: "",
    description: "",
    mainWarehouse: true,
    active: false
  };

  handleChange = event => {
    const isCheckbox = event.target.type === "checkbox";
    this.setState({
        [event.target.name]: isCheckbox
        ? event.target.checked
        : event.target.value
    })
}
handleSubmit = event => {  
  event.preventDefault();
  console.log(this.state);
}

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Grid container>
          <Grid item xs={12} container justify="space-between">
            <Grid item>
              <Typography variant="h4" gutterBottom style={{ margin: 15 }}>
                Add Warehouse
              </Typography>
            </Grid>
            <Grid item style={{ margin: 7 }}>
              <IconButton type="submit">
                <Done fontSize="large" />
              </IconButton>
              <IconButton>
                <Close fontSize="large" />
              </IconButton>
            </Grid>
          </Grid>
          <Grid item xs={12} style={{ padding: 15 }}>
            <Typography variant="subtitle1">Label</Typography>
            <TextField
              onChange={this.handleChange}
              name="label"
              placeholder="Label"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} style={{ padding: 15 }}>
            <Typography variant="subtitle1">Address</Typography>
            <TextField
              onChange={this.handleChange}
              name="address"
              placeholder="Address"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} style={{ padding: 15 }}>
            <Typography variant="h4">Warehouse Manager</Typography>
          </Grid>
          <Grid container style={{ padding: 15 }}>
            <Grid item xs={6}>
              <Typography variant="subtitle1">Name</Typography>
              <TextField
                style={{ paddingRight: 15 }}
                onChange={this.handleChange}
                name="name"
                placeholder="Name"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <Typography variant="subtitle1">Phone Number</Typography>
              <TextField
                onChange={this.handleChange}
                name="phoneNumber"
                id="outlined-bare"
                placeholder="Phone Number"
                variant="outlined"
                fullWidth
              />
            </Grid>
          </Grid>
          <Grid container style={{ padding: 15 }}>
            <Grid item xs={6}>
              <Typography>Main Warehouse</Typography>
              <Switch
                name="mainWarehouse"
                value={this.state.checkedA}
                onChange={this.handleChange}
                type="checkbox"
                color="primary"
              />
            </Grid>
            <Grid item xs={6}>
              <Typography>Activity</Typography>
              <Switch
                name="active"
                value={this.state.checkedB}
                onChange={this.handleChange}
                type="checkbox"
                color="primary"
              />
            </Grid>
          </Grid>
          <Grid item xs={12} style={{ padding: 15 }}>
            <Typography variant="subtitle1">Description</Typography>
            <TextField
              name="description"
              onChange={this.handleChange}
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
export default WarehouseForm;
