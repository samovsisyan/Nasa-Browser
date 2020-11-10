import React, {Component} from 'react';
import Wrapper from "../helpers/Wrapper";
import Carousel from "nuka-carousel";
import {connect} from "react-redux";
import {actionsApod} from "../store/actions/apod";
import PropTypes from 'prop-types';

class AstronomyPictureOfTheDay extends Component {
    static propTypes = {
        actionsApod: PropTypes.func,
    }

    constructor(props) {
        super(props);
        this.state = {
            date: ''
        }
    }

    componentDidMount() {
        this.props.actionsApod()
    }


    handleChange = (e) => {
        this.setState({
            date: e.target.value,
        });
    }

    handleClick = () => {
        this.props.actionsApod(this.state.date)
    }

    render() {
        return (
            <Wrapper>
                <p>Each day a different image or photograph of our fascinating universe is featured, along with a
                    brief explanation written by a professional astronomer.</p>
                <input className='input_date' type="date" id="start" name="trip-start"
                       value=""
                       onChange={this.handleChange}/>

                <button onClick={this.handleClick} className='button_go'>Go</button>

                <div id='apod_info'>
                    <h5>{this.props.apodData.title}</h5>
                    <p>{this.props.apodData.explanation}</p>
                    <img src={this.props.apodData.url}/>
                </div>

            </Wrapper>
        );
    }
}

const mapStateToProps = (state) => ({
    apodData: state.apod.apodData,
});

const mapDispatchToProps = {
    actionsApod,
};
const ApodContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(AstronomyPictureOfTheDay);

export default ApodContainer;


