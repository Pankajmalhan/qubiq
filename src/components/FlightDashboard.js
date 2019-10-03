import React from 'react';
import TextInput from "./common/TextInput.js";
import FlightsList from "./FlightsList";
import FilterBy from './FilterBy.js';
export default class FlightDashboard extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            cityFrom: '',
            cityTo: '',
            skip: true,
            filterBy: null
        }
        this.onChangeHandler = this.onChangeHandler.bind(this);
    }

    /**
     * set the state value for textinput
     * @param {*} e target input
     */
    onChangeHandler(e) {
        if (!this.state.skip) {
            this.setState({
                skip: true
            })
        }
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    /**
     * On form submit handler
     */
    onSubmit = () => {
        this.setState({
            skip: false,
            filterBy: null
        })
    }

    onFilterByHandler = (value) => {
        this.setState({
            filterBy: value
        })
    }
    render() {
        return <form>
            <TextInput label='Origin City:' id='cityFrom' onChange={this.onChangeHandler} />
            <TextInput label='Destination City:' id='cityTo' onChange={this.onChangeHandler} />
            <br />
            <button type="button" onClick={this.onSubmit} disabled={!(this.state.cityFrom && this.state.cityTo)} className="btn btn-primary">Search</button>
            <br />
            <br />
            {(this.state.cityFrom && this.state.cityTo) && <FilterBy onClick={this.onFilterByHandler} />}
            <h2>Available Flights:</h2>
            <FlightsList filterBy={this.state.filterBy} cityFrom={this.state.cityFrom} cityTo={this.state.cityTo} skip={this.state.skip} />
        </form>
    }
}