import React,{Component} from "react";
import { withStyles } from "@material-ui/core/styles";
const styles = theme=>({
  contact_link: {
    marginBottom:'5px',
    "&>a": {
      fontSize: "15px",
      color: "#000",
      textDecoration: "none",
      "&>svg": {
        color: "#4d8aaf",
        fontSize: "16px",
        marginRight: "10px",
        verticalAlign: "middle"
      }
    }
  }
});
class ContactLink extends Component{
 render(){
   const {contact_link} = this.props.classes;
   return(
     <div className={contact_link}>
       {this.props.children}
     </div>
   );
 }
}

export default withStyles(styles)(ContactLink);