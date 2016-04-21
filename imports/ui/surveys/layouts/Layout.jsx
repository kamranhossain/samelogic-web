import React, { Component } from 'react'
import Footer from '/imports/ui/surveys/layouts/footer/Footer.jsx'

class Layout extends Component {
    render() {
        const {
            loading,
            children,
            survey,
            emojis
        } = this.props
        const clonedChildren = children && React.cloneElement(children, {
            survey,
            emojis
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
    dispatch: React.PropTypes.func,
    emojis: React.PropTypes.array
}

export default Layout