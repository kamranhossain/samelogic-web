import React, {Component, PropTypes} from 'react'

class CampaignFeedbackList extends Component {
    render() {
        const {feedbacks} = this.props
        return (
            <div>
                
            </div>
        )
    }
}

CampaignFeedbackList.propTypes = {
    feedbacks: PropTypes.array.isRequired
}

export default CampaignFeedbackList