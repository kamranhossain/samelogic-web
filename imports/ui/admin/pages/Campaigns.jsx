import React, {Component, PropTypes} from 'react'
import { Link } from 'react-router'

import CampaignsContainer from '/imports/ui/admin/containers/dashboard/CampaignsContainer'

class Campaigns extends Component {
    render() {
        return (
            <div>
                                
                <Link to="/admin/campaigns/create">Create Campaign</Link>
                <br />
                <CampaignsContainer />
            </div>
        )
    }
}

Campaigns.propTypes = {

}

export default Campaigns