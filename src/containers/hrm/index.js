import React, {Component} from 'react';
import HeaderComponent from '../../components/Header/HeaderComponent';
import styled from "styled-components";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const CompanyBackgroundComponent = styled.div`
  height: 100vh;
  width: 100%;
  background-color: inherit;
`;

class Hrm extends Component {
    render() {
        return (
            <div>
                <CompanyBackgroundComponent>
                    <HeaderComponent/>
                    <Grid style={{paddingTop: 8}} container spacing={24}>
                        <Grid item xs={3} sm={3}>
                            <Paper style={{height: "100vh"}}>

                            </Paper>
                        </Grid>
                        <Grid item xs={9} sm={9}>
                            <Paper style={{height: "100vh"}}>

                            </Paper>
                        </Grid>
                    </Grid>
                </CompanyBackgroundComponent>
            </div>
        )
    }
}

export default Hrm;