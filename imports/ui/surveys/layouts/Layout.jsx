import React, { Component } from 'react'
import Footer from '/imports/ui/surveys/layouts/footer/Footer.jsx'

class Layout extends Component {
    render() {
        const {
            loading,
            children,
            survey
        } = this.props
        const clonedChildren = children && React.cloneElement(children, {
            survey
        })
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
    children: React.PropTypes.element,
    survey: React.PropTypes.object,
    dispatch: React.PropTypes.func
}

export default Layout