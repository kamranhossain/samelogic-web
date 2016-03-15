import React, { Component } from 'react'
import Footer from 'client/imports/admin/footer/Footer'

export default class Layout extends Component {
  render() {
    return (
      <div>
        {this.props.children}
        <Footer />
      </div>
    )
  }
}
