import React, {Component, PropTypes} from 'react'

class DashboardAppContainer extends Component {
    render() {
        const {children} = this.props

        return (
            <div>
                {children}
            </div>
        )
    }
}

DashboardAppContainer.propTypes = {
    children: PropTypes.node
}

export default DashboardAppContainer