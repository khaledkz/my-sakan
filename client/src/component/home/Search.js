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
                        selectedCountry: '',
                        isCountrySelected: false,
                        searchOption: '',
                        isSearchOptionSelected: false
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
        countrySelected = (event) => {
                this.setState({
                        selectedCountry: event.target.value,
                        isCountrySelected: true
                });

        }
        searchToRent = () => {
                this.setState({
                        searchOption: 'toRent',
                        isSearchOptionSelected: true


                });

        }
        searchForSale = () => {
                this.setState({
                        searchOption: 'forSale',
                        isSearchOptionSelected: true
                });

        }

        render() {
                if (this.state.isCountrySelected) {
                        if (this.state.isSearchOptionSelected) {

                                return (
                                        <div className="searchSection">

                                                Search Option: {this.state.searchOption}
                                                Seach Country: {this.state.selectedCountry}
                                        </div>
                                )
                        } else {
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
                                                <div>
                                                        <button onClick={this.searchToRent}>To Rent</button>
                                                        <button onClick={this.searchForSale}>For Sale</button>
                                                </div>
                                                {this.state.searchOption}
                                        </div>
                                )

                        }
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
                                                <button onClick={this.searchToRent}>To Rent</button>
                                                <button onClick={this.searchForSale}>For Sale</button>
                                        </div>

                                        {this.state.searchOption}

                                </div>
                        )
                } else {
                        return (
                                <div className="searchSection">

                                        <h3>Where do you want the flat? choose Country</h3>

                                        <select name="cars" onChange={this.countrySelected}>
                                                <option disabled value selected>--Select Country--</option>
                                                {
                                                        this.state.countries.map(x => (
                                                        <option value={x.countrySymbol}>{x.countryName}</option>
                                                        ))
                                                }
                                        </select>

                                </div>
                        );
                }
        }
}
