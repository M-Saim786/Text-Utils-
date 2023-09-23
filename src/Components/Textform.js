import React, { Component, useState } from "react";
// import PropTypes from 'prop-types'
export default class Textform extends Component {
  constructor() {
    super();
    this.state = {
      text : 'Enter'
    };
  }

  DetectValue = (event) => {
    this.setstate = event.target.value;
    // console.log('onchange')
  };

  ConvertUP = () => {
    // console.log("UP");
    console.log(this.state);
    let newtext
    this.setstate =  newtext.toUpperCase(this.state.text);
this.state = this.setstate
    console.log(this.setstate);
    console.log(this.state);

    //   this.setstate.toUpperCase()
    // let newtext=  this.setstate = (this.state.toUpperCase())
    //   this.state = (newtext)
    //   console.log(this.setstate.value)
  };
  ConvertLC = () => {
    console.log("LC");
  };
  Copy = () => {
    console.log("COPY");
  };
  Clear = () => {
    console.log("CLEAR");
  };
  render() {
    return (
      <div className="container">
        <div className="mb-3">
          {/* <label for="mybox" className="form-label"></label> */}
          <h2>Enter</h2>
          <textarea
            className="form-control"
            id="mybox"
            rows="8"
            value={this.state.text}
            onChange={this.DetectValue}
          >
            {this.state.text}
          </textarea>
          <button
            className="btn btn-primary mx-2  my-2"
            onClick={this.ConvertUP}
          >
            Covert To UpperCase
          </button>
          <button
            className="btn btn-primary mx-2  my-2"
            onClick={this.ConvertLC}
          >
            Covert To Lower Case
          </button>
          <button className="btn btn-primary mx-2 my-2" onClick={this.Copy}>
            Copy
          </button>
          <button className="btn btn-primary mx-2 my-2" onClick={this.Clear}>
            Clear
          </button>
        </div>
      </div>
    );
  }
}
