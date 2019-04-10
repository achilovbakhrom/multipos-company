import React,{Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles/index';
import Table from '@material-ui/core/Table/index';
import TableBody from '@material-ui/core/TableBody/index';
import TableCell from '@material-ui/core/TableCell/index';
import TableHead from '@material-ui/core/TableHead/index';
import TableRow from '@material-ui/core/TableRow/index';
import Paper from '@material-ui/core/Paper/index';
import styled from "styled-components";

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.primary.darkGray,
    color: theme.palette.common.white,
    fontWeight:400,
    fontSize:15,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const CompanyBackgroundComponent = styled.div`
  width: 100%;
  background-color: inherit;
 
`;

const styles = theme => ({
  root: {
    width: '100%',
    overflowX: 'auto',
    height:'100%',
  },
  table: {
    minWidth: 700,
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },

  },
});

let id = 0;
function createData(subject_id,subject_name, subject_amount) {
  id += 1;
  return {subject_id,subject_name, subject_amount};
}

const rows = [
  createData('01DF485', 'ID18467', '200'),
  createData('01DF485', 'ID18467', '300'),
  createData('01DF485', 'ID18467', '400'),
  createData('01DF485', 'ID18467', '500'),
  createData('01DF485', 'ID18467', '600'),
];


class Balance extends Component{
  constructor(props){
    super(props);
  }
  render(){
    const { classes } = this.props;
    return (
      <Paper className={classes.root}>
        <CompanyBackgroundComponent>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <CustomTableCell>Subject ID</CustomTableCell>
              <CustomTableCell align="center">Subject Name</CustomTableCell>
              <CustomTableCell align="center">Balance Amount</CustomTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row,index) => (
              <TableRow className={classes.row} key={index}>
                <CustomTableCell component="th" scope="row">
                  {row.subject_id}
                </CustomTableCell>
                <CustomTableCell align="center">{row.subject_name}</CustomTableCell>
                <CustomTableCell align="center">{row.subject_amount}</CustomTableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        </CompanyBackgroundComponent>
      </Paper>
    );
  };
}

Balance.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Balance);