import React, { Component } from "react";
import HeaderComponent from "../../components/Header/HeaderComponent";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core";
import styled from "styled-components";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import Select from "@material-ui/core/Select";
import Paper from "@material-ui/core/Paper";
import Scrollbar from '../../components/Common/Scrollbar';
import Button from "@material-ui/core/Button";
import IconDone from "@material-ui/icons/Done";
import IconCancel from "@material-ui/icons/Close";
import { config } from "./validation/hrm-validation";
import { FormValidation } from "calidation";
import TextField from "@material-ui/core/TextField";
import ImageUpload from "../../components/ImageUpload/ImageUpload";
import ValidationError from "../../components/errors/error-messages";
import moment from "moment";
import MomentUtils from "@date-io/moment";
import { MuiPickersUtilsProvider, DatePicker } from "material-ui-pickers";
import MenuItem from "@material-ui/core/MenuItem";
import FilledInput from "@material-ui/core/FilledInput";
import { addEmployee } from "../../actions/addEmployee";
import FieldWrapper from "../../components/Forms/inputWrapper";


const CountryNames = [
  "Russia",
  "German",
  "French",
  "Spain",
  "USA",
  "Ukraine",
  "Uzbekistan",
  "Italy",
  "Belgium",
  "Estonia"
];
const CityNames = [
  "Moscow",
  "Berlin",
  "Paris",
  "Madrid",
  "Washington",
  "Kiev",
  "Tashkent",
  "Rome",
  "Brussels",
  "Tallinn"
];

const Positions = [
  "CEO",
  "CTO",
  "Manager"
];

const CompanyBackgroundComponent = styled.div`
  height: 100vh;
  width: 100%;
  // background-color: inherit;
 
`;

const ContentSubmitButton = styled(Paper)`
    width: 100%;
    height: 50px;
`;
const ComponentsWrapper = styled.div`
  display: flex;
  width:100%;
  padding:20px;
`;

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  }

});


const topTabStyles = {
  display: "flex",
  alignItems: "center",
  borderRadius: 0
};
const flexItem = {
  display: "flex",
  width: "100%",
  padding: "0 20px",
  justifyContent: "space-between"
};


