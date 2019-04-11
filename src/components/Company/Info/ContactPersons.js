import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import styled from "styled-components";
import Paper from "@material-ui/core/Paper";
import defaultImage from "../../../resourse/media/avatar.png";
import PhoneTalk from "@material-ui/icons/PhoneInTalk";
import Email from "@material-ui/icons/Email";
import ContactLink from './ContactItem';
import AddItem from "../../officeAdress/address-item";
import {Link} from 'react-router-dom';
const styles = theme => ({

  contact_persons: {
    "&  h5": {
      fontWeight: "bold",
      "&>a":{
        color:"#000",
        textDecoration:'none',
      }
    },
    "& img":{
      borderRadius:'6px',
    }
  }

});

const ContactItem = styled(Paper)`
    padding:15px;
    margin-bottom:20px;
    padding-bottom:50px;
    box-shadow:none!important;
    border:1px solid #ededed;
  
`;

class ContactPersons extends Component {
  render() {
    const { contact_persons } = this.props.classes;
    return (
      <div className={contact_persons}>
        <Grid container spacing={24}>
          <Grid item md={6}>
            <ContactItem>
              <Grid container spacing={24}>
                <Grid item md={3}>
                  <img src={defaultImage} alt=""/>
                </Grid>
                <Grid item md={9}>
                  <Typography variant={"h5"}>
                    <Link to={'/company/info/contact/1'}>
                      Johny Depp
                    </Link>
                  </Typography>
                  <Typography variant={"h6"}>
                    CEO
                  </Typography>
                </Grid>
                <Grid item md={12}>
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
                </Grid>
              </Grid>
            </ContactItem>
            <ContactItem>
              <Grid container spacing={24}>
                <Grid item md={3}>
                  <img src={defaultImage} alt=""/>
                </Grid>
                <Grid item md={9}>
                  <Typography variant={"h5"}>
                    Johny Depp
                  </Typography>
                  <Typography variant={"h6"}>
                    CEO
                  </Typography>
                </Grid>
                <Grid item md={12}>
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
                </Grid>
              </Grid>
            </ContactItem>
          </Grid>
          <Grid item md={6}>
            <ContactItem>
              <Grid container spacing={24}>
                <Grid item md={3}>
                  <img src={defaultImage} alt=""/>
                </Grid>
                <Grid item md={9}>
                  <Typography variant={"h5"}>
                    Johny Depp
                  </Typography>
                  <Typography variant={"h6"}>
                    CEO
                  </Typography>
                </Grid>
                <Grid item md={12}>
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
                </Grid>
              </Grid>
            </ContactItem>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(ContactPersons);