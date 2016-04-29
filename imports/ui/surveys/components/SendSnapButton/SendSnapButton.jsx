import React, { Component, PropTypes } from 'react'

export default class SendSnapButton extends Component{
    
    render(){        
        const { onSend }= this.props
        return(
            <button onClick={onSend}>
                Send
            </button>
        )
    }
}


SendSnapButton.propTypes = {
    onSend: PropTypes.func
}
