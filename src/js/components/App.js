import React from 'react';

import Search from './Search';
import { connect } from "react-redux";
import { editHotels } from "../actions/index";
import HotelList from './HotelList';

const mapDispatchToProps = dispatch => ({
    editHotels: hotel => dispatch(editHotels(hotel))
});

const apiKey = 'KdfV6YDrTA4aA2LLbec0h4OkTSGSVcAK';

class ConnectedApp extends React.Component {
    state = {
        renderHotels: false, 
    }

    getHotels = async e => {
        e.preventDefault();
        const inputs = {
            iata: e.target.elements.iata.value,
            dateIn: e.target.elements.dateIn.value,
            dateOut: e.target.elements.dateOut.value,
            kmRadius: e.target.elements.kmRadius.value,
            currency: e.target.elements.currency.value,
            maxPrise: e.target.elements.maxPrise.value,
        };

        let apiCall = await fetch(`https://api.sandbox.amadeus.com/v1.2/hotels/search-airport?apikey=${apiKey}&location=${inputs.iata}&check_in=${inputs.dateIn}&check_out=${inputs.dateOut}&radius=${inputs.kmRadius}&currency=${inputs.currency}`);
        let data = await apiCall.json();
        this.priceFilter(inputs.maxPrise, data);
        this.setState({ renderHotels: true });
    }

    priceFilter = (maxPrise, data) => {
        if (maxPrise === 'max') {
            const array = data.results.map(item => (item));
            array.reverse();
            this.props.editHotels(array);
        } else {
            this.props.editHotels(data.results);
        }
    }

    render() {
        return (
            <div>
                <Search
                    getHotels={this.getHotels}
                />
                {this.state.renderHotels &&
                    <HotelList />
                }
            </div>
        );
    }
}

const App = connect(null, mapDispatchToProps)(ConnectedApp);

export default App;
