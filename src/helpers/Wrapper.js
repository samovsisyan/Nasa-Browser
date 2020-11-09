import React, {Component} from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";

class Wrapper extends Component {
    render() {
        return (
            <div>
                <Header />
                {this.props.children}
                <Footer />
            </div>
        );
    }
}

export default Wrapper;