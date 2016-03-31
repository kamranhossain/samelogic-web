import React,{Component} from 'react'

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
        const surveyId = create.call({ 
            title : 'some title',
            description: 'some description'
        },  (err, resp) =>{
            if(err){         
                console.error(err)
            }
            else{
                console.log(resp)
            }
        })
        console.log('surveyId: ' + surveyId)
    }

    componentWillUnmount(){
        
    }
    render(){
        return <div>
        {this.state.survey.surveyId}        
        </div>
    }
}
