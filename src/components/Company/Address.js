import React from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FilledInput from "@material-ui/core/FilledInput";
import ValidationError from '../../components/errors/error-messages';
import Typography from '@material-ui/core/Typography';


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
      country: '',
      city: '',
    };
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(event){
    const name = event.target.name;
    const value = event.target.value;
    this.props.onChange(name,value);
  }

  handleChangeCountry = (event) => {
    console.log(event.target.value);
    this.setState({
      country: event.target.value
    });
    this.handleInput(event);
  };
  handleChangeCity = (event) => {
    this.setState({
      city: event.target.value
    });
    this.handleInput(event);
  };
  componentDidMount(){
    if(this.props.country){
      this.setState({
        country:this.props.country,
      });
    }
    if(this.props.city){
      this.setState({
        city:this.props.city,
      });
    }
  }


  render() {
    let fields = this.props.fields;
    let errors = this.props.errors;
    let submitted = this.props.submitted;
    return (
      <div>
          <Grid container direction="column" style={{ paddingTop: 20 }}>
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
                        value={fields.street_address}
                        error={submitted && errors.street_address?(
                          true
                        ):(false)}
                        name={'street_address'}
                        onChange={this.handleInput}
                        variant="outlined"
                      />
                    {submitted && errors.street_address &&
                    <ValidationError>
                    {errors.street_address}
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
                          error={submitted && errors.street_address2?(
                            true
                          ):(false)}
                          value={fields.street_address2}
                          name={'street_address2'}
                          onChange={this.handleInput}
                          variant="outlined"
                        />
                    {submitted && errors.street_address2 &&
                    <ValidationError>
                       {errors.street_address2}
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
                         value={this.state.country}
                         onChange={this.handleChangeCountry}
                         fullWidth
                         name={'country'}
                         input={<FilledInput  style={{ border: "solid 0.5px grey", backgroundColor: "white" }}/>}
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
                        value={this.state.city}
                        name={'city'}
                        onChange={this.handleChangeCity}
                        input={<FilledInput style={{ border: "solid 0.5px grey", backgroundColor: "white" }}/>}
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
                </Grid>
              </Grid>
            </Grid>
            <Grid container direction="row" spacing={24} style={{ paddingTop: 20 }}>
              <Grid item xs={6}>
                <Grid
                  container direction='column'>
                  <Grid item>
                    <Typography variant={'h6'} gutterBottom>
                      State
                    </Typography>
                  </Grid>
                  <Grid item>
                      <TextField
                        fullWidth
                        name={'state'}
                        error={submitted && errors.state?(
                          true
                        ):(false)}
                        value={fields.state}
                        onChange={this.handleInput}
                        id='outlined-bare'
                        variant='outlined'
                      />
                    {submitted && errors.state &&
                    <ValidationError>
                        {errors.state}
                      </ValidationError>
                    }
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={6}>
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
                        name={'description2'}
                        error={submitted && errors.description2?(
                          true
                        ):(false)}
                        value={fields.description2}
                        onChange={this.handleInput}
                        id='outlined-bare'
                        variant='outlined'
                      />
                    {submitted && errors.description2 &&
                      <ValidationError>
                        {errors.description2}
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