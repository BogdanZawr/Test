import React from 'react';
import { connect } from "react-redux";

import Hotel from './Hotel';

const mapStateToProps = state => ({
    hotels: state.hotels
});

class ConnectedHotelList extends React.Component {
    state = {
        page: 1,
    };
    
    getPageElements = () => {
        let newArray = [];
        const interval = {
            min: this.state.page * 10 - 10,
            max: this.state.page * 10,
        }
        for (let i = interval.min; i < interval.max; i++) {
            if (i > this.props.hotels.length - 1) {
                break;
            }
            newArray.push(this.props.hotels[i]);
        }

        return newArray;
    }

    prevPage = () => {
        if (this.state.page > 1) {
            this.setState({ page: this.state.page -= 1 });
        }
    }

    nextPage = () => {
        if (this.state.page < Math.ceil((this.props.hotels.length) / 10)) {
            this.setState({ page: this.state.page += 1 });
        }
    }
        
    render() {
            return (
                <div className='hotelList'> 
                {
                    this.getPageElements().map(hotel => 
                        <Hotel
                        srcImg={typeof (hotel.images.url) == 'undefined' ? '/images/hotel.jpg' : hotel.images.url}
                            hotelName={typeof (hotel.property_name) == 'undefined' ? 'No Name' : hotel.property_name}
                            address={typeof (hotel.address.line1) == 'undefined' ? 'No Address' : hotel.address.line1}
                            mapLink={`https://www.google.com.ua/maps/@${hotel.location.latitude},${hotel.location.longitude},15.9z/data=!10m2!1e2!2e1`}
                            phone={typeof (hotel.contacts[0].detail) == 'undefined' ? 'No Phone' : hotel.contacts[0].detail}
                            amenities={hotel.amenities}
                            moreRoomsLink={hotel._links.more_rooms_at_this_hotel.href}
                            roomPrice={hotel.total_price.amount}
                            roomResId={hotel.rooms[0].booking_code}
                        />
                    )
                }
                <div className="button">
                    <button onClick={this.prevPage}>Previous page</button>
                    {this.state.page}
                    <button onClick={this.nextPage}>Next page</button>
                </div>
             </div>
            );
    }
}

const HotelList = connect(mapStateToProps)(ConnectedHotelList);

export default HotelList;
