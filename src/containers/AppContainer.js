import React, {Component} from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

import 'antd/dist/antd.less'
import '../style/base'
import '../style/App'

export default class AppContainer extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className='wrap center'>
          {this.props.children}
        </div>
        <Footer />
      </div>
    )
  }
}
