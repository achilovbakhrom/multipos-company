import React from "react";
import PropTypes from "prop-types";
import 'croppie/croppie.css';
import Croppie from 'croppie/croppie.min';
import Button from "@material-ui/core/Button";
import Done from "@material-ui/icons/Done";
import defaultImage from "../../resourse/media/avatar.png";


class ImageUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: this.props.file ? this.props.file : null,
      imagePreviewUrl: this.props.avatar ? this.props.avatar : defaultImage,
      showCropper:false,
    };
    this.handleImageChange = this.handleImageChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.closeCrop = this.closeCrop.bind(this);
  }
  handleImageChange(e) {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];
    reader.onloadend = () => {
      this.setState({
        showCropper:true,
      },
        this.createCroppie(reader.result)
      );
    };
    reader.readAsDataURL(file);
  }
  dataURLtoFile(dataurl, filename) {
    var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
    while(n--){
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, {type:mime});
  }

  handleSubmit() {
    this.props.onChange(this.state.file,this.state.imagePreviewUrl);
  }

  handleClick() {
    let input = document.createElement("input");
    input.type = "file";
    input.onchange = this.handleImageChange;
    input.click();
  }
  handleRemove() {
    this.setState({
      file: null,
      imagePreviewUrl: defaultImage
    },this.handleSubmit);
  }
  createCroppie(result){
    let el = document.querySelector('.croppie');
    let croppieObj = new Croppie(el, {
      viewport: { width: 112, height: 112 },
      boundary: { width: 300, height: 300 },
      showZoomer: true,
    });
    croppieObj.bind({
      url: result,
      orientation: 4
    });
    this.setState({
      croppie:croppieObj,
    });
  }

  closeCrop() {
    this.state.croppie.result('base64').then((base)=>{
      let ext = base.split(';')[0].split('/')[1];
      let name = new Date().getTime()+'.';
      let file = this.dataURLtoFile(base,name + ext);
      this.setState({
        file:file,
        imagePreviewUrl:base,
        showCropper:false,
      },()=>{
        this.state.croppie.destroy();
        this.handleSubmit();
      });

    });
  }
  render() {
    return (
      <div className="fileinput">
        <div className={(this.props.avatar ? " img-circle" : "")}>
          <img style={{width: "112px", height:"112px"}} src={this.state.imagePreviewUrl} alt="..." />
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
              <Button style={{backgroundColor: '#49a4de', color:"white", margin: "1px"}} onClick={() => this.handleRemove()}>
                <i className="fa fa-times" /> Remove
              </Button>
            </span>
          )}
          <div className={this.state.showCropper ? 'croppie_wrapper active' : 'croppie_wrapper'}>
            <div className={'croppie'}>
              <Button style={{backgroundColor: '#49a4de', color:"white",marginBottom:'10px'}} onClick={this.closeCrop}>
                <Done />
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ImageUpload.propTypes = {
  avatar: PropTypes.string
};

export default ImageUpload;
