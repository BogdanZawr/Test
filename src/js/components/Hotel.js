import React from 'react';

class Hotel extends React.Component {
    // Read a README
    // getMoreRooms = async (link) => {
    //     const apiCall = await fetch(link);
    //     const data = await apiCall.json();
    //     let freeRooms = '';
    //     for (let i = 0; i < data.rooms.length; i++) {
    //         freeRooms += 'Room reservation code: ' + data.rooms[i].booking_code + '. Room total prise: ' + data.rooms[i].total_amount.amount + '. ' 
    //     }
    //     return freeRooms;
    // }

    getAllAmenities = array => {
        let amenities = '';
        for (let i = 0; i < array.length; i++) {
            amenities += array[i].description + ', ';
        }

        return amenities;
    }

    render() {
        return (
            <div className="container">
                <img className="img" src={this.props.srcImg}/>
                <div className="text">
                    <div className="hotelName"><h4>{this.props.hotelName}</h4></div>
                    <div><strong>Address: </strong>{this.props.address},  <a href={this.props.mapLink}>Google Maps</a></div>
                    <div><strong>Phone: </strong>{this.props.phone}</div>
                    <div><strong>Amenities: </strong>{this.getAllAmenities(this.props.amenities)}</div>
                    <div><strong>Room reservation id: </strong>{this.props.roomResId}</div>
                    <div><strong>Room price: </strong>{this.props.roomPrice}</div>
                </div>
                {/* <div>Free rooms:{this.getMoreRooms(this.props.moreRoomsLink).then(result => console.log(result))};</div>*/}
            </div>
        );
    }
}

export default Hotel;
