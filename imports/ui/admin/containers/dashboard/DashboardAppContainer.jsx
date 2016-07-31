import React, {Component, PropTypes} from 'react'

import HeaderContainer from '/imports/ui/admin/containers/dashboard/HeaderContainer'
import SideMenuContainer from '/imports/ui/admin/containers/dashboard/SideMenuContainer'

class DashboardAppContainer extends Component {
    render() {
        const {children} = this.props

        return (
            <div className="dashboard-app-container">
                <HeaderContainer />
                <SideMenuContainer />
                <div className="container">
                    {children}
                </div>
            </div>
        )
    }
}

DashboardAppContainer.propTypes = {
    children: PropTypes.node
}

export default DashboardAppContainer