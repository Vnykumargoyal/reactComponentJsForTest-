import React from 'react';

class SearchBar extends React.Component {
    onInputChange = (event) => {
        console.log(event.target.value );
    }

    render() {
        return (
            <div className="ui sagment">
                <from className="ui form">
                    <div className="feild">
                        <label>Image Search</label>
                        <input type="text" onChange={this.onInputChange}/>
                    </div>
                </from>
            </div>
        )
    }
}

export default SearchBar;