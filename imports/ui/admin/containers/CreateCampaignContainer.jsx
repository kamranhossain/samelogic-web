import React, {Component, PropTypes} from 'react'
import createCampaign from '/imports/api/methods/createCampaign'

class CreateCampaignContainer extends Component {
    render() {
        const id = createCampaign.call({
            title: 'PitchIT Feedback',
            description: 'This is a demo description'
        }, (err, resp) => {
             
        })
        return (
            <div>
                Campaign Created: {id}
                <a href={`/surveys/${id}/snap`}>Go to snap</a>
            </div>
        )
    }
}

CreateCampaignContainer.propTypes = {

}

export default CreateCampaignContainer