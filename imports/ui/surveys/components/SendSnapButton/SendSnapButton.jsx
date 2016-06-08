import React, { Component, PropTypes } from 'react'

export default class SendSnapButton extends Component{
    
    render(){        
        const { onSend }= this.props
        return(
            <div className="btn-disc">  
                <h3>Send</h3>
                <button className="btn btn-default btn-file btn-send" onClick={onSend}>
                    &nbsp;
                </button>
            </div>
        )
    }
}


SendSnapButton.propTypes = {
    onSend: PropTypes.func
}
