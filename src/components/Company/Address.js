import React from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FilledInput from "@material-ui/core/FilledInput";
import ValidationError from '../../components/errors/error-messages';
import Typography from '@material-ui/core/Typography';
import OutlinedInput from '@material-ui/core/OutlinedInput';

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

class AddressCompany extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      company:{
        address_information:{
          country: '',
          city: '',
        },
      },
    };
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(event){
    const name = event.target.name;
    const value = event.target.value;
    this.setState((prevState)=>({
      company:{
        address_information:{
          ...prevState.company.address_information,
          [name]:value,
        }
      }
    }),()=>{this.props.onChange(this.state)});
  }


  render() {
    let fields = this.props.fields;
    let errors = this.props.errors;
    let submitted = this.props.submitted;
    // console.log(this.state);
    return (
      <div>
        <Grid container direction="column" style={{ paddingTop: 20 }}>
          <Grid container direction="column" style={{ paddingTop: 20 }}>
            <Grid container justify='center'>
              <Grid item xs={12}>
                <Grid
                  container direction='column'>
                  <Grid item>
                    <Typography variant={'h6'} gutterBottom>
                      Type
                    </Typography>
                  </Grid>
                  <Grid>
                    <TextField
                      fullWidth
                      value={fields.type}
                      error={submitted && errors.type?(
                        true
                      ):(false)}
                      name={'type'}
                      onChange={this.handleInput}
                      variant="outlined"
                    />
                    {submitted && errors.type &&
                    <ValidationError>
                      {errors.type}
                    </ValidationError>
                    }
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
        </Grid>

            <Grid container justify='center'>
              <Grid item xs={12}>
                <Grid
                  container direction='column'>
                  <Grid item>
                    <Typography variant={'h6'} gutterBottom>
                      Street Address 1
                    </Typography>
                  </Grid>
                  <Grid>
                      <TextField
                        fullWidth
                        value={fields.street_address_1}
                        error={submitted && errors.street_address_1?(
                          true
                        ):(false)}
                        name={'street_address_1'}
                        onChange={this.handleInput}
                        variant="outlined"
                      />
                    {submitted && errors.street_address_1 &&
                    <ValidationError>
                    {errors.street_address_1}
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
                    <Typography variant={'h6'} gutterBottom>
                      Street Address 2
                    </Typography>
                  </Grid>
                  <Grid>
                        <TextField
                          fullWidth
                          error={submitted && errors.street_address_2?(
                            true
                          ):(false)}
                          value={fields.street_address_2}
                          name={'street_address_2'}
                          onChange={this.handleInput}
                          variant="outlined"
                        />
                    {submitted && errors.street_address_2 &&
                    <ValidationError>
                       {errors.street_address_2}
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
                    <Typography variant={'h6'} gutterBottom>
                      Country
                    </Typography>
                  </Grid>
                  <Grid item>
                       <Select
                         value={this.props.country ? this.props.country : this.state.company.address_information.country}
                         onChange={this.handleInput}
                         fullWidth
                         name={'country'}
                         input={<FilledInput  style={{ border: "solid 0.5px grey", backgroundColor: "white", borderRadius:"5px" }}/>}
                       >
                         {CountryNames.map(country => (
                           <MenuItem key={country} value={country}>
                             {country}
                           </MenuItem>
                         ))}
                       </Select>
                    {submitted && this.state.company.address_information.country.length === 0 &&
                    <ValidationError>
                        Country field is required
                      </ValidationError>
                    }
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={6}>
                <Grid container direction='column'>
                  <Grid item>
                    <Typography variant={'h6'} gutterBottom>
                      City
                    </Typography>
                  </Grid>
                  <Grid item>
                      <Select
                        fullWidth
                        value={this.props.city ? this.props.city : this.state.company.address_information.city}
                        name={'city'}
                        onChange={this.handleInput}
                        input={<FilledInput style={{ border: "solid 0.5px grey", backgroundColor: "white" }}/>}
                      >
                        {CityNames.map(city => (
                          <MenuItem key={city} value={city}>
                            {city}
                          </MenuItem>
                        ))}
                      </Select>
                    {submitted && this.state.company.address_information.city.length === 0 &&
                    <ValidationError>
                       City field is required
                      </ValidationError>
                    }
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid container direction="row" spacing={24} style={{ paddingTop: 20 }}>
              <Grid item xs={12}>
                <Grid container direction='column'>
                  <Grid item>
                    <Typography variant={'h6'} gutterBottom>
                      Post code
                    </Typography>
                  </Grid>
                  <Grid item>
                      <TextField
                        fullWidth
                        name={'post_code'}
                        error={submitted && errors.post_code?(
                          true
                        ):(false)}
                        value={fields.post_code}
                        onChange={this.handleInput}
                        id='outlined-bare'
                        variant='outlined'
                      />
                    {submitted && errors.post_code &&
                    <ValidationError>
                    {errors.post_code}
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
                    <Typography variant={'h6'} gutterBottom>
                      Description
                    </Typography>
                  </Grid>
                  <Grid>
                      <TextField
                        fullWidth
                        name={'description_2'}
                        error={submitted && errors.description_2?(
                          true
                        ):(false)}
                        value={fields.description_2}
                        onChange={this.handleInput}
                        id='outlined-bare'
                        variant='outlined'
                      />
                    {submitted && errors.description_2 &&
                      <ValidationError>
                        {errors.description_2}
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

export default AddressCompany;