import React, { Component } from 'react';
import './css/search.css'
import ApiCountries from '../../helper/apiclient/apiClient';

export default class SearchSection extends Component {
        constructor() {
                super();
                this.state = {
                        countries: [
                        ],
                        title: 'khaled',
                        selectedCountry:'',
                        isCountrySelected:false
                }
        }

        componentDidMount() {
                ApiCountries.GetCountries().then((getContries) => {
                        console.log(getContries)
                        this.setState({
                                countries: getContries.data
                        });
                });
        }
        countrySelected=(event)=>{
                this.setState({
                        selectedCountry: event.target.value,
                        isCountrySelected:true
                });

        }
        render() {
                if(this.state.isCountrySelected){
                        return(
                                <div className="searchSection">
                                 
                                <h3>Where do you want the flat? choose Country</h3>
                                <select name="cars" onChange={this.countrySelected}>
                                                <option disabled value selected>--Select Country--</option>
                                                {this.state.countries.map(x => (
                                                        <option value={x.countrySymbol}>{x.countryName}</option>
                                                ))
                                                }
                                        </select>
                                <div>
                         </div>

                                <div>
                                       <button>To Rent</button>
                                        <button>For Sale</button>
                                </div>
                         </div>   
                        )
                }else{
                return (
                        <div className="searchSection">
                                 
                                <h3>Where do you want the flat? choose Country</h3>
                                <select name="cars" onChange={this.countrySelected}>
                                                <option disabled value selected>--Select Country--</option>
                                                {this.state.countries.map(x => (
                                                        <option value={x.countrySymbol}>{x.countryName}</option>
                                                ))
                                                }
                                        </select>
                                <div>
                         </div>
                         </div>
                );
        }
        }
}
