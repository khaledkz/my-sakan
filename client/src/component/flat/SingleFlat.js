import React, { Component } from 'react';
import apiClient from '../../helper/apiclient/apiClient';
import SingleFlatCard from './SingleFlatCard';
import {connect} from 'react-redux';
import './css/singleFlat.css';
import FlatAction from '../../redux/actions/flat'

class SingleFlat extends Component {

    constructor() {
        super();

        this.state = {
            flat: {}
        }
    }

    componentDidMount() {
        apiClient.GetSingleFlat(this.props.match.params.flatId).then((singleflat) => {
            FlatAction.postSingleFlat(singleflat.data)
            this.setState({
                flat: singleflat.data
            })
        });
    }
    render() {
            
        if (this.props.flat) {
 
            return (
                <SingleFlatCard
                    flatid={this.props.flat._id} briefDescription={this.props.flat.briefDescription}
                    description={this.props.flat.description.fullDescription}
                    postCode={this.props.flat.description.address.postCode}
                    flatNumber={this.props.flat.description.address.flatNumber}
                    street={this.props.flat.description.address.street} title={this.props.flat.description.title}
                    dataAvailable={this.props.flat.description.lettingInformation.dataAvailable}
                    price={this.props.flat.description.lettingInformation.price} deposit={this.props.flat.description.lettingInformation.deposit}
                    furnishing={this.props.flat.description.lettingInformation.furnishing} city={this.props.flat.description.address.city}
                    lettingType={this.props.flat.description.lettingInformation.lettingType}
                    reducedOnWebsite={this.props.flat.description.lettingInformation.reducedOnWebsite}
                />
 
            )
        } else {
            return (<h1>Looding</h1>)
        }
    }
}

const  stateToProps = (state ) => {
    return ({
         flat:state.flats.SingleFlat
    })
}
export default connect(stateToProps)(SingleFlat);