import React, {Component, PropTypes} from 'react'

import CreateCampaignContainer from '/imports/ui/admin/containers/CreateCampaignContainer.jsx'

class CreateCampaign extends Component {
    render() {
        return (
            <div>
                <CreateCampaignContainer />
            </div>
        )
    }
}

CreateCampaign.propTypes = {

}

export default CreateCampaign