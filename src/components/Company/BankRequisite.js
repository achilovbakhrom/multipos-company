import React, { Component } from "react";
import Grid from "@material-ui/core/Grid/Grid";
import TextField from "@material-ui/core/TextField/TextField";
import ValidationError from "../../components/errors/error-messages";
import Typography from "@material-ui/core/Typography";

class BankRequisite extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bank: {
        requisites: {}
      }
    };
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(event) {
    const name = event.target.name;
    const value = event.target.value;
    this.setState((prevState)=>({
      bank:{
        requisites: {
          ...prevState.bank.requisites,
          [name]:value,
        }
      }
    }),()=>this.props.onChange(this.state.bank));
  }

  render() {
    let fields = this.props.fields;
    let errors = this.props.errors;
    let submitted = this.props.submitted;
    // console.log(this.state.bank);
    return (

      <div>
        <Grid container direction="column" style={{ paddingTop: 20 }}>
          <Grid container justify='center'>
            <Grid item xs={12}>
              <Grid
                container direction='column'>
                <Grid item>
                  <Typography variant={"h6"} gutterBottom>
                    Requisite name
                  </Typography>
                </Grid>
                <Grid>
                  <TextField
                    fullWidth
                    value={fields.requisite_name}
                    error={submitted && errors.requisite_name ? (
                      true
                    ) : (false)}
                    onChange={this.handleInput}
                    name={"requisite_name"}
                    id='outlined-bare'
                    variant='outlined'
                  />
                  {submitted && errors.requisite_name &&
                  <ValidationError>
                    {errors.requisite_name}
                  </ValidationError>
                  }
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid container justify='center' style={{ paddingTop: 20 }}>
            <Grid item xs={12}>
              <Grid
                container direction='column'>
                <Grid item>
                  <Typography variant={"h6"} gutterBottom>
                    Description
                  </Typography>
                </Grid>
                <Grid>
                  <TextField
                    fullWidth
                    name={"requisite_description"}
                    error={submitted && errors.requisite_description ? (
                      true
                    ) : (false)}
                    value={fields.requisite_description}
                    onChange={this.handleInput}
                    id='outlined-bare'
                    variant='outlined'
                  />
                  {submitted && errors.requisite_description &&
                  <ValidationError>
                    {errors.requisite_description}
                  </ValidationError>
                  }
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid container direction="row" spacing={24} style={{ paddingTop: 20 }}>
            <Grid item xs={6}>
              <Grid
                container direction='column'>
                <Grid item>
                  <Typography variant={"h6"} gutterBottom>
                    Item name
                  </Typography>
                </Grid>
                <Grid item>
                  <TextField
                    fullWidth
                    name={"requisite_item_name"}
                    value={fields.requisite_item_name}
                    error={submitted && errors.requisite_item_name ? (
                      true
                    ) : (false)}
                    onChange={this.handleInput}
                    id='outlined-bare'
                    variant='outlined'
                  />
                  {submitted && errors.requisite_item_name &&
                  <ValidationError>
                    {errors.requisite_item_name}
                  </ValidationError>
                  }
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={6}>
              <Grid container direction='column'>
                <Grid item>
                  <Typography variant={"h6"} gutterBottom>
                    Item value
                  </Typography>
                </Grid>
                <Grid item>
                  <TextField
                    fullWidth
                    name={"requisite_item_value"}
                    error={submitted && errors.requisite_item_value ? (
                      true
                    ) : (false)}
                    value={fields.requisite_item_value}
                    onChange={this.handleInput}
                    id='outlined-bare'
                    variant='outlined'
                  />
                  {submitted && errors.requisite_item_value &&
                  <ValidationError>
                    {errors.requisite_item_value}
                  </ValidationError>
                  }
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default BankRequisite;