import React,{Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import styled from "styled-components";
import Selects from '../../components/Cash/Selects/selects';
import Balance from '../../components/Cash/Balance';
import CashButtons from '../../components/Cash/Buttons';
import HeaderComponent from "../../components/Header/HeaderComponent";
import Numpad from '../../components/Cash/Numpad';
import PaymentType from '../../components/Cash/PaymentType';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
});
const CompanyBackgroundComponent = styled.div`
  height: 100vh;
  width: 100%;
  background-color: inherit;
 
`;

const ComponentsWrapper = styled.div`
  display: flex;
  width:100%;
  padding:20px;
`;

class Cash extends Component {
  render() {
    const { classes } = this.props;
    return (
      <CompanyBackgroundComponent>
        <HeaderComponent/>
        <ComponentsWrapper>
          <form className={classes.root} autoComplete="off" style={{width:'100%'}}>
            <Grid container spacing={24}>
              <Grid item md={8}>
                <Selects/>
              </Grid>
              <Grid item md={4}>
                <CashButtons />
              </Grid>
              <Grid item md={7}>
                <Balance />
              </Grid>
              <Grid item md={3}>
                <Numpad />
              </Grid>
              <Grid item md={2}>
                <PaymentType />
              </Grid>
            </Grid>
          </form>
        </ComponentsWrapper>
      </CompanyBackgroundComponent>
    );
  }
}

Cash.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Cash);