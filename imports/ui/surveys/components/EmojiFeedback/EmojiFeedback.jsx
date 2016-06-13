import React, { Component, PropTypes } from 'react'

export default class EmojiFeedback extends Component{
    
    render(){        
        const { emojis, value }= this.props
        
        const selectedFeedback = emojis.find((e) => e.value == value)
        
        let feedback = ''
        if(selectedFeedback)
            feedback = selectedFeedback.feedback
                
        return(
            <div className="white-space-pre small-lite-txt">
                {feedback}
            </div>
        )
    }
}


EmojiFeedback.propTypes = {
    value: PropTypes.string,
    emojis: PropTypes.arrayOf(PropTypes.shape({
        feedback: PropTypes.string.isRequired,
        value: PropTypes.number.isRequired
    }))
}
