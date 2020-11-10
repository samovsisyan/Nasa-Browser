import React, {Component} from 'react';
import Wrapper from "../helpers/Wrapper";

import '../styles/pagination.css';
import {actionsAsteroids} from "../store/actions/asteroids";
import {connect} from "react-redux";

import PropTypes from 'prop-types';
import _ from 'lodash';
import Pagination from "../components/Pagination";


class NearbyAsteroids extends Component {
    static propTypes = {
        actionsApod: PropTypes.func,
    }


    constructor(props) {
        super(props);
        this.state = {
            startDate: '',
            endDate: '',
            arr: []
        };
    }



    componentDidMount() {
        this.props.actionsAsteroids()
    }


    handleChangeStart = (e) => {
        this.setState({
            startDate: e.target.value,
        });
    }

    handleChangeEnd = (e) => {
        this.setState({
            endDate: e.target.value,
        });
    }

    handleClick = () => {
        this.props.actionsAsteroids(this.state.startDate, this.state.endDate)
    }




    render() {
        const result = _.values(this.props.asteroidsData.near_earth_objects);
        let arr = [];
        for (let i = 0; i < result.length; i++) {
            for (let j = 0; j < result[i].length; j++) {
                arr.push(result[i][j]);
            }
        }
        // console.log('arr arr arr arr......... arr', arr)
        // console.log('this.props.asteroidsData', this.props.asteroidsData.near_earth_objects)
        // console.log('obj obj obj obj obj', Object.assign({}, this.props.asteroidsData.near_earth_objects))
        return (
            <Wrapper>
                <p>Search for Asteroids based on their closest approach date to Earth</p>
                <input className='input_date' type="date" id="start" name="trip-start"
                       value="" onChange={this.handleChangeStart}/>

                <input className='input_date' type="date" id="start" name="trip-start"
                       value="" onChange={this.handleChangeEnd}/>

                <button className='button_go' onClick={this.handleClick}>Go</button>


                <table id='asteroids_table' style={{width: "100%"}}>
                    <thead>
                    <tr>

                        <th>
                            Title
                        </th>
                        <th>
                            Distance (km)

                        </th>
                        <th>
                            Absolute Magnitude

                        </th>
                        <th>
                            Is potentially hazardous

                        </th>
                        <th>
                            Diameter (meters)

                        </th>
                    </tr>
                    </thead>
                    {_.map(arr, (data) => (
                        <tbody>
                        <tr>
                            <td>{data.name}</td>
                            <td>{data.estimated_diameter.kilometers.estimated_diameter_min} -
                                {data.estimated_diameter.kilometers.estimated_diameter_max}</td>
                            <td>{data.absolute_magnitude_h}</td>
                            <td>No</td>
                            <td>{data.estimated_diameter.meters.estimated_diameter_min} -
                                {data.estimated_diameter.meters.estimated_diameter_max}</td>
                        </tr>
                        </tbody>
                    ))}
                </table>
                <Pagination arr={arr}/>
                {/*<div id='pagination'>*/}
                {/*    {this.state.postData}*/}
                {/*    <ReactPaginate*/}
                {/*        previousLabel={"prev"}*/}
                {/*        nextLabel={"next"}*/}
                {/*        breakLabel={"..."}*/}
                {/*        breakClassName={"break-me"}*/}
                {/*        pageCount={this.state.pageCount}*/}
                {/*        marginPagesDisplayed={2}*/}
                {/*        pageRangeDisplayed={5}*/}
                {/*        onPageChange={this.handlePageClick}*/}
                {/*        containerClassName={"pagination"}*/}
                {/*        subContainerClassName={"pages pagination"}*/}
                {/*        activeClassName={"active"}/>*/}
                {/*</div>*/}

            </Wrapper>
        );
    }
}

// export default NearbyAsteroids;
const mapStateToProps = (state) => ({
    asteroidsData: state.asteroids.asteroidsData,
});

const mapDispatchToProps = {
    actionsAsteroids,
};
const AsteroidsContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(NearbyAsteroids);

export default AsteroidsContainer;