class Hrm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: moment(new Date()).format("DD/MM/YYYY"),
      country: "",
      city: "",
      position: ""
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleDate = this.handleDate.bind(this);
    this.handleFile = this.handleFile.bind(this);
  }

  handleInput(event) {
    const name = event.target.name;
    const value = event.target.value;
    this.setState((prevState) => ({
      ...prevState,
      [name]: value


    }), () => {
      console.log("Success");
    });
  }

  handleDate(e) {
    this.setState({
      startDate: moment(e).format("DD/MM/YYYY")
    });
  }

  handleFile(file, employee_preview) {
    this.setState((prevState) => ({
      ...prevState,
      employee_image: file,
      employee_preview: employee_preview
    }), () => {

    });
  }

  onSubmit = ({ fields, errors, isValid }) => {
    // if (isValid && this.state.country && this.state.city && this.state.employee_image) {
    //
    //   console.log("Everything is good:", fields);
    // } else {
    //
    //   console.log("Something is wrong:", errors);
    // }
    console.log(this.props);
  };


  render() {
    const { classes } = this.props;
    const { startDate } = this.state;
    return (
      <div className={classes.root}>
        <CompanyBackgroundComponent>
          <HeaderComponent/>
          <ComponentsWrapper>
            <Grid style={{ paddingTop: 8 }} container spacing={24}>
              <Grid item xs={3} sm={3}>
                <Paper style={{ height: "100vh" }}>
                  <Scrollbar  btnText = {'Add employee'}/>
                </Paper>
              </Grid>
              <Grid item xs={9} sm={9}>
                <Paper style={{ height: "100vh" }}>
                  <FormValidation onSubmit={this.onSubmit} config={config}>
                    {({ fields, errors, submitted }) => (
                      <>
                        <ContentSubmitButton style={topTabStyles}>
                          <div style={flexItem}>
                            <Typography variant={"h5"} style={{ fontWeight: "bold" }}>
                              Employee
                            </Typography>
                            <div className={"btns-wrapper"}>
                              <Button
                                type="submit"
                                style={{ marginLeft: "90" }}>
                                <IconDone style={{ color: "#79e07c" }}/>
                              </Button>
                              <Button
                                type="button"
                                style={{ marginLeft: "90" }}>
                                <IconCancel style={{ color: "#4086f4" }}/>
                              </Button>
                            </div>
                          </div>
                        </ContentSubmitButton>
                        <div style={{ padding: "24px" }}>
                          <Grid container spacing={24}>
                            <Grid item md={6}>
                              <FieldWrapper>
                                <Grid item>
                                  <Typography variant={"h6"} gutterBottom>
                                    Name
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
                              </FieldWrapper>
                              <FieldWrapper>
                                <Grid item>
                                  <Typography variant={"h6"} gutterBottom>
                                    Last name
                                  </Typography>
                                </Grid>
                                <Grid item>
                                  <TextField
                                    fullWidth
                                    error={submitted && errors.last_name ? (
                                      true
                                    ) : (false)}
                                    name={"last_name"}
                                    value={fields.last_name}
                                    variant='outlined'
                                    onChange={this.handleInput}
                                  />
                                  {submitted && errors.last_name &&
                                  <ValidationError>
                                    {errors.last_name}
                                  </ValidationError>
                                  }
                                </Grid>
                              </FieldWrapper>
                              <FieldWrapper>
                                <Grid item>
                                  <Typography variant={"h6"} gutterBottom>
                                    Middle name
                                  </Typography>
                                </Grid>
                                <Grid item>
                                  <TextField
                                    fullWidth
                                    error={submitted && errors.middle_name ? (
                                      true
                                    ) : (false)}
                                    name={"middle_name"}
                                    value={fields.middle_name}
                                    variant='outlined'
                                    onChange={this.handleInput}
                                  />
                                  {submitted && errors.middle_name &&
                                  <ValidationError>
                                    {errors.middle_name}
                                  </ValidationError>
                                  }
                                </Grid>
                              </FieldWrapper>
                              <FieldWrapper>
                                <Grid item>
                                  <Typography variant={"h6"} gutterBottom>
                                    Position
                                  </Typography>
                                </Grid>
                                <Grid item>
                                  <Select
                                    fullWidth
                                    value={this.props.position ? this.props.position : this.state.position}
                                    name={"position"}
                                    onChange={this.handleInput}
                                    input={<FilledInput
                                      style={{ border: "solid 0.5px grey", backgroundColor: "white" }}/>}
                                  >
                                    {Positions.map(pos => (
                                      <MenuItem key={pos} value={pos}>
                                        {pos}
                                      </MenuItem>
                                    ))}
                                  </Select>
                                  {submitted && errors.position &&
                                  <ValidationError>
                                    {errors.position}
                                  </ValidationError>
                                  }
                                </Grid>
                              </FieldWrapper>
                            </Grid>
                            <Grid item md={6}>
                              <FieldWrapper>
                                <Grid item>
                                  <Typography variant={"h6"} gutterBottom>
                                    Add photo
                                  </Typography>
                                  <ImageUpload onChange={this.handleFile} avatar={this.props.employee_preview}
                                               file={this.props.file}/>
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
                                    Birth date
                                  </Typography>
                                </Grid>
                                <Grid item>
                                  <MuiPickersUtilsProvider utils={MomentUtils}>
                                    <div className="picker">
                                      <DatePicker
                                        keyboard
                                        clearable
                                        variant="outlined"
                                        format={"DD/MM/YYYY"}
                                        fullWidth
                                        placeholder="dd/mm/yyyy"
                                        mask={value =>
                                          value ? [/\d/, /\d/, "/", /\d/, /\d/, "/", /\d/, /\d/, /\d/, /\d/] : []
                                        }
                                        value={moment(startDate, "DD/MM/YYYY").toDate()}
                                        onChange={this.handleDate}
                                        disableOpenOnEnter
                                        animateYearScrolling={false}

                                      />
                                    </div>
                                  </MuiPickersUtilsProvider>
                                  {submitted && errors.birth_date &&
                                  <ValidationError>
                                    {errors.birth_date}
                                  </ValidationError>
                                  }
                                </Grid>
                              </FieldWrapper>
                              <FieldWrapper>
                                <Grid item>
                                  <Typography variant={"h6"} gutterBottom>
                                    Phone number
                                  </Typography>
                                </Grid>
                                <Grid item>
                                  <TextField
                                    fullWidth
                                    error={submitted && errors.phone_number ? (
                                      true
                                    ) : (false)}
                                    name={"name"}
                                    value={fields.phone_number}
                                    variant='outlined'
                                    onChange={this.handleInput}
                                  />
                                  {submitted && errors.phone_number &&
                                  <ValidationError>
                                    {errors.phone_number}
                                  </ValidationError>
                                  }
                                </Grid>
                              </FieldWrapper>
                            </Grid>
                            <Grid item md={12}>
                              <Typography variant={"h5"}>
                                Address
                              </Typography>
                            </Grid>
                            <Grid item md={6}>
                              <FieldWrapper>
                                <Grid item>
                                  <Typography variant={"h6"} gutterBottom>
                                    Type
                                  </Typography>
                                </Grid>
                                <Grid item>
                                  <TextField
                                    fullWidth
                                    error={submitted && errors.type ? (
                                      true
                                    ) : (false)}
                                    name={"name"}
                                    value={fields.type}
                                    variant='outlined'
                                    onChange={this.handleInput}
                                  />
                                  {submitted && errors.type &&
                                  <ValidationError>
                                    {errors.type}
                                  </ValidationError>
                                  }
                                </Grid>
                              </FieldWrapper>
                              <FieldWrapper>
                                <Grid item>
                                  <Typography variant={"h6"} gutterBottom>
                                    Street address
                                  </Typography>
                                </Grid>
                                <Grid item>
                                  <TextField
                                    fullWidth
                                    error={submitted && errors.street_address_1 ? (
                                      true
                                    ) : (false)}
                                    name={"name"}
                                    value={fields.street_address_1}
                                    variant='outlined'
                                    onChange={this.handleInput}
                                  />
                                  {submitted && errors.street_address_1 &&
                                  <ValidationError>
                                    {errors.street_address_1}
                                  </ValidationError>
                                  }
                                </Grid>
                              </FieldWrapper>
                              <FieldWrapper>
                                <Grid item>
                                  <Typography variant={"h6"} gutterBottom>
                                    Post code
                                  </Typography>
                                </Grid>
                                <Grid item>
                                  <TextField
                                    fullWidth
                                    error={submitted && errors.post_code ? (
                                      true
                                    ) : (false)}
                                    name={"name"}
                                    value={fields.post_code}
                                    variant='outlined'
                                    onChange={this.handleInput}
                                  />
                                  {submitted && errors.post_code &&
                                  <ValidationError>
                                    {errors.post_code}
                                  </ValidationError>
                                  }
                                </Grid>
                              </FieldWrapper>
                            </Grid>
                            <Grid item md={6}>
                              <FieldWrapper>
                                <Grid item>
                                  <Typography variant={"h6"} gutterBottom>
                                    Country
                                  </Typography>
                                </Grid>
                                <Grid item>
                                  <Select
                                    value={this.props.country ? this.props.country : this.state.country}
                                    onChange={this.handleInput}
                                    fullWidth
                                    name={"country"}
                                    input={<FilledInput
                                      style={{ border: "solid 0.5px grey", backgroundColor: "white" }}/>}
                                  >
                                    {CountryNames.map(country => (
                                      <MenuItem key={country} value={country}>
                                        {country}
                                      </MenuItem>
                                    ))}
                                  </Select>
                                  {submitted && this.state.country.length === 0 &&
                                  <ValidationError>
                                    Country field is required
                                  </ValidationError>
                                  }
                                </Grid>
                              </FieldWrapper>
                              <FieldWrapper>
                                <Grid item>
                                  <Typography variant={"h6"} gutterBottom>
                                    City
                                  </Typography>
                                </Grid>
                                <Grid item>
                                  <Select
                                    fullWidth
                                    value={this.props.city ? this.props.city : this.state.city}
                                    name={"city"}
                                    onChange={this.handleInput}
                                    input={<FilledInput
                                      style={{ border: "solid 0.5px grey", backgroundColor: "white" }}/>}
                                  >
                                    {CityNames.map(city => (
                                      <MenuItem key={city} value={city}>
                                        {city}
                                      </MenuItem>
                                    ))}
                                  </Select>
                                  {submitted && this.state.city.length === 0 &&
                                  <ValidationError>
                                    City field is required
                                  </ValidationError>
                                  }
                                </Grid>
                              </FieldWrapper>
                              <FieldWrapper>
                                <Grid item>
                                  <Typography variant={"h6"} gutterBottom>
                                    Street address 2
                                  </Typography>
                                </Grid>
                                <Grid item>
                                  <TextField
                                    fullWidth
                                    error={submitted && errors.street_address_2 ? (
                                      true
                                    ) : (false)}
                                    name={"name"}
                                    value={fields.street_address_2}
                                    variant='outlined'
                                    onChange={this.handleInput}
                                  />
                                  {submitted && errors.street_address_2 &&
                                  <ValidationError>
                                    {errors.street_address_2}
                                  </ValidationError>
                                  }
                                </Grid>
                              </FieldWrapper>
                            </Grid>
                          </Grid>
                        </div>
                      </>
                    )}
                  </FormValidation>
                </Paper>
              </Grid>
            </Grid>
          </ComponentsWrapper>
        </CompanyBackgroundComponent>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    addedEmployee: state.addedEmployee
  };
}


export default connect(mapStateToProps, { addEmployee })(withStyles(styles)(Hrm));