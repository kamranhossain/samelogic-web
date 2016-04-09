import React,{Component} from 'react'
import {Tracker} from 'meteor/tracker'

import { Slingshot } from 'meteor/edgee:slingshot'

import { createVideoResponse, updateVideoResponseUrl } from '/imports/api/surveys/methods'

export default class AdminAppContainer extends Component{    
    constructor(props){
        super(props)

        this.state = {
            survey: {
                surveyId: '',
                title: ''
            }
        }
    }


    componentDidMount(){

    }

    componentWillUnmount(){
        
    }
    
    upload(event){
        let self = this
        
        const responseId = createVideoResponse.call({
            surveyId: 'test'
        }, (err, resp) =>{
            if ( err ) {
                console.error('mongo error: '+ err)
            } else {
                console.log('mongo success: '+ resp)
            }
        })
        
        const uploader = new Slingshot.Upload( 'uploadSurveyVideo', {surveyResponseId: responseId} )
        let computation = Tracker.autorun(function () {
            self.setState({progress: Math.ceil(uploader.progress()) * 100})
        })
        uploader.send( event.target.files[0], ( err, url ) => {
            computation.stop()
            if ( err ) {
                console.error('aws error: '+ err)
            } else {
                updateVideoResponseUrl.call({
                    surveyResponseId: responseId,
                    url: url
                }, (err, resp) =>{
                    if ( err ) {
                        console.error('mongo update error: '+ err)
                    } else {
                        console.log('mongo update success: '+ resp)
                    }
                })
                console.log('aws success: '+ url)
            }
        })
    
    }
    
    render(){
        return( 
            <div>            
                <h1>File Upload</h1>
                <form id="upload">
                    <input type="file" onChange={this.upload.bind(this)} />
                </form>
                <span cssClass="sr-only">{this.state.progress}% Complete</span>
            </div>
        )
    }
}
