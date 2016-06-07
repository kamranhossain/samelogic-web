import React, {Component, PropTypes} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Crouton from 'react-crouton'
import ProgressBar from 'react-progress-bar-plus'

import * as SurveyActions from '/imports/ui/surveys/actions'

class SurveyAppContainer extends Component {
    componentDidMount() {
        const {params} = this.props
        const {surveyId} = params
        this.props.actions.loadSurvey(surveyId)
    }
    render() {
        const {children, survey} = this.props
        const loading = !survey.ready
        const notificationData = {
            id: Date.now(),
            type: 'error',
            message: 'Hello React-Crouton',
            autoMiss: true || false,
            onDismiss: null,
            buttons: [],
            hidden: false,
            timeout: 2000
        }
        const details = loading ? null : children

        return (
            <div>
                <ProgressBar onTop={true} autoIncrement={true} percent={loading ? 0 : 100} />
                <Crouton
                    id={notificationData.id}
                    type={notificationData.type}
                    message={notificationData.message}
                    onDismiss={notificationData.onDismiss}
                    buttons={notificationData.buttons}
                    hidden={notificationData.hidden}
                    timeout={notificationData.timeout}
                    autoMiss={notificationData.autoMiss}/>

                {details}
            </div>
        )
    }
}

SurveyAppContainer.propTypes = {
    children: PropTypes.node,
    survey: PropTypes.shape({
        ready: PropTypes.bool.isRequired,
        current: PropTypes.object.isRequired
    })
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