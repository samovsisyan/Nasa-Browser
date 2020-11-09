import React, {Component} from 'react';
import Wrapper from "../helpers/Wrapper";

class SubmitNewPlanet extends Component {
    render() {
        return (
            <Wrapper>
                <div id="submit_new_planet">
                    <p>If you found new planet you can add it to our directory (Reactive forms demo)</p>


                    <form>
                        <div>
                            <input placeholder="Planet Name" type="text"/>
                            <select>
                                <option disabled="" selected="">
                                    Galaxy name
                                </option>
                                <option value="Milky Way">
                                    Milky Way
                                </option>
                                <option value="Messier 83">
                                    Messier 83
                                </option>
                                <option value="Black Eye Galaxy">
                                    Black Eye Galaxy
                                </option>
                                <option value="Pinwheel">
                                    Pinwheel
                                </option>
                                <option value="Canis Major Dwarf">
                                    Canis Major Dwarf
                                </option>
                                <option value="Somewhere else...">
                                    Somewhere else...
                                </option>
                            </select>
                            <input placeholder="Diameter (km)" type="number"/>
                            <input placeholder="Distance (mln km)" type="number"/>

                        </div>
                        <div>
                            <input placeholder="Your name"/>

                            <input placeholder="Your email"/>

                        </div>
                        <button type="submit">Submit</button>
                    </form>

                </div>
            </Wrapper>
        );
    }
}

export default SubmitNewPlanet;