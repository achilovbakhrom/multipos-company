import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import ImageUpload from "../../components/ImageUpload/ImageUpload";
import ValidationError from '../../components/errors/error-messages';
import Typography from '@material-ui/core/Typography';
class AboutCompany extends Component {
  constructor(props) {
    super(props);
    this.state={};
    this.handleInput = this.handleInput.bind(this);
    this.handleFile = this.handleFile.bind(this);
  }

  handleInput(event){
    const name = event.target.name;
    const value = event.target.value;
    this.props.onChange(name,value);
  }
  handleFile(file,aboutPreview){
    this.props.onChange('about_image',file);
    this.props.onChange('about_preview',aboutPreview);
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
                        Company Logotype
                    </Typography>
                  </Grid>
                  <Grid item>
                    <div>
                      <ImageUpload onChange = {this.handleFile} avatar={this.props.aboutPreview} file={this.props.file}/>
                      {submitted && !this.props.file &&
                      <ValidationError>
                        Company logotype is required
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
                      Company
                    </Typography>
                  </Grid>
                  <Grid item>
                      <TextField
                        fullWidth
                        error={submitted && errors.username?(
                            true
                        ):(false)}
                        name={'username'}
                        id='outlined-bare'
                        value={fields.username}
                        variant='outlined'
                        onChange={this.handleInput}
                      />
                    {submitted && errors.username &&
                    <ValidationError>
                      {errors.username}
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
                    <Typography variant={'h6'} gutterBottom>
                      Business Occupation
                    </Typography>
                  </Grid>
                  <Grid>
                     <TextField
                       fullWidth
                       name={'business_occupation'}
                       error={submitted && errors.business_occupation?(
                         true
                       ):(false)}
                       value={fields.business_occupation}
                       variant="outlined"
                       onChange={this.handleInput}
                     />
                    {submitted && errors.business_occupation &&
                    <ValidationError>
                      {errors.business_occupation}
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
                    <Typography variant={'h6'} gutterBottom>
                      Email
                    </Typography>
                  </Grid>
                  <Grid item>
                       <TextField
                         fullWidth
                         name={'email'}
                         error={submitted && errors.email?(
                           true
                         ):(false)}
                         value={fields.email}
                         onChange={this.handleInput}
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
                    <Typography variant={'h6'} gutterBottom>
                      Phone Number
                    </Typography>
                  </Grid>
                  <Grid item>
                       <TextField
                         fullWidth
                         name={'phone_number'}
                         error={submitted && errors.phone_number?(
                           true
                         ):(false)}
                         value={fields.phone_number}
                         onChange={this.handleInput}
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
                    <Typography variant={'h6'} gutterBottom>
                      Description
                    </Typography>
                  </Grid>
                  <Grid>
                       <TextField
                         fullWidth
                         name={'description'}
                         error={submitted && errors.description?(
                           true
                         ):(false)}
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