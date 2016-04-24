import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import EmojiSelector from '/imports/ui/surveys/components/EmojiSelector/EmojiSelector.jsx'

import * as SurveyActions from '/imports/ui/surveys/actions'

class SnapPage extends Component{

    render(){
        const { actions, survey, uploading, params, emojis } = this.props
        console.log(actions)
        return(
            <div>
                <h1>Snaps</h1>
                <div>Title: {survey.title}</div>
                <div>Description: {survey.description}</div>
                
                <EmojiSelector emojis={emojis} onChange={actions.emojiSelected} />
                
                <h1>File Upload</h1>
                <form id="upload">
                    <input type="file" onChange={(event) => actions.createVideoSurveyResponse(survey._id, 1, event.target.files[0])} />
                </form>
                <span className="sr-only">{uploading ? <div>true</div> : <div>false</div>}% Complete</span>
            </div>
        )
    }
}

SnapPage.propTypes = {
    survey: PropTypes.shape({
        _id: PropTypes.string,
        title: PropTypes.string,
        description: PropTypes.string
    }),
    emojis: PropTypes.array,
    actions: PropTypes.object.isRequired
}

const mapStateToProps = (state) => {
    return {
        uploading: state.surveys.snaps.uploading,
        emojis: state.surveys.snaps.emojis
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
)(SnapPage)