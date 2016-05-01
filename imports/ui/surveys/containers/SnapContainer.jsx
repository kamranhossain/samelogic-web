import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import EmojiSelector from '/imports/ui/surveys/components/EmojiSelector/EmojiSelector.jsx'
import SnapSelector from '/imports/ui/surveys/components/SnapSelector/SnapSelector.jsx'
import SnapPlayer from '/imports/ui/surveys/components/SnapPlayer/SnapPlayer.jsx'
import SendSnapButton from '/imports/ui/surveys/components/SendSnapButton/SendSnapButton.jsx'
import SurveyorIdentity from '/imports/ui/surveys/components/SurveyorIdentity/SurveyorIdentity.jsx'

import * as SurveyActions from '/imports/ui/surveys/actions'

class SnapContainer extends Component{

    render(){
        const { actions, survey, saving, emojis, errors, selectedSnap } = this.props
        
        const isSnapSelected = selectedSnap.data !== null
        
        let snapPlayer, sendSnapButton
        
        if(isSnapSelected){
            snapPlayer = <SnapPlayer snap={selectedSnap} />
            sendSnapButton = <SendSnapButton onSend={() => actions.createVideoSurveyResponse(survey._id)} />
        }
        
        return(
            <div>
                <div>{errors.errorMessage}</div>

                <SurveyorIdentity />
                <EmojiSelector emojis={emojis} onChange={actions.emojiSelected} />
                
                {snapPlayer}      
                <SnapSelector onChange={actions.snapSelected} snapSelected={isSnapSelected} />
                {sendSnapButton}
                <span className="sr-only">{saving ? <div>true</div> : <div>false</div>}</span>
            </div>
        )
    }
}

SnapContainer.propTypes = {
    survey: PropTypes.shape({
        _id: PropTypes.string,
        title: PropTypes.string,
        description: PropTypes.string
    }),
    saving: PropTypes.bool.isRequired,
    emojis: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
    selectedSnap: PropTypes.object
}

const mapStateToProps = (state) => {
    return {
        saving: state.surveys.snaps.saving,
        emojis: state.surveys.snaps.emojis,
        errors: state.surveys.errors,
        selectedSnap: state.surveys.snaps.selectedSnap
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
)(SnapContainer)