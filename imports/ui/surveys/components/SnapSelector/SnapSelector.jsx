import React, { Component, PropTypes } from 'react'

export default class SnapSelector extends Component{    
    constructor(props){
        super(props)
        this.onSend = props.onSend
    }
    render(){
        return(
            <div>
            
            </div>
        )
    }
}


SnapSelector.propTypes = {
    onSend: PropTypes.func
}
