import React, { Component } from "react";
import './Button.css';

class Button extends Component {

  render(){
    let { title, task } = this.props
    return(
      <button onClick = { task }>{ title }</button>
    )}
  }

export default Button