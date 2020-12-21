import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import "semantic-ui-css/semantic.min.css";
import Spinner from './Spinner';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            lat: null,
            long: null,
            errorMsg: ''
        };
    }

    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({
                    lat: position.coords.latitude,
                    long: position.coords.longitude,
                });
            },
            error => this.setState({errorMsg: error.message})
        );
    }

    render() {
        if(this.state.lat && !this.state.errorMsg){
            return (
                <div >
                    <SeasonDisplay lat={this.state.lat}/>
                    {/* <p className="text">Longitude: {this.state.long}</p> */}
                </div>
            )
        } else if(this.state.errorMsg && !this.state.lat){
            return (
                <div >
                    <p className="text">Error: {this.state.errorMsg}</p>
                </div>
            )
        } else{
            return <Spinner message="Please accept location request"/>
        }
    }
}


ReactDOM.render(<App />, document.getElementById('root'));