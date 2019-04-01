import React,{ Component} from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Add';
import WarehouseForm from './warehouseForm';

class Warehosue extends Component{
    render(){
        return (
            <Grid container spacing={24}>
                <Grid item xs={3} sm={3}>
                    <Paper style={{ height: "80vh" }}>
                        <Button size="large" style={{width: "100%", height: 70}} variant="outlined">
                            <SaveIcon size="large" />
                              Add Warehouse
                        </Button>
                    </Paper>
                </Grid>
                <Grid item xs={9} sm={9}>
                    <Paper style={{height: "80vh"}}> <WarehouseForm/> </Paper>
                </Grid>
            </Grid>
         );
    }
}


export default Warehosue;
