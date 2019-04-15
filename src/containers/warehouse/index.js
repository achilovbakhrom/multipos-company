import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Apps';
import Search from '@material-ui/icons/Search';
import Header from './tabs/tabs';
import {Link} from 'react-router-dom';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

function ButtonAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
            <Link to={"/admin-panel"}>
                <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                    <MenuIcon />
                </IconButton>
            </Link>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            Warehouse
          </Typography>
          <IconButton color="inherit">
            <Search  />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Header/>
    </div>
  );
}



export default withStyles(styles)(ButtonAppBar);