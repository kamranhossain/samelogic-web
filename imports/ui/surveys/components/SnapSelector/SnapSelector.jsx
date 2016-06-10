import React, { Component, PropTypes } from 'react'

export default class SnapSelector extends Component{
    
    render(){        
        const { snapSelected, onChange }= this.props

        return(
            <div className="snap-selector">
                <div className="btn btn-file btn-disc">  
                    <h3>{snapSelected ? 'Re-Record?' : 'Tap to Record'}</h3>
                    <input type="file" onChange={(event) => onChange(event.target.files[0])} />
                    <span className="inner center-block red-bg">
                        <i className="glyphicon glyphicon-camera white" />
                    </span>
                </div>
            </div>
        )
    }
}


SnapSelector.propTypes = {
    onSend: PropTypes.func,
    onChange: PropTypes.func,
    snapSelected: PropTypes.bool
}
