import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import EmojiSelector from '/imports/ui/surveys/components/EmojiSelector/EmojiSelector.jsx'
import SnapSelector from '/imports/ui/surveys/components/SnapSelector/SnapSelector.jsx'
import SnapPlayer from '/imports/ui/surveys/components/SnapPlayer/SnapPlayer.jsx'

import * as SurveyActions from '/imports/ui/surveys/actions'

class SnapContainer extends Component{

    render(){
        const { actions, survey, saving, emojis, errors, selectedSnap } = this.props
        let snapPlayer
        
        if(selectedSnap.data){
            snapPlayer = (
                <SnapPlayer snap={selectedSnap} />
            )
        }
        
        return(
            <div>
                <div>{errors.errorMessage}</div>
                <h1>Snaps</h1>
                <div>Title: {survey.title}</div>
                <div>Description: {survey.description}</div>
                
                <EmojiSelector emojis={emojis} onChange={actions.emojiSelected} />
                
                {snapPlayer}           
                <h1>File Upload</h1>
                <SnapSelector onSend={actions.createVideoSurveyResponse} onChange={actions.snapSelected} />
                <form id="upload">
                    <input type="file" onChange={(event) => actions.createVideoSurveyResponse(survey._id, event.target.files[0])} />
                </form>
                <span className="sr-only">{saving ? <div>true</div> : <div>false</div>}% Complete</span>
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