import React,{Component} from 'react'

import { Slingshot } from 'meteor/edgee:slingshot'

import { create } from '/imports/api/surveys/methods'

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
        const uploader = new Slingshot.Upload( 'uploadSurveyVideo', {surveyResponseId: 'test'} )

        uploader.send( event.target.files[0], ( error, url ) => {
            if ( error ) {
                console.error('error: '+ error)
            } else {
                console.log('success: '+ url)
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
