import React, { Component } from 'react'
import { connect } from 'react-redux'

import EmojiSelector from '/imports/ui/surveys/components/EmojiSelector/EmojiSelector.jsx'

import emojiSelected from '/imports/ui/surveys/actions/emojiSelected'
import createVideoSurveyResponse from '/imports/ui/surveys/actions/createVideoSurveyResponse'

class SnapPage extends Component{

    render(){
        const { createVideoSurveyResponse, emojiSelected, survey, uploading, params, emojis } = this.props

        return(
            <div>
                <h1>Snaps</h1>
                <div>Title: {survey.title}</div>
                <div>Description: {survey.description}</div>
                
                <EmojiSelector emojis={emojis} onChange={emojiSelected} />
                
                <h1>File Upload</h1>
                <form id="upload">
                    <input type="file" onChange={(event) => createVideoSurveyResponse(survey._id, 1, event.target.files[0])} />
                </form>
                <span className="sr-only">{uploading ? <div>true</div> : <div>false</div>}% Complete</span>
            </div>
        )
    }
}

SnapPage.propTypes = {
    survey: React.PropTypes.shape({
        _id: React.PropTypes.string,
        title: React.PropTypes.string,
        description: React.PropTypes.string
    }),
    emojis: React.PropTypes.array
}

const mapStateToProps = (state) => {
    return {
        uploading: state.surveys.snaps.uploading,
        emojis: state.surveys.snaps.emojis
    }
}

const mapDispatchToProps = (dispatch) => {
    return {        
        emojiSelected: (selectedEmojiValue) => dispatch(emojiSelected(selectedEmojiValue)),
        createVideoSurveyResponse: (surveyId, selectedEmoji, file) => dispatch(createVideoSurveyResponse(surveyId, selectedEmoji, file))
    }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SnapPage)