import React, { Component } from 'react';
import PackageJSONForm from '../../Components/PackageJSON/PackageJSONForm';

class PackageJSONContainer extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return ( <PackageJSONForm /> )

  }
}

export default PackageJSONContainer;
