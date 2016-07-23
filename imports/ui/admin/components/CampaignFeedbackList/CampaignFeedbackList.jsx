import React, {Component, PropTypes} from 'react'
import { Button } from 'react-bootstrap'

class CampaignFeedbackList extends Component {
    render() {
        const {feedbacks, responseSelected} = this.props
        
        return (
            <div>
                {feedbacks.items.map((f) =>
                    <div key={f._id}>
                        {f._id}
                        <pre>{f.emotionData ? 'oxford results returned' : 'waiting on oxford results'}</pre>
                        <br />
                        
                        <hr />

                        <Button bsStyle="primary" onClick={() => responseSelected(f)}>Watch Video</Button>
                    </div>
                )}
            </div>
        )
    }
}

CampaignFeedbackList.propTypes = {
    feedbacks: PropTypes.array.isRequired,
    responseSelected: PropTypes.func.isRequired
}

export default CampaignFeedbackList