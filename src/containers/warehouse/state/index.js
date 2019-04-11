import React, { Component } from 'react';
import StateTable from './state';
import SelectCategory from './selectCategory';
import Grid from '@material-ui/core/Grid';

class State extends Component {
    state = {  }
    render() { 
        return ( 
            <Grid>
                <SelectCategory />
                <StateTable />
            </Grid>
         );
    }
}
 
export default State;