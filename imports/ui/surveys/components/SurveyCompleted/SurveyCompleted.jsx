import React, { Component, PropTypes } from 'react'

export default class SurveyCompleted extends Component{
    
    render(){        
        const { survey } = this.props       
        return(
            <div>                            
                Thanks for completing
            </div>
        )
    }
}


SurveyCompleted.propTypes = {
    survey: PropTypes.shape({
        _id: PropTypes.string,
        title: PropTypes.string,
        description: PropTypes.string
    })
}
