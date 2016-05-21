import React, {Component, PropTypes} from 'react'
import create from '/imports/api/surveys/methods/create'

class CreateCampaignContainer extends Component {
    render() {
        const id = create.call({
            title: 'This is a demo Title',
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