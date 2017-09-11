import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import MessengerExtensionsComponent from './MessengerExtensionsComponent';
import SomeComponent from './SomeComponent';
import ShopgunOffer from './ShopgunOffer';
import ShopgunCatalog from './ShopgunCatalog';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Route exact path={'/'} component={MessengerExtensionsComponent}/>
                    <Route path={'/some'} component={SomeComponent}/>
                    <Route path={'/shopgun/offers/:id'} component={ShopgunOffer}/>
                    <Route path={'/shopgun/catalogs/:id'} component={ShopgunCatalog}/>
                </div>
            </Router>
        );
    }
}

export default App;
