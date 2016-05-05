import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as SurveyActions from '/imports/ui/surveys/actions'

class DashboardContainer extends Component{

    render(){
        
        return(
            <div>
                <div>Dashboard</div>
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