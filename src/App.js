import React, { Component } from 'react';
import Layout from './components/Layout/Layout'
import TeslaRange from './containers/TeslaRange/TeslaRange'
class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <TeslaRange></TeslaRange>
        </Layout>
      </div>
    );
  }
}

export default App;
