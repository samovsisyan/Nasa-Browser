import React, {Component} from 'react';
import Wrapper from "../helpers/Wrapper";

import '../styles/pagination.css';
import {actionsAsteroids} from "../store/actions/asteroids";
import {connect} from "react-redux";

import PropTypes from 'prop-types';
import _ from 'lodash';
import ReactPaginate from "react-paginate";



class NearbyAsteroids extends Component {
    static propTypes = {
        actionsApod: PropTypes.func,
    }


    constructor(props) {
        super(props);
        this.state = {
            startDate: '',
            endDate: '',
            arr: [],



            offset: 0,
            data: [],
            perPage: 3,
            currentPage: 0
        };
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



    receivedData = () => {
        const result = _.values(this.props.asteroidsData.near_earth_objects);
        let arr = [];
        for (let i = 0; i < result.length; i++) {

            for (let j = 0; j < result[i].length; j++) {
                const element = {}
                element.name = result[i][j].name;
                element.absolute = result[i][j].absolute_magnitude_h;
                element.feet_min = result[i][j].estimated_diameter.feet.estimated_diameter_min;
                element.feet_max = result[i][j].estimated_diameter.feet.estimated_diameter_max;
                element.potentially	 = 'No';
                element.meters_min = result[i][j].estimated_diameter.meters.estimated_diameter_max;
                element.meters_max = result[i][j].estimated_diameter.meters.estimated_diameter_max;
                arr.push(element);
           }
        }

                const data = arr;
                const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
                const postData = slice.map(data => <>
                    {/*<p>{pd.name}</p>*/}
                    <tr key={data.meters_min}>
                        <td>{data.name}</td>
                        <td>{data.feet_min} -
                            {data.feet_max}</td>
                        <td>{data.absolute}</td>
                        <td>{data.potentially}</td>
                        <td>{data.meters_min} -
                            {data.meters_max}</td>
                    </tr>
                </>)

                this.setState({
                    pageCount: Math.ceil(data.length / this.state.perPage),

                    postData
                })
    }
    handlePageClick = (e) => {
        const selectedPage = e.selected;
        const offset = selectedPage * this.state.perPage;

        this.setState({
            currentPage: selectedPage,
            offset: offset
        }, () => {
            this.receivedData()
        });

    };

    componentDidMount() {
        this.receivedData()
    }




    render() {

        console.log(11111111, this.state.postData)
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
                    <tbody id="pagination">
                    {this.state.postData}
                    </tbody>
                </table>
                <ReactPaginate
                    previousLabel={"prev"}
                    nextLabel={"next"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={this.state.pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={this.handlePageClick}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"}/>

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