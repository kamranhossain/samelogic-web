import React, {Component, PropTypes} from 'react'

import HeaderContainer from '/imports/ui/admin/containers/dashboard/HeaderContainer'

class DashboardAppContainer extends Component {
    render() {
        const {children} = this.props

        return (
            <div className="dashboard-app-container">
                <HeaderContainer />
                {children}
            </div>
        )
    }
}

DashboardAppContainer.propTypes = {
    children: PropTypes.node
}

export default DashboardAppContainer