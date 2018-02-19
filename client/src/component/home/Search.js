 import React, { Component } from 'react';
import './css/search.css'
export default class SearchSection extends  Component{

    render(){
        return(
                <div className="searchSection">
                        <h3>Where do you want the flat? choose Country</h3>
                        <div>
                                drop menu show all countries available
                        </div>
                         
                        <div>
                                After Select The countru input field appear to ask for location
                                <button>To Rent</button>
                                <button>For Sale</button>
                        </div>
                </div>
        );
    }
}
