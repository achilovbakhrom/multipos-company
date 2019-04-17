import React, {Component} from 'react';
import HeaderComponent from "../../components/Header/HeaderComponent";
import styled from "styled-components";
import { withStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid/Grid";
import Paper from "@material-ui/core/Paper/Paper";
import Scrollbar from "components/Common/Scrollbar";
import TextField from "@material-ui/core/TextField";
import { FormValidation } from "calidation";
import Typography from "@material-ui/core/Typography/Typography";
import Select from "@material-ui/core/Select/Select";
import MenuItem from "@material-ui/core/MenuItem/MenuItem";
import {config} from "./validation/store-validation";
import ValidationError from "../../components/errors/error-messages";
import Switch from '@material-ui/core/Switch';
import Button from "@material-ui/core/Button/Button";
import IconDone from "@material-ui/icons/Done";
import IconCancel from "@material-ui/icons/Close";
import {connect} from "react-redux";
import {addStore} from '../../actions/addStore';
import InputBase from '@material-ui/core/InputBase';
const Warehouse = [
    "Pallet racking",
    "Shelving",
    "Mobile shelving"
];
const MainWarehouse = [
    "Korzinka",
    "Makro",
    "Atlas"
];



const CompanyBackgroundComponent = styled.div`
  height: 100vh;
  width: 100%;
  background-color: inherit;
 
`;
const ListContentComponent = styled.div`
  width:100%;
  padding: 20px;

`;
const ContentSubmitButton = styled(Paper)`
    width: 100%;
    height: 50px;
`;
const topTabStyles = {
    display: "flex",
    alignItems: "center",
    borderRadius: 4
};
const flexItem = {
    display: "flex",
    width: "100%",
    padding: "20px",
    justifyContent: "space-between"
};
const styles = theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper

    },
});
const BootstrapInput = withStyles(theme => ({
    root: {
        'label + &': {
            marginTop: theme.spacing.unit * 3,
        },
    },
    input: {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: theme.palette.background.paper,
        border: '1px solid #ced4da',
        fontSize: "1rem",
        width: 'auto',
        padding: '18.5px 26px 18.5px 12px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        // Use the system font instead of the default Roboto font.
        '&:focus': {
            borderRadius: 4,
            borderColor: '#49a4de',
            backgroundColor: theme.palette.background.paper
        },
    },
}))(InputBase);


