import React, { Component, PropTypes } from 'react'

export default class EmojiFeedback extends Component{
    
    render(){        
        const { emojis }= this.props
        
        const selectedFeedback = emojis.data.find((e) => e.selected)
        
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
    emojis: PropTypes.shape({
        data: PropTypes.array,
        selectedValue: PropTypes.number
    })
}
