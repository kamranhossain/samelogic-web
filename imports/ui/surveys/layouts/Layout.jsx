import React, { Component } from 'react'
import Footer from '/imports/ui/surveys/layouts/footer/Footer.jsx'

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
