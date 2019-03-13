import React from "react";
// used for making the prop types of this component
import PropTypes from "prop-types";

// core components
import Button from "@material-ui/core/Button";

import defaultImage from "../../resourse/media/avatar.png";

class ImageUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: this.props.file ? this.props.file : null,
      imagePreviewUrl: this.props.avatar ? this.props.avatar : defaultImage
    };
    this.handleImageChange = this.handleImageChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }
  handleImageChange(e) {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];
    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      },
        this.handleSubmit
      );
    };
    reader.readAsDataURL(file);
  }
  handleSubmit() {
    this.props.onChange(this.state.file,this.state.imagePreviewUrl);
  }
  handleClick() {
    let input = document.createElement("input");
    input.type = "file";
    input.onchange = this.handleImageChange;
    console.log(input);
    input.click();
  }
  handleRemove() {
    this.setState({
      file: null,
      imagePreviewUrl: defaultImage
    },this.handleSubmit);
  }
  render() {
    return (
      <div className="fileinput text-center">
        <div className={(this.props.avatar ? " img-circle" : "")}>
          <img style={{width: "112px", height:"auto"}} src={this.state.imagePreviewUrl} alt="..." />
        </div>
        <div style={{paddingTop:'10px'}}>
          {this.state.file === null ? (
              <Button style={{backgroundColor: '#49a4de', color:"white"}} onClick={() => this.handleClick()}>
                Select image
              </Button>
          ) : (
            <span>
              <Button style={{backgroundColor: '#49a4de', color:"white", margin: "1px"}} onClick={() => this.handleClick()}>
                Change
              </Button>
              {/*{this.props.avatar ? <br /> : null}*/}
              <Button style={{backgroundColor: '#49a4de', color:"white", margin: "1px"}} onClick={() => this.handleRemove()}>
                <i className="fa fa-times" /> Remove
              </Button>
            </span>
          )}
        </div>
      </div>
    );
  }
}

ImageUpload.propTypes = {
  avatar: PropTypes.string
};

export default ImageUpload;
