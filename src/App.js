import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout'
import Bugerbuilder from './containers/BugerBuilder/BugerBuilder'

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Bugerbuilder />
        </Layout>
      </div>
    );
  }
}

export default App;