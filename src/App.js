import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import logo from './assests/logo.png';
import { BrowserRouter as Router} from 'react-router-dom';

import Main from './components/Main/Main';

class App extends Component {

  state = {
    providers: [],
    search: '',
    providerDetails: {},
    total: 0
  };

  getISPsData() {
    axios.get('https://isp-biz2credit.herokuapp.com/isps')
    .then(response => {
      var providers = this.state.providers.concat(response.data);
      this.setState({providers: providers, total: providers.length});
    });
  }

  getISPDetails(ispId) {
    axios.get('https://isp-biz2credit.herokuapp.com/isps/' + ispId)
    .then(response => {
      this.setState({providerDetails: response.data});
    }); 
  }

  getISPsDataWithInputSearch(e) {
    if (e.key === 'Enter') {
      var value = e.target.value;
      axios.get('https://isp-biz2credit.herokuapp.com/isps?input=' + value)
      .then(response => {
        this.setState({providers: response.data, search: value});
      });  
    }
  }

  onPriceChanged(e) {
    var url = 'https://isp-biz2credit.herokuapp.com/isps?sort=price';
    if (this.state.search) {
      url += '&input=' +  this.state.search;
    }
    axios.get(url)
    .then(response => {
      this.setState({providers: response.data});
    });
  }

  onRateChanged(e) {
    var url = 'https://isp-biz2credit.herokuapp.com/isps?sort=rate'; 
    if (this.state.search) {
      url += '&input=' +  this.state.search;
    }
    axios.get(url)
    .then(response => {
      this.setState({providers: response.data});
    });
  }

  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} alt="logo" className="App-logo"/>
            <div className="provider-total">Total ISP: {this.state.total}</div>
          </header>
          <Main 
            providers={this.state.providers}
            getISPsDataWithInputSearch={this.getISPsDataWithInputSearch.bind(this)} 
            getISPDetails={this.getISPDetails.bind(this)}
            getISPsData={this.getISPsData.bind(this)}
            onRateChanged={this.onRateChanged.bind(this)}
            onPriceChanged={this.onPriceChanged.bind(this)}
            providerDetails={this.state.providerDetails}></Main>
      </div>
    </Router>
    );
  }
}

export default App;
