import React, { Component } from 'react';

const user = process.env.REACT_APP_USERNAME;
const name = process.env.REACT_APP_FULL_NAME;


export default class App extends Component {
  componentDidMount() {
    document.title = `Find A Time With ${name} | ${name}'s Calendar Scheduling`;
    const calendlyScript = document.createElement("script")
    calendlyScript.src = "https://assets.calendly.com/assets/external/widget.js";
    calendlyScript.type = "text/javascript";
    calendlyScript.async = true;
    document.body.appendChild(calendlyScript)
  }

  dataURL = `https://calendly.com/${user}${window.location.pathname}`;
    render() {
      return (
     <div className="App">
       <div className="calendly-inline-widget col-12" data-url={this.dataURL} style={{ position:"absolute", top:0, height:"100%", width:"100%" }}></div>
     </div>
   
    );
  }
}
