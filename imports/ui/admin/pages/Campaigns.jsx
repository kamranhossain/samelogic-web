import React, {Component, PropTypes} from 'react'
import { Link } from 'react-router'

class Campaigns extends Component {
    render() {
        return (
            <div>                
                <Link to="/admin/campaigns/create">Create Campaign</Link>
            </div>
        )
    }
}

Campaigns.propTypes = {

}

export default Campaigns