import React, {Component} from 'react'

// TODO: Change this and implement a dashboard home container
import DashboardHomeContainer from '/imports/ui/admin/containers/DashboardContainer.jsx'

class Dashboard extends Component {
    render() {
        return (
            <div>
                <div className="page animsition">
                    <div className="page-header">
                        <h1 className="page-title">Analytics Overview</h1>
                    </div>
                    <div className="page-content container-fluid">
                        <DashboardHomeContainer />
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard