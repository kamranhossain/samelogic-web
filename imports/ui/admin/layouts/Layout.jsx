import React, { Component } from 'react'
import Footer from '/imports/ui/admin/layouts/footer/Footer.jsx'

class Layout extends Component {
    render() {
        const {
            loading,
            children
        } = this.props
        const clonedChildren = children && React.cloneElement(children, {})
        return (            
            <div>
                { loading 
                    ? <div>Loading...</div>
                    : clonedChildren}
                <Footer />
            </div>
        )
    }
}

Layout.propTypes = {
    loading: React.PropTypes.bool,
    children: React.PropTypes.element
}

export default Layout