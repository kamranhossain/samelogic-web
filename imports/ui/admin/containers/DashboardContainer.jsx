import { Meteor } from 'meteor/meteor'
import { createContainer } from 'meteor/react-meteor-data'

import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { Campaigns } from '/imports/api/collections/campaigns'

import * as AdminActions from '/imports/ui/admin/actions'
import CampaignSelector from '/imports/ui/admin/components/CampaignSelector/CampaignSelector.jsx'
import EmotionalPulseList from '/imports/ui/admin/components/EmotionalPulseList/EmotionalPulseList.jsx'
import EmotionalPulseDetail from '/imports/ui/admin/components/EmotionalPulseDetail/EmotionalPulseDetail.jsx'
import CustomerFeedbackContainer from '/imports/ui/admin/containers/CustomerFeedbackContainer.jsx'



class Dashboard extends Component{
    componentDidMount() {
        this.props.loadCampaigns('')
    }
    render(){
        const { campaignSelected,emotionSelected, selectedCampaign, campaigns, selectedEmotion, emotions, } = this.props
        
        let details, customerFeedbackContainer
        
        if(selectedEmotion){
            details = (
                <div>
                    <EmotionalPulseDetail emotion={selectedEmotion} />
                </div>
            )
        }
        if(selectedCampaign && selectedEmotion){
            customerFeedbackContainer = (
                <CustomerFeedbackContainer />
            )
        }
        let dash = (
            <div>
                <div>Dashboard</div>
                
                <CampaignSelector campaigns={campaigns} selected={selectedCampaign} onChange={campaignSelected} />
                
                <EmotionalPulseList emotions={emotions} selected={selectedEmotion} onChange={emotionSelected} />
                
                {details}
                {customerFeedbackContainer}
            </div> 
        )
        return(
            <div>
                    {dash}
            </div>
        )
    }
}

Dashboard.propTypes = {
    selectedCampaign: PropTypes.shape({
        _id: PropTypes.string.required,
        title: PropTypes.string.required
    }),
    loadCampaigns: PropTypes.func.isRequired,
    campaignSelected: PropTypes.func.isRequired,
    emotionSelected: PropTypes.func.isRequired,
    campaigns: PropTypes.array,
    selectedEmotion: PropTypes.object,
    emotions: PropTypes.array
    
}

const DashboardContainer = createContainer(({actions, selectedCampaign, selectedEmotion, emotions, campaigns}) => {

    return {
        loadCampaigns: actions.loadCampaigns,
        campaigns,
        selectedCampaign,
        selectedEmotion,
        emotions,
        connected: Meteor.status().connected,
        campaignSelected: actions.campaignSelected,
        emotionSelected: actions.emotionSelected
    }
 
}, Dashboard)

const mapStateToProps = (state) => {
    return {
        selectedCampaign: state.admin.dashboard.selectedCampaign,
        selectedEmotion: state.admin.dashboard.selectedEmotion,
        emotions: state.admin.dashboard.emotions,
        campaigns: state.admin.campaigns.items
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(
            {...AdminActions,
                loadCampaigns: AdminActions.loadCampaignsFactory()
            }, dispatch)
        
    }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardContainer)