import React, { Component } from 'react'
import Footer from '/imports/ui/admin/layouts/footer/Footer.jsx'

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
