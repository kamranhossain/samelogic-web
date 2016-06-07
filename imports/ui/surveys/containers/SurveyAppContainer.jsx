import React, {Component, PropTypes} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Crouton from 'react-crouton'

import * as SurveyActions from '/imports/ui/surveys/actions'

class SurveyAppContainer extends Component {
    componentDidMount() {
        const {params} = this.props
        const {surveyId} = params
        this.props.actions.loadSurvey(surveyId)
    }
    render() {
        const {children} = this.props
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
        return (
            <div>
                <Crouton
                    id={notificationData.id}
                    type={notificationData.type}
                    message={notificationData.message}
                    onDismiss={notificationData.onDismiss}
                    buttons={notificationData.buttons}
                    hidden={notificationData.hidden}
                    timeout={notificationData.timeout}
                    autoMiss={notificationData.autoMiss}/>    
            </div>
        )
    }
}

SurveyAppContainer.propTypes = {
    children: PropTypes.node
}

const mapStateToProps = (state) => {
    return {
        notification: state.app.notification
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