import React, { Component, PropTypes } from 'react'

export default class SendSnapButton extends Component{
    
    render(){        
        const { onSend }= this.props
        return(
            <div className="send-snap-btn">  
                <button className="btn btn-disc" onClick={onSend}>
                    <h3>Send</h3>
                    <div className="inner center-block green-bg">
                        <i className="glyphicon glyphicon-ok white" />
                    </div>
                </button>
            </div>
        )
    }
}


SendSnapButton.propTypes = {
    onSend: PropTypes.func
}
