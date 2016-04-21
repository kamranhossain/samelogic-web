import React, { Component } from 'react'
import { connect } from 'react-redux'

import EmojiSelector from '/imports/ui/surveys/components/EmojiSelector/EmojiSelector.jsx'

import createVideoSurveyResponse from '/imports/ui/surveys/actions/createVideoSurveyResponse'

class SnapPage extends Component{

    render(){
        const { dispatch, survey, uploading, params, emojis } = this.props

        return(
            <div>
                <h1>Snaps</h1>
                <div>Title: {survey.title}</div>
                <div>Description: {survey.description}</div>
                
                <EmojiSelector emojis={emojis} />
                
                <h1>File Upload</h1>
                <form id="upload">
                    <input type="file" onChange={(event) => dispatch(createVideoSurveyResponse(survey._id, 1, event.target.files[0]))} />
                </form>
                <span cssClass="sr-only">{uploading ? <div>true</div> : <div>false</div>}% Complete</span>
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
        dispatch
    }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SnapPage)