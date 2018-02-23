import React, { Component } from 'react';
import './css/flatBrief.css'
import SigleFlat from './SingleFlat';
import { Link } from "react-router-dom";

export default class FlatBrief extends Component {

  constructor() {
    super();

    this.state = {
      singleFlat: false,
      flat: {}
    }
  }

  render() {
    if (!this.state.singleFlat) {
      return (
        <div>
          <div className="briefDiscriptiona">
            <div className="briefDiscription">
                <h2>{this.props.title}</h2>
                <h3>Price: ${this.props.price}</h3>
                <h3>{this.props.street} {this.props.flatNumber} {this.props.postCode} </h3>
                <h4>{this.props.briefDescription}</h4>
                <Link to={`flat/${this.props.flatid}`}><button>Full Describtion</button></Link>                 
            </div>
          </div>
        </div>
      );
    } else {
      return(
      < SigleFlat {...this.props} />)
    }
  }
}