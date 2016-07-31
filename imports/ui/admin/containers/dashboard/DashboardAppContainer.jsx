import React, {Component, PropTypes} from 'react'

import HeaderContainer from '/imports/ui/admin/containers/dashboard/HeaderContainer'
import SideMenuContainer from '/imports/ui/admin/containers/dashboard/SideMenuContainer'
import Footer from '/imports/ui/admin/components/Dashboard/Footer/Footer.jsx'

class DashboardAppContainer extends Component {
    render() {
        const {children} = this.props

        return (
            <div className="dashboard site-gridmenu-active site-menubar-unfold">
                <HeaderContainer />
                <SideMenuContainer />
                {children}
                <Footer />
            </div>
        )
    }
}

DashboardAppContainer.propTypes = {
    children: PropTypes.node
}

export default DashboardAppContainer