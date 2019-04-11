import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import {Link} from 'react-router-dom';
import styled from "styled-components";
import Paper from "@material-ui/core/Paper";
import PhoneTalk from "@material-ui/icons/PhoneInTalk";
import Email from "@material-ui/icons/Email";
import ContactLink from './ContactItem';
const styles = theme => ({
  bank_requisites: {
    "&  h5": {
      fontWeight: "bold",
      '& a':{
        color:"#000",
        textDecoration:'none',
      },
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

class BankRequisites extends Component {
  render() {
    const { bank_requisites } = this.props.classes;
    return (
      <div className={bank_requisites}>
        <Grid container spacing={24}>
          <Grid item md={6}>
            <ContactItem>
              <Grid container spacing={24}>
                <Grid item md={12}>
                  <Typography variant={"h5"}>
                    <Link to={'/company/info/requisite/1'}>
                    Johny Depp
                    </Link>
                  </Typography>
                  <Typography variant={"h6"}>
                    CEO
                  </Typography>
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
                <Grid item md={12}>
                  <Typography variant={"h5"}>
                    Johny Depp
                  </Typography>
                  <Typography variant={"h6"}>
                    CEO
                  </Typography>
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
                <Grid item md={12}>
                  <Typography variant={"h5"}>
                    Johny Depp
                  </Typography>
                  <Typography variant={"h6"}>
                    CEO
                  </Typography>
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

export default withStyles(styles)(BankRequisites);