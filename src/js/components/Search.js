import React from 'react';

class Search extends React.Component {
    render() {
        return (
            <div>
                <div className="globalImg"></div>
            <div className="search">
                <form onSubmit={this.props.getHotels}>
                    <div className="row">
                        <div className="col-6">
                            <div><label for="iata"><strong>IATA code Airport</strong></label></div>
                            <div><label for="dateIn"><strong>Date in hotel</strong></label></div>
                            <div><label for="dateOut"><strong>Date out hotel</strong></label></div>
                            <div><label for="text"><strong>Radius search km</strong></label></div>
                        </div>
                        <div className="col-6">   
                            <div><input id="iata" type="text" placeholder="Code" /></div>
                            <div><input id="dateIn" type="text" placeholder="YYYY-MM-DD" /></div>
                            <div><input id="dateOut" type="text" placeholder="YYYY-MM-DD" /></div>
                            <div><input id="kmRadius" type="text" placeholder="Km" /></div>
                            <div>
                                <select id="currency">
                                    <option value="USD">USD</option>
                                    <option value="EUR">EUR</option>
                                    <option value="RUB">RUB</option>
                                </select>
                            </div>
                            <div>
                                <select id="maxPrise">
                                    <option value="max">Max prise</option>
                                    <option value="min">Min prise</option>
                                </select>
                            </div>
                        </div>
                        <button className="btn btn-success">Submit</button>
                    </div>
                </form>
            </div>
            </div>
        );
    }
}

export default Search;