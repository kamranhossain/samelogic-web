import React, {Component, PropTypes} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import SurveyNotFound from '/imports/ui/surveys/components/SurveyNotFound/SurveyNotFound.jsx'
import HeaderContainer from '/imports/ui/surveys/containers/HeaderContainer'
import * as SurveyActions from '/imports/ui/surveys/actions'

class SurveyAppContainer extends Component {
    componentDidMount() {
        const {params} = this.props
        const {surveyId} = params
        this.props.actions.loadSurvey(surveyId)
    }
    render() {
        const {children, survey} = this.props
        return (
            <div className="container">
                
                <HeaderContainer />
                {survey.ready ?
                     <div>
                        {survey.current ? children : <SurveyNotFound /> }
                     </div>
                : null}
            </div>
        )
    }
}

SurveyAppContainer.propTypes = {
    children: PropTypes.node,
    survey: PropTypes.shape({
        ready: PropTypes.bool.isRequired,
        current: PropTypes.object.isRequired
    }),
    params: PropTypes.shape({
        surveyId: PropTypes.string.isRequired
    }).isRequired,
    actions: PropTypes.shape({
        loadSurvey: PropTypes.func.isRequired
    }).isRequired
}

const mapStateToProps = (state) => {
    return {
        notification: state.app.notification,
        survey: state.surveys.survey
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(
            {...SurveyActions,
                loadSurvey: SurveyActions.loadSurveyFactory()
            }, dispatch)
        
    }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SurveyAppContainer)