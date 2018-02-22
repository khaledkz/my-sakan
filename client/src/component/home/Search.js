import React, { Component } from 'react';
import './css/search.css'
import ApiClient from '../../helper/apiclient/apiClient';
import FlatBrief from '../flat/flatBrief';

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
                        isSearchOptionSelected: false,
                        flats: []
                }
        }

        componentDidMount() {
                ApiClient.GetCountries().then((getContries) => {
                        this.setState({
                                countries: getContries.data
                        });
                });
        }
        refreshPage = () => {
                        this.setState({
                                 
                                title: 'khaled',
                                selectedCountry: '',
                                isCountrySelected: false,
                                searchOption: '',
                                isSearchOptionSelected: false,
                                flats: []     
                        })
        }
        countrySelected = (event) => {
                this.setState({
                        selectedCountry: event.target.value,
                        isCountrySelected: true
                });
        }

        searchToRent = () => {
                ApiClient.GetFlatCountryAndRentOrSale(this.state.selectedCountry, 'rent').then((getFlats) => {
                        console.log(getFlats)
                        this.setState({
                                isSearchOptionSelected: true,
                                flats: getFlats.data


                        });
                });


        }
        searchForSale = () => {
                ApiClient.GetFlatCountryAndRentOrSale(this.state.selectedCountry, 'sale').then((getFlats) => {
                        this.setState({
                                isSearchOptionSelected: true,
                                flats: getFlats.data


                        });
                });

        }

        render() {
                if (this.state.isCountrySelected) {
                        if (this.state.isSearchOptionSelected) {

                                return (
                                        <div className="searchSection">
                                                <button onClick={this.refreshPage}>Another Search</button>

                                                {this.state.flats.map((x, i) => (
                                                        <div key={i}>
                                                                {/* Title:<h1>{x.description.title}</h1>
                                                        City:<h2>{x.description.address.city}</h2>
                                                        Flat number:<h2>{x.description.address.flatNumber}</h2>
                                                        Post Code:<h2>{x.description.address.postCode}</h2>
                                                        Street:<h2>{x.description.address.street}</h2>
                                                        Option:<h3>{x.rentOrSale}</h3>
                                                        letting information
                                                        {x.description.lettingInformation.dataAvailable}
                                                        {x.description.lettingInformation.deposit}
                                                        {x.description.lettingInformation.price}
                                                        {x.description.lettingInformation.reducedOnWebsite} */}
                                                                <FlatBrief briefDescription={x.briefDescription} description={x.description.fullDescription} postCode={x.description.address.postCode} flatNumber={x.description.address.flatNumber} street={x.description.address.street} title={x.description.title} price={x.description.lettingInformation.price} />
                                                        </div>
                                                ))}

                                        </div>
                                )
                        } else {
                                return (
                                        <div className="searchSection">

                                                <h3>Where do you want the flat? choose Country</h3>
                                                <select onChange={this.countrySelected}>
                                                        <option style={{ color: 'grey' }}>--Select Country--</option>
                                                        {this.state.countries.map((x, i) => (
                                                                <option key={i} value={x._id}>{x.countryName}</option>
                                                        ))}
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

                } else {
                        return (
                                <div className="searchSection">

                                        <h3>Where do you want the flat? choose Country</h3>

                                        <select onChange={this.countrySelected}>
                                                <option style={{ color: 'grey' }}>--Select Country--</option>
                                                {this.state.countries.map((x, i) => (
                                                        <option key={i} value={x._id}>{x.countryName}</option>
                                                ))}
                                        </select>
                                </div>
                        );
                }
        }
}
