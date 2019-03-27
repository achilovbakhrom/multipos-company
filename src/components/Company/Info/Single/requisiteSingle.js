import React,{Component} from 'react';
import Typography from "@material-ui/core/Typography";
import IconEdit from "@material-ui/icons/Edit";
import IconDelete from "@material-ui/icons/Delete";
import ArrowBack from "@material-ui/icons/ArrowBack";
import PhoneTalk from "@material-ui/icons/PhoneInTalk";
import Email from "@material-ui/icons/Email";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core";
import ContactLink from '../ContactItem';
import Grid from "@material-ui/core/Grid";
import AddItem from "../../../officeAdress/address-item";


const ContentSubmitButton = styled(Paper)`
    width: 100%;
    height: 50px;
    
`;

const styles = theme => ({
  root: {
    flexGrow: 0,
    backgroundColor: theme.palette.background.paper
  },
  back_button:{
    marginRight:'10px',
  },
  '& a':{
    color:'#000',
  },
  single_inner:{
    padding:"24px",
    // color:theme.palette.primary.main,
    "& img":{
      borderRadius:'6px',
    }
  },
  office_address:{
    paddingTop:'20px',
    borderTop:'1px solid #cecece',
  },
});
const topTabStyles = {
  display:'flex',
  alignItems:'center',
  borderRadius:0,
};
const flexItem = {
  display: 'flex',
  width:'100%',
  padding: '0 20px',
  justifyContent:'space-between',
};

class SingleRequisite extends Component{
  render(){
    const { classes } = this.props;
    return(
      <div className={classes.root}>
        <ContentSubmitButton style = {topTabStyles}>
          <div style={flexItem}>
            <Typography variant={"h5"} style={{fontWeight:'bold'}}>
              <Link to={'/company/info'} className={classes.back_button}>
                <ArrowBack />
              </Link>
              Contact title
            </Typography>
            <div className={'btns-wrapper'}>
              <Button
                type="button"
                style={{ marginLeft: "90" }}>
                <IconEdit style={{ color: "#4086f4" }}/>
              </Button>
              <Button
                type="button"
                style={{ marginLeft: "90" }}>
                <IconDelete style={{ color: "#d12212" }}/>
              </Button>
            </div>
          </div>
        </ContentSubmitButton>
        <div className={classes.single_inner}>
          <Grid container spacing={24}>
            <Grid item md={12}>
              <Typography variant={"h5"}>
                Johny Depp
              </Typography>
              CEO
              <div style={{marginTop:'5px'}}>
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
        </div>
          <div className={classes.office_address}>
            <div className={classes.single_inner}>
            <Grid container spacing={24}>
              <Grid item md={12}>
                <Typography variant={"h5"} style={{ fontWeight: "bold" }}>
                  Items
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
      </div>
    );
  }
}

export default connect(null,null)(withStyles(styles)(SingleRequisite));