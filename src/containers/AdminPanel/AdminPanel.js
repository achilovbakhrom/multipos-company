import React,{Component} from 'react';
import Paper from '@material-ui/core/Paper';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import { withStyles } from '@material-ui/core/styles';
import './adminstyle.css';
import avatar from '../../resourse/media/profilePicture.jpg'
import MultipossLogo from '../../resourse/media/MultipossLogo.svg'
import Store from '../../resourse/media/establishment.svg'
import Company from '../../resourse/media/cmp.svg'
import Dashboard from '../../resourse/media/dashboard.svg'
import Managements from '../../resourse/media/managements.svg'
import Entities from '../../resourse/media/entities.svg'
import Warehouse from '../../resourse/media/warehouse.svg'
import Crm from '../../resourse/media/crm.svg'
import Hrm from '../../resourse/media/hrm.svg'
import Reports from '../../resourse/media/reports.svg'
import Cash from '../../resourse/media/cash.svg'
import Settings from '../../resourse/media/settings.svg'
import { Link } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


const styles = theme => ({
  paper: {
    backgroundColor: '#212112',
    opacity: 0.3,
    marginTop: 50,
  },
  bigAvatar: {
    margin: 10,
    width: 60,
    height: 60,
  },
  chip: {
    margin: theme.spacing.unit,
    fontSize: 30,
    color: '#ffffff', 
  }
});


class AdminPanel extends Component{
  
  render(){
    const { classes } = this.props;
    return(
     <div className="main-body"> 
     <Container>
          <Row className="justify-content-md-center">

                <Col xs lg="3">
                <br/>
                  <h1><Chip className={classes.chip} avatar={<Avatar src={avatar} className={classes.bigAvatar}/>} variant="outlined" label="Администратор"/></h1>
                </Col>
                <Col xs lg="5">
                  <br/>
                  <MultipossLogo/>
                </Col>
                <Col xs lg="4">
                  <br/>
                  <br/>
                  <h2>22 may, 2019 11:29</h2>
                </Col>
          </Row>
        </Container>
        <br/>
        <Carousel interval={null}>
            <Carousel.Item>
              <Container>
                <Row className="justify-content-md-center">
                  <Col xs lg="3">
                    <Link to="/company" style={{textDecoration: "none"}}>
                        <Paper className={classes.paper}>
                        <br/>
                        <Company/>
                        <br/>
                        <br/>
                          <h2>Company</h2>
                          <br/>
                        </Paper>
                      </Link>
                  </Col>
                  <Col xs lg="3">
                    <Link to="/dashboard" style={{textDecoration: "none"}}>
                        <Paper className={classes.paper}>
                        <br/>
                        <Dashboard/>
                        <br/>
                        <br/>
                        <h2>Dashboard</h2>
                        <br/>
                        </Paper>
                      </Link>
                  </Col>
                  <Col xs lg="3">
                    <Link to="/store" style={{textDecoration: "none"}}>
                        <Paper className={classes.paper}>
                        <br/>
                          <Store/>
                          <br/>
                          <br/>
                          <h2>Store</h2>
                          <br/>
                        </Paper>
                      </Link>
                  </Col>
                  <Col xs lg="3">
                  <Link to="/entities" style={{textDecoration: "none"}}>
                        <Paper className={classes.paper}>
                          <br/>
                          <Entities/>
                          <br/>
                          <br/>
                          <h2>Entities</h2>
                          <br/>
                        </Paper>
                      </Link>
                  </Col>
                </Row>
                <Row className="justify-content-md-center">
                  <Col xs lg="3">
                    <Link to="/management" style={{textDecoration: "none"}}>
                        <Paper className={classes.paper}>
                          <br/>
                          <Managements/>
                          <br/>
                          <br/>
                          <h2>Management</h2>
                          <br/>
                        </Paper>
                    </Link>
                  </Col>
                  <Col xs lg="3">
                    <Link to="/warehouse" style={{textDecoration: "none"}}>
                        <Paper className={classes.paper}>
                          <br/>
                          <Warehouse/>
                          <br/>
                          <br/>
                          <h2>Warehouse</h2>
                          <br/>
                        </Paper>
                    </Link>
                  </Col>
                  <Col xs lg="3">
                    <Link to="/crm" style={{textDecoration: "none"}}>
                        <Paper className={classes.paper}>
                          <br/>
                          <Crm/>
                          <br/>
                          <br/>
                          <h2>CRM</h2>
                          <br/>
                        </Paper>
                    </Link>
                  </Col>
                  <Col xs md="3">
                    <Link to="/hrm" style={{textDecoration: "none"}}>
                        <Paper className={classes.paper}>
                          <br/>
                          <Hrm />
                          <br/>
                          <br/>
                          <h2>HRM</h2>
                          <br/>
                        </Paper>
                    </Link>
                  </Col>
                </Row>
              </Container>   
              <br/>
              <br/>
              <br/>          
            </Carousel.Item>
            <Carousel.Item className="secondSlide">
            <Container>
            <Row className="justify-content-md-center">
              <Col xs lg="3">
                <Link to="/reports" style={{textDecoration: "none"}}>
                  <Paper className={classes.paper}>
                      <br/>
                      <Reports/>
                      <br/>
                      <br/>
                      <h2>Reports</h2>
                      <br/>
                  </Paper>
                </Link>
              </Col>
              <Col xs lg="3">
                  <Link to="/cash" style={{textDecoration: "none"}}>
                    <Paper className={classes.paper}>
                      <br/>
                      <Cash/>
                      <br/>
                      <br/>
                      <h2>Cash</h2>
                      <br/>
                    </Paper>
                  </Link>
              </Col>
              <Col xs lg="3">
                <Link to="/settings" style={{textDecoration: "none"}}>
                    <Paper className={classes.paper}>
                      <br/>
                      <Settings/>
                      <br/>
                      <br/>
                      <h2>Settings</h2>
                      <br/>
                    </Paper>
                  </Link>
              </Col>
            </Row>
            </Container>
            </Carousel.Item>
        </Carousel>
        </div>
    )
  }
}

export default withStyles(styles)(AdminPanel);