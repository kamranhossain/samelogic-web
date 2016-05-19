import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as SurveyActions from '/imports/ui/surveys/actions'
import CampaignSelector from '/imports/ui/admin/components/CampaignSelector/CampaignSelector.jsx'

class DashboardContainer extends Component{

    render(){
        
        const campaigns = [{_id: '1', title: 'Customer Calls'}, {_id:'2', title: 'Email Sentiments'}]
        
        return(
            <div>
                <div>Dashboard</div>
                
                <CampaignSelector campaigns={campaigns} selectedCampaign={campaigns[0]} />
            </div>
        )
    }
}

DashboardContainer.propTypes = {
}

const mapStateToProps = (state) => {
    return {
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(SurveyActions, dispatch)
    }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardContainer)