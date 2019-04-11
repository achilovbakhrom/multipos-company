import React, { Component } from "react";
import Button from "@material-ui/core/Button/index";
import { withStyles } from "@material-ui/core/styles/index";
import Select from "@material-ui/core/Select";
import BootstrapInput from "../../Common/BootstrapInput";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Plus from "@material-ui/icons/add";
import { rgbToColorString } from "polished/lib/index";

const styles = theme => ({

  button: {
    backgroundColor: "#fff",
    paddingTop: "15px",
    paddingBottom: "15px",
    borderRadius: 0,
    boxShadow: "none",
    display:'block',
    width:'100%',
    flexGrow: 1,
    borderBottom: `1px solid ${theme.common.gray}`,
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
      color: "#fff"
    }
  },
  buttons_heading: {
    backgroundColor: theme.palette.primary.header,
    paddingTop: "12px",
    paddingBottom: "13px",
    borderTopLeftRadius: "4px",
    borderTopRightRadius: "4px",
    textAlign: "center",
    color: "#fff"
  },
  currency_select: {
    marginBottom: "20px",
    width:'100%',
  },
  inner_wrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: 'center',
    height:'100%',


  },
  top_item: {
    marginTop:'0',
    width:'100%',
  },
  bottom_item: {
    margin: "0 auto 0",
    width:'100%',
    "& button":{
      boxShadow:'0px 1px 3px -1px '+rgbToColorString({ red: 0, green: 0, blue: 0, alpha: 0.5 }),
    }
  }
});

class PaymentType extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: ""
    };
  }

  render() {
    const { classes } = this.props;
    return (
      <>
        <div className={classes.inner_wrapper}>
          <div className={classes.top_item}>
            <FormControl className={classes.currency_select}>
              <Select
                value={this.state.type}
                onChange={this.handleChange}
                displayEmpty
                className={classes.selectEmpty}
                input={<BootstrapInput name={"type"} value={this.state.type}/>}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Usd</MenuItem>
                <MenuItem value={20}>Euro</MenuItem>
                <MenuItem value={30}>Rub</MenuItem>
              </Select>
            </FormControl>
            <div className={classes.buttons_heading}>
              Payment Type
            </div>
            <Button variant="contained" className={classes.button}>
              Cash
            </Button>
            <Button variant="contained" className={classes.button}>
              Card
            </Button>
            <Button variant="contained" className={classes.button}>
              Transfer
            </Button>
            <Button variant="contained" className={classes.button}>
              Master Card
            </Button>
          </div>
          <div className={classes.bottom_item}>
            <Button style={{
              backgroundColor: "white",
              textTransform: "capitalize",
              color: "#49a4de",
              width: "100%",
              padding: "15px 0",
              borderBottom: "1px solid #ededed"
            }}
            >
              <Plus/> Add
            </Button>
          </div>
        </div>
    </>
    );
  }
}

export default withStyles(styles)(PaymentType);