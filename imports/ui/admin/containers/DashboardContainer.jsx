import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as AdminActions from '/imports/ui/admin/actions'
import CampaignSelector from '/imports/ui/admin/components/CampaignSelector/CampaignSelector.jsx'
import EmotionalPulseList from '/imports/ui/admin/components/EmotionalPulseList/EmotionalPulseList.jsx'

class DashboardContainer extends Component{

    render(){
        const { actions, selectedCampaign, campaigns, selectedEmotion, emotions } = this.props
        
        return(
            <div>
                <div>Dashboard</div>
                
                <CampaignSelector campaigns={campaigns} selected={selectedCampaign} onChange={actions.campaignSelected} />
                
                <EmotionalPulseList emotions={emotions} selected={selectedEmotion} onChange={actions.emotionSelected} />
            </div>
        )
    }
}

DashboardContainer.propTypes = {
    selectedCampaign: PropTypes.shape({
        _id: PropTypes.string.required,
        title: PropTypes.string.required
    }),
    actions: PropTypes.object.isRequired,
    campaigns: PropTypes.array,
    selectedEmotion: PropTypes.object,
    emotions: PropTypes.array
}

const mapStateToProps = (state) => {
    return {
        selectedCampaign: state.admin.dashboard.selectedCampaign,
        campaigns: state.admin.dashboard.campaigns,
        selectedEmotion: state.admin.dashboard.selectedEmotion,
        emotions: state.admin.dashboard.emotions
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(AdminActions, dispatch)
    }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardContainer)