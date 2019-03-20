import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  addr_item: {
    marginBottom: "15px",
    fontWeight:'500',
    fontSize:'15px',
    "& > h6": {
      fontSize: "10px",
      marginBottom: "10px"
    },
  }
});

class AddrItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={this.props.classes.addr_item}>
        {this.props.children}
      </div>
    );
  }
}

export default withStyles(styles)(AddrItem);