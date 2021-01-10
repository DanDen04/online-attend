import React, {Component} from 'react'
import './App.css';
// import Auth from './containers/Auth/Auth'
import Layout from './hoc/Layout/Layout'
import List from './containers/List/List'

class App extends Component {
  render() {
    return (
      <Layout>
        {/* <Auth /> */}
        <List />
      </Layout>
    )
  }
}

export default App;