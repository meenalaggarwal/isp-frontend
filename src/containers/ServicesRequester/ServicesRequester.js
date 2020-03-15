import React, { Component } from 'react';

import Providers from '../../components/Providers/Providers';

class RoomsRequester extends Component {


  //function which is called the first time the component loads
  componentDidMount() {
    this.props.getISPsData();
  }

  render() {
    return (
      <Providers providers={this.props.providers} getProviderDetails={this.props.getISPDetails}></Providers>
    );
  }
}

export default RoomsRequester;
