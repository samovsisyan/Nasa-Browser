import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Nearby_Asteroids from "./pages/Nearby_Asteroids";
import Astronomy_Picture_Of_The_Day from "./pages/Astronomy_Picture_Of_The_Day";
import Submit_New_Planet from "./pages/Submit_New_Planet";




class App extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/header" component={Header}/>
                        <Route path="/footer" component={Footer}/>
                        <Route path="/asteroids" component={Nearby_Asteroids}/>
                        <Route path="/apod" component={Astronomy_Picture_Of_The_Day}/>
                        <Route path="/submit-planet" component={Submit_New_Planet}/>
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;