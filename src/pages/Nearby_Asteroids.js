import React, {Component} from 'react';
import Wrapper from "../helpers/Wrapper";
import Pagination from "../components/Pagination";

import '../styles/pagination.css';


class NearbyAsteroids extends Component {
    render() {
        return (
            <Wrapper>
                <p>Search for Asteroids based on their closest approach date to Earth</p>
                <input className='input_date' type="date" id="start" name="trip-start"
                       value="2018-07-22"
                       min="2018-01-01" max="2018-12-31" />

                <input className='input_date' type="date" id="start" name="trip-start"
                       value="2018-07-22"
                       min="2018-01-01" max="2018-12-31" />

                <button className='button_go'>Go</button>


                <table id='asteroids_table' style={{width: "100%"}}>
                    <thead>
                    <tr>

                        <th >
                            Title
                        </th>
                        <th >
                            Distance (km)

                        </th>
                        <th >
                            Absolute Magnitude

                        </th>
                        <th >
                            Is potentially hazardous

                        </th>
                        <th >
                            Diameter (meters)

                        </th>
                    </tr>
                    </thead>
                    <tbody>

                    <tr>
                        <td>338292 (2002 UA31)</td>
                        <td>52507006.601560366</td>
                        <td>19</td>
                        <td>No</td>
                        <td>421.2646105562 - 941.9763057186</td>
                    </tr>

                    <tr>
                        <td>338292 (2002 UA31)</td>
                        <td>52507006.601560366</td>
                        <td>19</td>
                        <td>No</td>
                        <td>421.2646105562 - 941.9763057186</td>
                    </tr>

                    <tr>
                        <td>338292 (2002 UA31)</td>
                        <td>52507006.601560366</td>
                        <td>19</td>
                        <td>No</td>
                        <td>421.2646105562 - 941.9763057186</td>
                    </tr>
                    </tbody>
                </table>
<Pagination />
            </Wrapper>
        );
    }
}

export default NearbyAsteroids;