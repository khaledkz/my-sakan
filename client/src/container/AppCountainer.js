import React, { Component } from 'react';
import Header from '../component/home/Header';
import Footer from '../component/home/Footer';
import SearchSection from '../component/home/Search'
import './css/AppCountainer.css'
import { BrowserRouter as Router, Route } from "react-router-dom";
import SingleArticle from '../component/flat/SingleFlat'

import About from '../component/cards/About';
import Contact from '../component/cards/Contact';
import More from '../component/cards/More';

export default class AppContainer extends Component {

    render() {
        return (
            <Router>
                <div>
                    <Header />

                    <Route exact path="/" component={SearchSection} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/more" component={More} />
                    <Route exact path="/contact" component={Contact} />
                    <Route exact path="/flat/:flatId" component={SingleArticle} />
                    <Footer />


                </div>
            </Router>
        )
    }
}