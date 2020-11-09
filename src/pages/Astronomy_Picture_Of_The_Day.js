import React, {Component} from 'react';
import Wrapper from "../helpers/Wrapper";
import Carousel from "nuka-carousel";

class AstronomyPictureOfTheDay extends Component {
    render() {
        return (
            <Wrapper>
                <p>Each day a different image or photograph of our fascinating universe is featured, along with a brief explanation written by a professional astronomer.</p>
                <input className='input_date' type="date" id="start" name="trip-start"
                       value="2018-07-22"
                       min="2018-01-01" max="2018-12-31" />

                       <button className='button_go'>Go</button>


                <div id='apod_info'>
                    <h5>North of Orion's Belt</h5>
                    <p>Bright stars, interstellar clouds of dust and glowing nebulae fill this
                        cosmic scene, a skyscape just north of Orion's belt. Close to the plane of our Milky Way Galaxy,
                        the wide field view spans just under 5 degrees or about 10 full moons on the sky. Striking
                        bluish M78, a reflection nebula, is at the lower right. M78's tint is due to dust preferentially
                        reflecting the blue light of hot, young stars. In colorful contrast, the red swath of glowing
                        hydrogen gas streaming through the center is part of the region's faint but extensive emission
                        nebula known as Barnard's Loop. At upper left, a dark dust cloud forms a prominent silhouette
                        cataloged as LDN 1622. While M78 and the complex Barnard's Loop are some 1,500 light-years away,
                        LDN 1622 is likely to be much closer, only about 500 light-years distant from our fair planet
                        Earth.</p>
                    <img src="./images/earth.jpg" alt="earth"/>
                </div>

            </Wrapper>
        );
    }
}

export default AstronomyPictureOfTheDay;