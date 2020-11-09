import React, {Component} from 'react';
import Wrapper from "../helpers/Wrapper";

import Carousel from 'nuka-carousel';

class Home extends Component {
    render() {
        return (
            <Wrapper>
                <h1>Home</h1>
                <Carousel
                          width="100%"
                          height="450px"
                    >
                    <img src="./images/sun.jpg" alt="sun"/>
                    <img src="./images/mercury-4.jpg" alt="mercury"/>
                    <img src="./images/venus.jpg" alt="venus"/>
                    <img src="./images/earth.jpg" alt="earth"/>
                    <img src="./images/mars.jpg" alt="mars"/>
                    <img src="./images/jupiter.png" alt="jupiter"/>
                    <img src="./images/saturn.jpg" alt="saturn"/>
                    <img src="./images/uranus.jpg" alt="uranus"/>
                    <img src="./images/neptun.jpg" alt="neptun"/>
                </Carousel>
            </Wrapper>
        );
    }
}

export default Home;