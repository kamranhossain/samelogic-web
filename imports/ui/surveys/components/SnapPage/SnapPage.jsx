import React, { Component } from 'react'

import createVideoSurveyResponse from '/imports/ui/surveys/actions/createVideoSurveyResponse'

class SnapPage extends Component{
    constructor(props){
        super(props)
        
        this.state = {
            title: this.props.survey.title,
            description: this.props.survey.description
        }
    }
    
    componentWillMount(){
        
    }
    render(){
        const { dispatch } = this.props
        const surveyId = this.props.survey._id
        return(
            <div>
                <h1>Snaps</h1>
                <div>Title: {this.state.title}</div>
                <div>Description: {this.state.description}</div>
                
                <h1>File Upload</h1>
                <form id="upload">
                    <input type="file" onChange={(event) => dispatch(createVideoSurveyResponse(surveyId, 1, event.target.files[0]))} />
                </form>
                <span cssClass="sr-only">{this.state.progress}% Complete</span>
            </div>
        )
    }
}

SnapPage.propTypes = {
    survey: React.PropTypes.shape({
        _id: React.PropTypes.string,
        title: React.PropTypes.string,
        description: React.PropTypes.string
    })
}

export default SnapPage