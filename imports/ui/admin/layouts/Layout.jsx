import React, { Component } from 'react'
import Footer from '/imports/ui/admin/layouts/footer/Footer.jsx'
import Header from '/imports/ui/admin/layouts/header/Header.jsx'

export default class Layout extends Component {
    render() {
        return (
          <div>
            <Header />
              {this.props.children}
            <Footer />
          </div>
        )
    }
}
