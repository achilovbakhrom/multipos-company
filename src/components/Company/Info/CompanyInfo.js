import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import PhoneTalk from "@material-ui/icons/PhoneInTalk";
import Email from "@material-ui/icons/Email";
import Grid from "@material-ui/core/Grid";
import AddItem from "../../officeAdress/address-item";
import { withStyles } from "@material-ui/core/styles";
import ContactLink from './ContactItem';
import defaultImage from "../../../resourse/media/avatar.png";


const styles = theme => ({
  company_info:{
    "& > img":{
      maxHeight:'30px',
      display:'none',
    },
  },
  office_address:{
    paddingTop:'20px',
    '&::after':{
      content:'',
      height:'2px',
      width:'100%',
      display:'block',
    }
  },
});



class CompanyInfo extends Component {
  render() {
    const {company_info } = this.props.classes;
    return (
      <div className={company_info}>
        <Grid container spacing={24}>
          <Grid item md={2}>
            <div className="logo">
              <img src={defaultImage}/>
            </div>
          </Grid>
          <Grid item md={10}>
            <div className="c-info">
              <Typography variant={"h5"} style={{ fontWeight: "bold" }}>
                Company title
              </Typography>
              <Typography variant={"h6"}>
                Company description
              </Typography>
              <p style={{margin:'8px 0'}}>
                Lorem ipsum dolor sit amet.
              </p>
              <ContactLink>
                <a href={"tel:+123456789"}>
                  <PhoneTalk/>
                  +123456789
                </a>
              </ContactLink>
              <ContactLink>
                <a href={"mailto:test@gmail.com"}>
                  <Email/>
                  test@gmail.com
                </a>
              </ContactLink>
            </div>
          </Grid>
        </Grid>
        <div className={this.props.classes.office_address}>
          <Grid container spacing={24}>
            <Grid item md={12}>
              <Typography variant={"h5"} style={{ fontWeight: "bold" }}>
                Office address
              </Typography>
            </Grid>
            <Grid item md={6}>
              <div className="l-info">
                <AddItem>
                  <Typography variant={"h6"}>
                    Country
                  </Typography>
                  USA
                </AddItem>
                <AddItem>
                  <Typography variant={"h6"}>
                    State
                  </Typography>
                  New York
                </AddItem>
                <AddItem>
                  <Typography variant={"h6"}>
                    City
                  </Typography>
                  New York City
                </AddItem>
                <AddItem>
                  <Typography variant={"h6"}>
                    Zip Code
                  </Typography>
                  30047
                </AddItem>
              </div>
            </Grid>
            <Grid item md={6}>
              <div className="r-info">
                <AddItem>
                  <Typography variant={"h6"}>
                    Street Address 1
                  </Typography>
                  Avenue 3, Manhattan
                </AddItem>
                <AddItem>
                  <Typography variant={"h6"}>
                    Street Address 2
                  </Typography>
                  30047
                </AddItem>
                <AddItem>
                  <Typography variant={"h6"}>
                    Description
                  </Typography>
                  Lorem ipsum dolor sit amet.
                </AddItem>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(CompanyInfo);