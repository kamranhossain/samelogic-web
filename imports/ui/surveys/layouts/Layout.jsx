import React, { Component } from 'react'
import Footer from '/imports/ui/surveys/layouts/footer/Footer.jsx'

export default class Layout extends Component {
    render() {
        const {
            children
        } = this.props
        return (            
            <div>
                {children}
                <Footer />
            </div>
        )
    }
}
