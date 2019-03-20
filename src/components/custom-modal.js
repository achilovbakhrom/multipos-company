import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  cm_modal_wrapper: {
    visibility: "hidden",
    opacity: 0,
    position: "fixed",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    zIndex: 1000,
    background: rgba(0, 0, 0, 0.75),
    padding: "20px",
    display: "flex",
    alignItems: "center",
    transition: "all 0.3s ease",
    "& > open": {
      visibility: "visible",
      opacity: 1
    },
    "& > cm_modal": {
      maxWidth: "100%",
      width: "100%",
      position: "relative",
      background: "#fff",
      "& > close-button": {
        backgroundColor: "transparent",
        border: "none",
        position: "absolute",
        top: "10px",
        right: "10px",
        zIndex: "100",
        "& > i": {
          fontSize: "18px"
        }
      }
    }
  });

class CustomModal extends Component {
  constructor(props) {
    super(props);
    this.closeItem = this.closeItem.bind(this);
  }

  closeItem() {
    this.props.onCloseModal(false);
  }

  render() {
    return (
      <div className={this.props.modalShow ? "cm-modal-wrapper open" : "cm-modal-wrapper"}>
        <div className={"cm-modal"}>
          {this.props.children}
          <button className={"close-button"} onClick={this.closeItem}>
            <i className="fa fa-times" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    );
  }
}
export default withStyles(styles)(CustomModal);