import React, {Component, PropTypes} from 'react'

class CampaignFeedbackList extends Component {
    render() {
        const {feedbacks} = this.props
        
        return (
            <div>
                {feedbacks.map((f) =>
                    <div key={f._id}>
                        {f._id}
                        <pre>{f.emotionData ? 'oxford results returned' : 'waiting on oxford results'}</pre>
                        <hr />
                    </div>
                )}
            </div>
        )
    }
}

CampaignFeedbackList.propTypes = {
    feedbacks: PropTypes.array.isRequired
}

export default CampaignFeedbackList