import React, { Component } from 'react';
import './css/flatBrief.css'
import apiClient from '../../helper/apiclient/apiClient';
import SigleFlat from './SingleFlat';

export default class FlatBrief extends Component {

  constructor() {
    super();

    this.state = {
      singleFlat: false,
      flat: {}
    }
  }

  getSingleFlat=()=>{
    apiClient.GetSingleFlat(this.props.flatid).then((flat)=>{
      console.log('ffffffffffffffffffffffff')
      console.log(flat);
      console.log('ffffffffffffffffffffffff')

      this.setState({
        singleFlat: true,
        flat: flat
      })
    });
  }
  render() {
    if (this.state.singleFlat) {


      return (
        <div>
          <div className="briefDiscriptiona">
            <div className="briefDiscription">

              <h2>{this.props.title}</h2>
              <h3>{this.props.price}</h3>
              <h3>{this.props.street} {this.props.flatNumber} {this.props.postCode} </h3>
              <h4>{this.props.briefDescription}</h4>
              <h6>{this.props.description}</h6>
              <button onClick={this.getSingleFlat}>Full Describtion</button>

            </div>
          </div>
        </div>
      );
    } else {
      < SigleFlat />
    }
  }
}