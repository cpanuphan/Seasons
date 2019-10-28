import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { lat: null, errorMessage: '' };

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        // Always called setState!!
        this.setState({ lat: position.coords.latitude });
      },
      (error) => {
        this.setState({ errorMessage: error.message });
      }
    );
  }

  render() {

    return (
      <div>
        Latitude: { this.state.lat } <br />
        { this.state.errorMessage ? Error: {this.state.errorMessage} : "" }
      </div>
      // <br />
      //{ this.state.errorMessage ? <p style="color: red;">{this.state.errorMessage}</p> : "" }
    )
  }
}

ReactDOM.render(
  <App />, 
  document.querySelector('#root')
);