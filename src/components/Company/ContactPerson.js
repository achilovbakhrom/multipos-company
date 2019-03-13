import React, { Component } from "react";
import Grid from "@material-ui/core/Grid/Grid";
import TextField from "@material-ui/core/TextField/TextField";
import ImageUpload from "../ImageUpload/ImageUpload";
import Button from "@material-ui/core/Button/Button";
import ValidationError from "../../components/errors/error-messages";
import Typography from '@material-ui/core/Typography';

class ContactPerson extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      buttonColors:{
        backgroundColor:"#49a4de",
        color:'#fff',
      },
      gender: true,
      activeBtn: true
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleFile = this.handleFile.bind(this);
  }

  handleInput(event) {
    const name = event.target.name;
    const value = event.target.value;
    this.props.onChange(name, value);
  }

  handleFile(file,contactPreview){
    this.props.onChange('contact_image',file);
    this.props.onChange('contact_preview',contactPreview);
  }
  handleChange(value) {
    if (value === "male") {
      this.setState({
        activeBtn: true,
      });

    } else {
      this.setState({
        activeBtn: false,
      });
    }
    this.props.onChange('gender',value);
  }

  render() {
    let fields = this.props.fields;
    let errors = this.props.errors;
    let submitted = this.props.submitted;
    return (
      <div>
        <Grid container direction="column" style={{ paddingTop: 8 }}>
          <Grid container direction="row" spacing={24}>
            <Grid item xs={6}>
              <Grid
                container direction='column'>
                <Grid item>
                  <Typography variant={'h6'} gutterBottom>
                    Photo
                  </Typography>
                </Grid>
                <Grid item>
                  <div>
                    <ImageUpload onChange = {this.handleFile} avatar={this.props.contactPreview} file={this.props.file}/>
                    {submitted && !this.props.file &&
                    <ValidationError>
                      Photo is required
                    </ValidationError>
                    }
                  </div>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={6}>
              <Grid container direction='column'>
                <Grid item>
                  <Typography variant={'h6'} gutterBottom>
                    Gender
                  </Typography>
                </Grid>
                <Grid item>
                  <div>
                    <Button
                      size="large"
                      onClick={() => this.handleChange("male")}
                      variant="contained"
                      style={this.state.activeBtn? {
                        ...this.state.buttonColors
                      }:{}}>
                      Male
                    </Button>
                    <Button
                      size="large"
                      onClick={() => this.handleChange("female")}
                      variant="contained"
                      style={!this.state.activeBtn? {
                        ...this.state.buttonColors
                      }:{}}>
                      Female
                    </Button>

                  </div>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid container direction="row" spacing={24} style={{ paddingTop: 10 }}>
            <Grid item xs={6}>
              <Grid
                container direction='column'>
                <Grid item>
                  <Typography variant={'h6'} gutterBottom>
                    First name
                  </Typography>
                </Grid>
                <Grid item>
                  <TextField
                    name={"first_name"}
                    fullWidth
                    error={submitted && errors.first_name?(
                      true
                    ):(false)}
                    value={fields.first_name}
                    onChange={this.handleInput}
                    id='outlined-bare'
                    variant='outlined'
                  />
                  {submitted && errors.first_name &&
                  <ValidationError>
                    {errors.first_name}
                  </ValidationError>
                  }

                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={6}>
              <Grid container direction='column'>
                <Grid item>
                  <Typography variant={'h6'} gutterBottom>
                    Last name
                  </Typography>
                </Grid>
                <Grid item>
                  <TextField
                    fullWidth
                    name={"last_name"}
                    error={submitted && errors.last_name?(
                      true
                    ):(false)}
                    value={fields.last_name}
                    onChange={this.handleInput}
                    id='outlined-bare'
                    variant='outlined'
                  />
                  {submitted && errors.last_name &&
                  <ValidationError>
                    {errors.last_name}
                  </ValidationError>
                  }
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid container direction="row" spacing={24} style={{ paddingTop: 10 }}>
            <Grid item xs={6}>
              <Grid
                container direction='column'>
                <Grid item>
                  <Typography variant={'h6'} gutterBottom>
                    Nationality
                  </Typography>
                </Grid>
                <Grid item>
                  <TextField
                    fullWidth
                    error={submitted && errors.nationality?(
                      true
                    ):(false)}
                    name={"nationality"}
                    value={fields.nationality}
                    onChange={this.handleInput}
                    id='outlined-bare'
                    variant='outlined'
                  />
                  {submitted && errors.nationality &&
                  <ValidationError>
                    {errors.nationality}
                  </ValidationError>
                  }
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={6}>
              <Grid container direction='column'>
                <Grid item>
                  <Typography variant={'h6'} gutterBottom>
                    Birth date
                  </Typography>
                </Grid>
                <Grid item>
                  <TextField
                    fullWidth
                    name={"birth_date"}
                    error={submitted && errors.birth_date?(
                      true
                    ):(false)}
                    value={fields.birth_date}
                    type="date"
                    onChange={this.handleInput}
                    id='outlined-bare'
                    variant='outlined'
                  />
                  {submitted && errors.birth_date &&
                  <ValidationError>
                    {errors.nationality}
                  </ValidationError>
                  }
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid container direction="row" spacing={24} style={{ paddingTop: 10 }}>
            <Grid item xs={6}>
              <Grid
                container direction='column'>
                <Grid item>
                  <Typography variant={'h6'} gutterBottom>
                    Mobile number
                  </Typography>
                </Grid>
                <Grid item>
                  <TextField
                    fullWidth
                    name={"mobile_number"}
                    error={submitted && errors.mobile_number?(
                      true
                    ):(false)}
                    value={fields.mobile_number}
                    onChange={this.handleInput}
                    id='outlined-bare'
                    variant='outlined'
                  />
                  {submitted && errors.mobile_number &&
                  <ValidationError>
                    {errors.mobile_number}
                  </ValidationError>
                  }
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={6}>
              <Grid container direction='column'>
                <Grid item>
                  <Typography variant={'h6'} gutterBottom>
                    Office number
                  </Typography>
                </Grid>
                <Grid item>
                  <TextField
                    fullWidth
                    error={submitted && errors.street_address2?(
                      true
                    ):(false)}
                    name={"office_number"}
                    value={fields.office_number}
                    onChange={this.handleInput}
                    id='outlined-bare'
                    variant='outlined'
                  />
                  {submitted && errors.office_number &&
                  <ValidationError>
                    {errors.office_number}
                  </ValidationError>
                  }
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid container justify='flex-start' spacing={24} style={{ paddingTop: 10 }}>
            <Grid item xs={6}>
              <Grid
                container direction='column'>
                <Grid item>
                  <Typography variant={'h6'} gutterBottom>
                    Personal number
                  </Typography>
                </Grid>
                <Grid>
                  <TextField
                    fullWidth
                    name={"personal_number"}
                    error={submitted && errors.personal_number?(
                      true
                    ):(false)}
                    value={fields.personal_number}
                    onChange={this.handleInput}
                    id='outlined-bare'
                    variant='outlined'
                  />
                  {submitted && errors.personal_number &&
                  <ValidationError>
                    {errors.personal_number}
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

export default ContactPerson;