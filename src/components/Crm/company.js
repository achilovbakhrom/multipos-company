import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core";
import styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";
import ImageUpload from "../../components/ImageUpload/ImageUpload";
import ValidationError from "../../components/errors/error-messages";
import MenuItem from "@material-ui/core/MenuItem";
import FilledInput from "@material-ui/core/FilledInput";
import FieldWrapper from '../../components/Forms/inputWrapper';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const Curators = [
  'First',
  'Second',
  'Third',
];

class CrmCompany extends Component{
  constructor(props) {
    super(props);
    this.state = {
      curator:'',
      company:false,
      customer:false,
      dealer:false,
      personal:false,
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleFile = this.handleFile.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleInput(event){
    const name = event.target.name;
    const value = event.target.value;
    this.setState((prevState)=>({
      ...prevState,
      [name]:value,


    }),()=>{console.log('Success')});
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };



  handleFile(file, employee_preview) {
    this.setState((prevState)=>({
      ...prevState,
      crm_image:file,
      crm_preview:employee_preview,
    }),()=>{console.log(this.state)});
  }

  render(){
    const {fields} = this.props;
    const {errors} = this.props;
    const {submitted} = this.props;
    return(
      <div style={{ padding: "24px" }}>
        <Grid container spacing={24}>
          <Grid item md={6}>
            <FieldWrapper>
              <Grid item>
                <Typography variant={"h6"} gutterBottom>
                  Add photo
                </Typography>
                <ImageUpload onChange={this.handleFile} avatar={this.props.crm_preview} file={this.props.file}/>
                {submitted && !this.props.file &&
                <ValidationError>
                  Employee image is required
                </ValidationError>
                }
              </Grid>
            </FieldWrapper>
            <FieldWrapper>
              <Grid item>
                <Typography variant={"h6"} gutterBottom>
                  Company name
                </Typography>
              </Grid>
              <Grid item>
                <TextField
                  fullWidth
                  error={submitted && errors.company_name ? (
                    true
                  ) : (false)}
                  name={"company_name"}
                  value={fields.company_name}
                  variant='outlined'
                  onChange={this.handleInput}
                />
                {submitted && errors.company_name &&
                <ValidationError>
                  {errors.company_name}
                </ValidationError>
                }
              </Grid>
            </FieldWrapper>
            <FieldWrapper>
              <Grid item>
                <Typography variant={"h6"} gutterBottom>
                  Came from
                </Typography>
              </Grid>
              <Grid item>
                <TextField
                  fullWidth
                  error={submitted && errors.came_from ? (
                    true
                  ) : (false)}
                  name={"came_from"}
                  value={fields.came_from}
                  variant='outlined'
                  onChange={this.handleInput}
                />
                {submitted && errors.came_from &&
                <ValidationError>
                  {errors.came_from}
                </ValidationError>
                }
              </Grid>
            </FieldWrapper>
          </Grid>
          <Grid item md={6}>
            <Grid container>
              <Grid item md={6}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={this.state.customer}
                      onChange={this.handleChange('customer')}
                      value="customer"
                      color='primary'
                    />
                  }
                  label="Customer"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={this.state.company}
                      onChange={this.handleChange('company')}
                      value="company"
                      color='primary'
                    />
                  }
                  label="Company"
                />
              </Grid>
              <Grid item md={6}>
                <FieldWrapper>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={this.state.dealer}
                        onChange={this.handleChange('dealer')}
                        value="dealer"
                        color='primary'
                      />
                    }
                    label="Dealer"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={this.state.personal}
                        onChange={this.handleChange('personal')}
                        value="personal"
                        color='primary'
                      />
                    }
                    label="Personal"
                  />
                </FieldWrapper>
              </Grid>
            </Grid>
            <FieldWrapper>
              <Grid item>
                <Typography variant={'h6'} gutterBottom>
                  Curator
                </Typography>
              </Grid>
              <Grid item>
                <Select
                  fullWidth
                  value={this.props.curator ? this.props.curator : this.state.curator}
                  name={'curator'}
                  onChange={this.handleInput}
                  input={<FilledInput style={{ border: "solid 0.5px grey", backgroundColor: "white" }}/>}
                >
                  {Curators.map(cur => (
                    <MenuItem key={cur} value={cur}>
                      {cur}
                    </MenuItem>
                  ))}
                </Select>
                {submitted && this.state.curator.length === 0 &&
                <ValidationError>
                  Curator field is required
                </ValidationError>
                }
              </Grid>
            </FieldWrapper>
            <FieldWrapper>
              <Grid item>
                <Typography variant={"h6"} gutterBottom>
                  Occupation
                </Typography>
              </Grid>
              <Grid item>
                <TextField
                  fullWidth
                  error={submitted && errors.occupation ? (
                    true
                  ) : (false)}
                  name={"occupation"}
                  value={fields.occupation}
                  variant='outlined'
                  onChange={this.handleInput}
                />
                {submitted && errors.occupation &&
                <ValidationError>
                  {errors.occupation}
                </ValidationError>
                }
              </Grid>
            </FieldWrapper>
          </Grid>
        </Grid>
      </div>
    );
  }
}
export default CrmCompany;