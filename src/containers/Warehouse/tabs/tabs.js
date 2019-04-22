import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import NoSsr from '@material-ui/core/NoSsr';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Warehouses from '../warehouses/warehouse';
import States from '../state';

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

function LinkTab(props) {
  return <Tab component="a" onClick={event => event.preventDefault()} {...props} />;
}

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  bgcolor: {
    backgroundColor: "white"
  }
});

class NavTabs extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <NoSsr>
        <div className={classes.root}>
          <AppBar position="static" >
            <Tabs className={classes.bgcolor} variant="fullWidth" value={value} onChange={this.handleChange} indicatorColor="primary" textColor="primary">
              <LinkTab label="Warehouses" href="page1" style={{textDecoration: "none"}}/>
              <LinkTab label="State" href="page2" style={{textDecoration: "none"}}/>
              <LinkTab label="Transfer" href="page3" style={{textDecoration: "none"}}/>
              <LinkTab label="Waste/Surplus" href="page4" style={{textDecoration: "none"}}/>
            </Tabs>
          </AppBar>
          {value === 0 && <TabContainer> <Warehouses/> </TabContainer>}
          {value === 1 && <TabContainer> <States/> </TabContainer>}
          {value === 2 && <TabContainer>Transfer</TabContainer>}
          {value === 3 && <TabContainer>Waste/Surplus</TabContainer>}
        
        </div>
      </NoSsr>
    );
  }
}



export default withStyles(styles)(NavTabs);
