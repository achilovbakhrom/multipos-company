import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import ImageUpload from "../../components/ImageUpload/ImageUpload";
import ValidationError from "../../components/errors/error-messages";
import Typography from "@material-ui/core/Typography";

class AboutCompany extends Component {
  constructor(props) {
    super(props);
    this.state = {
      company: {
        contact_data: [],
      }
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleFile = this.handleFile.bind(this);
    this.handleContactData = this.handleContactData.bind(this);
  }

  handleInput(event) {
    const name = event.target.name;
    const value = event.target.value;
    this.setState((prevState) => ({
          company: {
            ...prevState.company,
            [name]: value,
          }
        }),()=>{this.props.onChange(this.state)}
      );
    }


  handleContactData(type, value) {
    let {contact_data} = this.state.company;
    if (value.length === 0) {
      contact_data.forEach((item, index)=> {
        if (item.type === type) {
          contact_data.slice(index, 1);
          return;
        }
      })

    } else {

      let found = false;
      contact_data.forEach((item) => {
        if (item.type === type) {
          item.data = value;
          found = true;
          return;
        }
      });

      if (!found) {
        contact_data.push({
          type: type,
          data: value
        })
      };
    }
    this.setState((prevState)=>({
      company:{
        ...prevState.company,
        contact_data: contact_data,
      }
    }),()=>{this.props.onChange(this.state)});
  }

  handleFile(file, aboutPreview) {
    this.setState((prevState)=>({
      company:{
        ...prevState.company,
        about_image:file,
        aboutPreview:aboutPreview,
      }
    }),()=>{this.props.onChange(this.state)});
  }

  render() {
    let fields = this.props.fields;
    let errors = this.props.errors;
    let submitted = this.props.submitted;
    return (
      <div>
        <Grid container direction="column" style={{ paddingTop: 8 }}>
          <Grid container direction="row" spacing={24}>
            <Grid item xs={3}>
              <Grid
                container direction='column'>
                <Grid item>
                  <Typography variant={"h6"} gutterBottom>
                    Company Logotype
                  </Typography>
                </Grid>
                <Grid item>
                  <div>
                    <ImageUpload onChange={this.handleFile} avatar={this.props.aboutPreview} file={this.props.file}/>
                    {submitted && !this.props.file &&
                    <ValidationError>
                      Company logotype is required
                    </ValidationError>
                    }
                  </div>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={9}>
              <Grid container direction='column'>
                <Grid item>
                  <Typography variant={"h6"} gutterBottom>
                    Company
                  </Typography>
                </Grid>
                <Grid item>
                  <TextField
                    fullWidth
                    error={submitted && errors.name ? (
                      true
                    ) : (false)}
                    name={"name"}
                    value={fields.name}
                    variant='outlined'
                    onChange={this.handleInput}
                  />
                  {submitted && errors.name &&
                  <ValidationError>
                    {errors.name}
                  </ValidationError>
                  }
                </Grid>
              </Grid>
              <Grid container direction={'column'} style={{paddingTop:20}}>
                <Grid item>
                  <Typography variant={"h6"} gutterBottom>
                    Business Occupation
                  </Typography>
                </Grid>
                <Grid>
                  <TextField
                    fullWidth
                    name={"occupation"}
                    error={submitted && errors.occupation ? (
                      true
                    ) : (false)}
                    value={fields.occupation}
                    variant="outlined"
                    onChange={this.handleInput}
                  />
                  {submitted && errors.occupation &&
                  <ValidationError>
                    {errors.occupation}
                  </ValidationError>
                  }
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid container direction="row" spacing={24} style={{ paddingTop: 40 }}>
            <Grid item xs={6}>
              <Grid
                container direction='column'>
                <Grid item>
                  <Typography variant={"h6"} gutterBottom>
                    Email
                  </Typography>
                </Grid>
                <Grid item>
                  <TextField
                    fullWidth
                    name={"email"}
                    error={submitted && errors.email ? (
                      true
                    ) : (false)}
                    value={fields.email}
                    onChange={(event) => {this.handleContactData(1, event.target.value)}}
                    variant="outlined"
                  />
                  {submitted && errors.email &&
                  <ValidationError>
                    {errors.email}
                  </ValidationError>
                  }
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={6}>
              <Grid container direction='column'>
                <Grid item>
                  <Typography variant={"h6"} gutterBottom>
                    Phone Number
                  </Typography>
                </Grid>
                <Grid item>
                  <TextField
                    fullWidth
                    name={"phone_number"}
                    error={submitted && errors.phone_number ? (
                      true
                    ) : (false)}
                    value={fields.phone_number}
                    onChange={(event) => {
                      this.handleContactData(0, event.target.value)
                    }}
                    variant="outlined"
                  />
                  {submitted && errors.phone_number &&
                  <ValidationError>
                    {errors.phone_number}
                  </ValidationError>
                  }
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid container justify='center' style={{ paddingTop: 40 }}>
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
                    name={"description"}
                    error={submitted && errors.description ? (
                      true
                    ) : (false)}
                    value={fields.description}
                    onChange={this.handleInput}
                    variant="outlined"
                  />
                  {submitted && errors.description &&
                  <ValidationError>
                    {errors.description}
                  </ValidationError>
                  }
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  };
}

export default AboutCompany;