import React, { Component, PropTypes } from 'react'

export default class SurveyCompleted extends Component{
    
    render(){        
        const { survey } = this.props       
        return(
            <div className="col-md-12 text-center">                            
                <h2>Thanks for Completing!</h2>
                <p><img src="/img/party_emoji.png"/></p>
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
