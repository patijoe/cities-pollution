import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      apiResponse: ''
    }
  }

  callAPI() {
    fetch('http://localhost:9000/cities')
      .then(response => response.json())
      .then(response => this.setState({
        apiResponse: response
      }))
  };

  componentDidMount() {
    this.callAPI();
  }

  render() {
    const {apiResponse} = this.state;
    console.log('---------', apiResponse);

    return (
      <div className="App">
        {apiResponse && apiResponse.map(item => {
          return(
            <div key={item.id}>
              <p>{item.id}</p>
              <p>{item.name}</p>
            </div>     
          );}
        )}
      </div>
    );
  }
}
    
    
export default App;
