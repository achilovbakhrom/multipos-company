import React,{Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import IconInfo from "@material-ui/icons/InfoOutlined";
import Paper from '@material-ui/core/Paper';

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

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
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
function createData(subject_id,subject_name, curator_name, first_contact, last_contact, next_contact,icon) {
  id += 1;
  return {subject_id,subject_name, curator_name, first_contact, last_contact, next_contact,icon};
}

const rows = [
  createData('01DF485', 'ID18467', 'Name', '21.01.2017', '14.12.2019','5',<IconInfo />),
  createData('01DF485', 'ID18467', 'Name', '21.01.2017', '14.12.2019','5',<IconInfo />),
  createData('01DF485', 'ID18467', 'Name', '21.01.2017', '14.12.2019','5',<IconInfo />),
  createData('01DF485', 'ID18467', 'Name', '21.01.2017', '14.12.2019','5',<IconInfo />),
  createData('01DF485', 'ID18467', 'Name', '21.01.2017', '14.12.2019','5',<IconInfo />),
];


class Visits extends Component{
  constructor(props){
    super(props);
  }
  render(){
    const { classes } = this.props;
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <CustomTableCell>Subject ID</CustomTableCell>
              <CustomTableCell align="center">Subject Name</CustomTableCell>
              <CustomTableCell align="center">Curator Name</CustomTableCell>
              <CustomTableCell align="center">First Contact</CustomTableCell>
              <CustomTableCell align="center">Last Contact</CustomTableCell>
              <CustomTableCell align="center">Next Contact</CustomTableCell>
              <CustomTableCell align="center"></CustomTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row,index) => (
              <TableRow className={classes.row} key={index}>
                <CustomTableCell component="th" scope="row">
                  {row.subject_id}
                </CustomTableCell>
                <CustomTableCell align="center">{row.subject_name}</CustomTableCell>
                <CustomTableCell align="center">{row.curator_name}</CustomTableCell>
                <CustomTableCell align="center">{row.first_contact}</CustomTableCell>
                <CustomTableCell align="center">{row.last_contact}</CustomTableCell>
                <CustomTableCell align="center">{row.next_contact}</CustomTableCell>
                <CustomTableCell align="center">{row.icon}</CustomTableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    );
  };
}

Visits.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Visits);