import React, { Component } from 'react';
import Header from '../component/home/Header';
import Footer from '../component/home/Footer';
import './css/AppCountainer.css'
export default class AppContainer extends Component{
    render(){
        return(
            <div>
                <Header />
                <Footer />   
            </div>
        )
    }
}