class Store extends Component{
    constructor(props){
        super(props);
        this.state = {
            checked: false,
            country: '',
            city: ''
        };
        this.handleInput = this.handleInput.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleInput(event){
        const name = event.target.name;
        const value = event.target.value;
        this.setState((prevState)=>({
            ...prevState,
            [name]:value,
        }),()=>{console.log(this.props)});
    }

    handleChange = name => event => {
        this.setState({ [name]: event.target.checked });
    };

    onSubmit = ({}) => {
        this.props.addEstablishment(this.state);
        console.log(this.props)
    };

    render(){
        const { classes } = this.props;
        return(
            <div className={classes.root}>
                <CompanyBackgroundComponent>
                    <HeaderComponent/>
                    <ListContentComponent>
                        <Grid style={{ paddingTop: 8 }} container spacing={24}>
                            <Grid item xs={3} sm={3}>
                                <Paper>
                                    <Scrollbar showBtn btnText={'Store'} />
                                </Paper>
                            </Grid>
                            <Grid item xs={2} sm={2}>
                                <Paper>
                                    <Scrollbar showBtn btnText={'Add Pos'}/>
                                </Paper>
                            </Grid>
                            <Grid item xs={7} sm={7}>
                                <Paper style={{ height: "105%" }}>
                                    <FormValidation onSubmit={this.onSubmit} config={config}>
                                        {({fields, errors, submitted}) => (
                                            <>
                                        <ContentSubmitButton style={topTabStyles}>
                                            <div style={flexItem}>
                                                <Typography variant={"h5"}>
                                                    Add Store
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
                                        <Grid container justify='center' style={{ paddingTop: 20 }}>
                                            <Grid item xs={11}>
                                                <Grid
                                                    container direction='column'>
                                                    <Grid item>
                                                        <label style={{ fontWeight: "bold" }}>Name</label>
                                                    </Grid>
                                                    <Grid>
                                                        <TextField
                                                            fullWidth
                                                            error={submitted && errors.name?(true)
                                                            : (false)}
                                                            name={"name"}
                                                            value={fields.name}
                                                            variant="outlined"
                                                            onChange={this.handleInput}
                                                        />

                                                        {submitted && errors.name &&
                                                        <ValidationError>
                                                            {errors.name}
                                                        </ValidationError>
                                                        }
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                        <Grid container justify='center' style={{ paddingTop: 20 }}>
                                            <Grid item xs={11}>
                                                <Grid
                                                    container direction='column'>
                                                    <Grid item>
                                                        <label style={{ fontWeight: "bold" }}>Address</label>
                                                    </Grid>
                                                    <Grid>
                                                        <TextField
                                                            fullWidth
                                                            error={submitted && errors.address?(
                                                                true) : (false)}
                                                            name={"address"}
                                                            value={fields.address}
                                                            variant="outlined"
                                                            onChange={this.handleInput}
                                                        />
                                                        {submitted && errors.address &&
                                                            <ValidationError>
                                                                {errors.address}
                                                            </ValidationError>
                                                        }
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                        <Grid container justify="center" direction="row" spacing={24} style={{ paddingTop: 20 }}>
                                            <Grid item xs={5}>
                                                <Grid
                                                    container direction='column'>
                                                    <Grid item>
                                                        <Typography variant={'h6'} gutterBottom>
                                                            Warehouse
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item>
                                                        <Select
                                                            onChange={this.handleInput}
                                                            fullWidth
                                                            value={this.state.country}
                                                            name={'country'}
                                                            input={<BootstrapInput/>}
                                                        >
                                                            {Warehouse.map(country => (
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
                                                            Main Warehouse
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item>
                                                        <Select
                                                            fullWidth
                                                            value={this.state.city}
                                                            onChange={this.handleInput}
                                                            name={'city'}
                                                            input={<BootstrapInput/>}
                                                        >
                                                            {MainWarehouse.map(city => (
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
                                        <Grid container justify="center"  direction="row" spacing={24} style={{ paddingTop: 40 }}>
                                            <Grid item xs={5}>
                                                <Grid
                                                    container direction='column'>
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
                                            <Grid item xs={6}>
                                                <Grid container style={{paddingTop: "25px"}} direction='row' alignItems="center" justify="space-evenly">
                                                    <Grid item>
                                                        <Typography variant={"h6"}>
                                                            Active
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item>
                                                        <Switch
                                                            checked={this.state.checked}
                                                            onChange={this.handleChange('checked')}
                                                            value={this.state.checked}
                                                            color="primary"
                                                        />
                                                        {submitted && this.state.checked === false &&
                                                        <ValidationError>
                                                            Active field is required
                                                        </ValidationError>
                                                        }
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                        <Grid container justify='center' style={{ paddingTop: 20 }}>
                                            <Grid item xs={11}>
                                                <Grid
                                                    container direction='column'>
                                                    <Grid item>
                                                        <label style={{ fontWeight: "bold" }}>Description</label>
                                                    </Grid>
                                                    <Grid>
                                                        <TextField
                                                            fullWidth
                                                            error = {submitted && errors.description? (
                                                                true) : (false)}
                                                            name={"description"}
                                                            value={fields.description}
                                                            variant="outlined"
                                                            onChange={this.handleInput}
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
                                          </>
                                        )}
                                    </FormValidation>
                                </Paper>
                            </Grid>
                        </Grid>
                    </ListContentComponent>
                </CompanyBackgroundComponent>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return{
        addedStore: state.addedStore
    }
}

export default connect(mapStateToProps, {addEstablishment: addStore}) (withStyles(styles)(Store));