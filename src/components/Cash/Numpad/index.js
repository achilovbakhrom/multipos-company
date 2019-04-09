import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles/index";
import FormControl from "@material-ui/core/FormControl/index";
import Paper from "@material-ui/core/Paper/index";
import { Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button/index";
import Grid from "@material-ui/core/Grid/index";
import Backspace from "@material-ui/icons/Backspace";

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  formControl: {
    flexGrow: 1,
    flexBasis: 0
  },
  input_fields: {
    padding: "15px"
  },
  colored_input: {
    "& input": {
      color: theme.palette.primary.main
    }
  },
  input_field: {
    marginBottom: "15px",
    "& h6": {
      marginBottom: "10px"
    },
    "& input": {
      width: "100%",
      border: "none",
      marginBottom: "20px",
      fontSize: "22px"
    }
  },
  numpad_wrapper: {
    display: "block",
    width: "100%"
  },
  decimals: {
    textAlign: "center"
  },
  decimalItem: {
    color: theme.palette.primary.dark,
    width: "100%",
    cursor: "pointer",
    padding: "20px",
    marginBottom: "20px",
    fontSize: "22px"
  },
  backspace_btn: {
    color: "#b4b4b5",
    cursor: "pointer"
  },
  payment_wrapper:{
    display:'flex',
  },
  pay_btn:{
    backgroundColor:theme.palette.success,
    color:'#fff',
    display:'block',
    width:'100%',
    borderTopLeftRadius:0,
    borderTopRightRadius:0,
    fontSize:'22px',
    padding:'20px 0',
  }
});


class CashSelects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      payment_value: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.deleteNumbers = this.deleteNumbers.bind(this);
    this.handleKeypress = this.handleKeypress.bind(this);
    this.resetNumbers = this.resetNumbers.bind(this);
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeypress);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeypress);
  }

  handleKeypress(event) {
    let numberRegExp = event.key.match(/^[0-9]+$/);
    let { payment_value } = this.state;
    if (numberRegExp !== null || event.key === '.') {
      this.setState(prevState => ({
        payment_value: prevState.payment_value + event.key
      }));
    }

    if (payment_value.length > 0 && event.key === "Backspace" || event.key === "Delete") {
      this.deleteNumbers();
    }
  }

  handleChange(event) {
    let targetValue = event.target.innerText;
    if(targetValue !== "C"){
      this.setState(prevState => ({
        payment_value: prevState.payment_value + targetValue
      }));
    }else{
      this.resetNumbers();
    }
  };

  deleteNumbers() {
    let { payment_value } = this.state;
    if (payment_value.length > 0) {
      let currentLength = payment_value.length;
      let newPaymentValue = payment_value.substring(0, currentLength - 1);
      this.setState({
        payment_value: newPaymentValue
      });
    }
  }
  resetNumbers(){
   this.setState({
     payment_value:""
   });
  }
  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.root}>
        <div className={classes.numpad_wrapper}>
          <div className={classes.input_fields}>
            <div className={classes.input_field}>
              <Typography variant={"h6"}>
                Balance due
              </Typography>
              <input type="text"/>
            </div>
            <div className={classes.input_field}>
              <Typography variant={"h6"}>
                Balance
              </Typography>
              <input type="text"/>
            </div>
            <div className={`${classes.input_field} ${classes.colored_input}`}>
              <Typography variant={"h6"}>
                Payment
              </Typography>
              <div className={classes.payment_wrapper}>
                <input type="text" name={"payment"} value={this.state.payment_value} onChange={() => {
                }}/>
                <Backspace onClick={this.deleteNumbers} className={classes.backspace_btn}/>
              </div>
            </div>
          </div>
            <div className={classes.decimals} onClick={this.handleChange} onKeyPress={this.handleChange}>
              <Grid container>
                <Grid item xs={4}>
                  <div className={classes.decimalItem}>
                    1
                  </div>
                  <div className={classes.decimalItem}>
                    4
                  </div>
                  <div className={classes.decimalItem}>
                    7
                  </div>
                  <div className={classes.decimalItem}>
                    .
                  </div>
                </Grid>
                <Grid item xs={4}>
                  <div className={classes.decimalItem}>
                    2
                  </div>
                  <div className={classes.decimalItem}>
                    5
                  </div>
                  <div className={classes.decimalItem}>
                    8
                  </div>
                  <div className={classes.decimalItem}>
                    0
                  </div>
                </Grid>
                <Grid item xs={4}>
                  <div className={classes.decimalItem}>
                    3
                  </div>
                  <div className={classes.decimalItem}>
                    6
                  </div>
                  <div className={classes.decimalItem}>
                    9
                  </div>
                  <div className={classes.decimalItem}>
                    C
                  </div>
                </Grid>
              </Grid>
            </div>
            <Button variant="contained" className={classes.pay_btn}>
              PAY
            </Button>
          </div>
      </Paper>
    );
  }
}

export default withStyles(styles)(CashSelects);