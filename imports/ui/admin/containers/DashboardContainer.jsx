import { Meteor } from 'meteor/meteor'
import { createContainer } from 'meteor/react-meteor-data'

import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as AdminActions from '/imports/ui/admin/actions'
import CampaignSelector from '/imports/ui/admin/components/CampaignSelector/CampaignSelector.jsx'
import EmotionalPulseList from '/imports/ui/admin/components/EmotionalPulseList/EmotionalPulseList.jsx'
import EmotionalPulseDetail from '/imports/ui/admin/components/EmotionalPulseDetail/EmotionalPulseDetail.jsx'
import CustomerFeedbackContainer from '/imports/ui/admin/containers/CustomerFeedbackContainer.jsx'



class Dashboard extends Component{
    componentDidMount() {
        this.props.loadCampaigns()
    }

    campaignSelected(campaign){
        this.props.loadCampaignAnalytics(campaign._id)
    }
    render(){
        const { emotionSelected, campaigns, selectedEmotion } = this.props
        
        let details, emotionDisplayContainer, customerFeedbackContainer, randomDataContainer
        
        if(campaigns.current){
            const emojis = campaigns.current.analytics.emojis.map(
                (e)=> {
                    return {
                        ...e,
                        percent: campaigns.current.analytics.totalVideoProcessedResponses > 0 ? (e.count/campaigns.current.analytics.totalVideoProcessedResponses * 100) : 0
                    }
                })
            emotionDisplayContainer = (
                <EmotionalPulseList items={emojis} selected={selectedEmotion} onChange={emotionSelected} />
            )

            randomDataContainer = (
                <div>
                    The url to survey: <a href={`/surveys/${campaigns.current._id}/snap`}>Go to snap</a>
                    <br />
                    Responses: {campaigns.current.analytics.totalResponses}
                    <br />
                    Processed Responses: {campaigns.current.analytics.totalVideoProcessedResponses}
                </div>
            )
        }
        if(selectedEmotion){
            details = (
                <div>
                    <EmotionalPulseDetail emotion={selectedEmotion} />
                </div>
            )
        }
        if(campaigns.current && selectedEmotion){
            customerFeedbackContainer = (
                <CustomerFeedbackContainer />
            )
        }
        let dash = (
            <div>
                <div>Dashboard</div>
                
                <CampaignSelector campaigns={campaigns} onChange={this.campaignSelected.bind(this)} />
                
                {emotionDisplayContainer}
                
                {details}
                {customerFeedbackContainer}

                <hr />
                {randomDataContainer}
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
    loadCampaignAnalytics: PropTypes.func.isRequired,
    campaignSelected: PropTypes.func.isRequired,
    emotionSelected: PropTypes.func.isRequired,
    campaigns: PropTypes.object,
    selectedEmotion: PropTypes.object,
    emotions: PropTypes.object
    
}

const DashboardContainer = createContainer(({actions, selectedCampaign, selectedEmotion, emotions, campaigns}) => {

    return {
        loadCampaigns: actions.loadCampaigns,
        loadCampaignAnalytics: actions.loadCampaignAnalytics,
        campaigns,
        selectedCampaign,
        selectedEmotion,
        emotions,
        connected: Meteor.status().connected,
        emotionSelected: actions.emotionSelected
    }
 
}, Dashboard)

const mapStateToProps = (state) => {
    return {
        selectedEmotion: state.admin.dashboard.selectedEmotion,
        emotions: state.admin.emotions,
        campaigns: state.admin.campaigns
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(
            {...AdminActions,
                loadCampaigns: AdminActions.loadCampaignsFactory(),
                loadCampaignAnalytics: AdminActions.loadCampaignAnalyticsFactory()
            }, dispatch)
        
    }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardContainer)