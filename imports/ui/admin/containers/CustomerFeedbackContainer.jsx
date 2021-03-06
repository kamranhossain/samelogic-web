import { Meteor } from 'meteor/meteor'
import { createContainer } from 'meteor/react-meteor-data'

import React, { Component, PropTypes } from 'react'
import { connect }  from 'react-redux'

import { Responses } from '/imports/api/collections/responses'


import CampaignFeedbackList from '/imports/ui/admin/components/CampaignFeedbackList/CampaignFeedbackList.jsx'

class CustomerFeedback extends Component{

    render(){
        const { loading, feedbacks } = this.props

        let dash = (
            <CampaignFeedbackList feedbacks={feedbacks} />
        )
        return(
            <div>
                { loading 
                    ? <div>Loading...</div>
                    : dash}
            </div>
        )
    }
}

CustomerFeedback.propTypes = {
    loading: PropTypes.bool,
    feedbacks: PropTypes.array
}

const CustomerFeedbackContainer = createContainer(({selectedCampaign, selectedEmotion}) => {

    const responseHandle = Meteor.subscribe('responses.admin', selectedCampaign._id, selectedEmotion.key)
    const loading = !responseHandle.ready()
    const feedbacks = Responses.find({campaignId: selectedCampaign._id}).fetch()
    
    
    if(!loading && !feedbacks){
        // error here
        alert('error, campaign not found')
    }
    return {
        loading,
        feedbacks,
        connected: Meteor.status().connected
    }
    
}, CustomerFeedback)

const mapStateToProps = (state) => {
    return {
        selectedCampaign: state.admin.dashboard.selectedCampaign,
        selectedEmotion: state.admin.dashboard.selectedEmotion
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomerFeedbackContainer)