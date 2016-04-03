import React,{Component} from 'react'

import { Slingshot } from 'meteor/edgee:slingshot'

import { createVideoResponse } from '/imports/api/surveys/methods'

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

        uploader.send( event.target.files[0], ( err, url ) => {
            if ( err ) {
                console.error('aws error: '+ err)
            } else {
                console.log('aws success: '+ url)
            }
        })
    }
    
    render(){
        return( 
            <div>            
                <h1>File Upload</h1>
                <form id="upload">
                    <input type="file" onChange={this.upload} />
                </form>
            </div>
        )
    }
}
