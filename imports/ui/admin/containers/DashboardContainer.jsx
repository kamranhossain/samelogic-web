import { Meteor } from 'meteor/meteor'
import { createContainer } from 'meteor/react-meteor-data'

import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router'
import { Modal } from 'react-bootstrap'

import * as AdminActions from '/imports/ui/admin/actions'
import CampaignSelector from '/imports/ui/admin/components/CampaignSelector/CampaignSelector.jsx'
import EmojiStatsButtonList from '/imports/ui/admin/components/EmojiStatsButtonList/EmojiStatsButtonList.jsx'
import EmotionalPulseDetail from '/imports/ui/admin/components/EmotionalPulseDetail/EmotionalPulseDetail.jsx'
import CampaignFeedbackList from '/imports/ui/admin/components/CampaignFeedbackList/CampaignFeedbackList.jsx'
import SnapPlayerModal from '/imports/ui/admin/components/SnapPlayerModal/SnapPlayerModal.jsx'



class Dashboard extends Component{
    componentDidMount() {
        this.props.loadCampaigns()
    }

    campaignSelected(campaign){
        this.props.loadCampaignAnalytics(campaign._id)
    }
    emojiSelected(emoji){
        this.props.emojiStatsSelected(emoji)
        this.props.loadResponses(this.props.campaigns.current._id, emoji.emoji)
    }
    unSelectResponse(){
        this.props.actions.responseSelected(null)
    }
    render(){
        const { campaigns, responses, responseSelected } = this.props
        
        let details, emotionDisplayContainer, customerFeedbackContainer, randomDataContainer
        
        if(campaigns.current){
            const emojis = campaigns.current.analytics.emojis.map(
                (e)=> {
                    return {
                        ...e,
                        percent: campaigns.current.analytics.totalResponses > 0 ? (e.count/campaigns.current.analytics.totalResponses * 100) : 0
                    }
                })
            emotionDisplayContainer = (
                <EmojiStatsButtonList items={emojis} selected={campaigns.emojiStats} onChange={this.emojiSelected.bind(this)} />
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


            if(campaigns.emojiStats){
                details = (
                    <div>
                        <EmotionalPulseDetail emotion={campaigns.emojiStats} />
                    </div>
                )
            }
            if(responses.items){
                customerFeedbackContainer = (
                    <CampaignFeedbackList feedbacks={responses} responseSelected={responseSelected} />
                )
            }
        }
        let dash = (
            <div>
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

                    <Modal show={responses.current != undefined} onHide={this.unSelectResponse.bind(this)}>
                        <Modal.Header closeButton>
                            <Modal.Title>Response Analytics</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <SnapPlayerModal response={responses.current} />
                        </Modal.Body>
                    </Modal>
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
    loadResponses: PropTypes.func.isRequired,
    emojiStatsSelected: PropTypes.func.isRequired,
    campaigns: PropTypes.object,
    responses: PropTypes.object,
    actions: PropTypes.object
}

const DashboardContainer = createContainer(({actions, selectedCampaign, campaigns, responses}) => {

    return {
        loadCampaigns: actions.loadCampaigns,
        loadCampaignAnalytics: actions.loadCampaignAnalytics,
        loadResponses: actions.loadResponses,
        responseSelected: actions.responseSelected,
        emojiStatsSelected: actions.emojiStatsSelected,
        actions,
        campaigns,
        responses,
        selectedCampaign,
        connected: Meteor.status().connected
    }
 
}, Dashboard)

const mapStateToProps = (state) => {
    return {
        campaigns: state.admin.campaigns,
        responses: state.admin.responses
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(
            {...AdminActions,
                loadCampaigns: AdminActions.loadCampaignsFactory(),
                loadCampaignAnalytics: AdminActions.loadCampaignAnalyticsFactory(),
                loadResponses: AdminActions.loadResponsesFactory()
            }, dispatch)
        
    }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardContainer)