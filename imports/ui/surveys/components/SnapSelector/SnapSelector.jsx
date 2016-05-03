import React, { Component, PropTypes } from 'react'

export default class SnapSelector extends Component{
    
    render(){        
        const { snapSelected, onChange }= this.props
        
        let input =  <input type="file" onChange={(event) => onChange(event.target.files[0])} />
        
        
        let button = ( 
            <div className="btn-disc">  
                <h3>Tap to Record</h3>     
                <span className="btn btn-default btn-file btn-record">
                    {input}
                </span>
            </div>
        )
        
        
        if(snapSelected){
            button = (
                <span className="btn btn-default btn-file">
                    Retake?
                    {input}
                </span>
            )
        }
        
        return(
            <div>
                {button}
            </div>
        )
    }
}


SnapSelector.propTypes = {
    onSend: PropTypes.func,
    onChange: PropTypes.func,
    snapSelected: PropTypes.bool
}
