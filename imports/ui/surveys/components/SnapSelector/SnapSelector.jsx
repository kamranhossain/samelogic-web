import React, { Component, PropTypes } from 'react'

export default class SnapSelector extends Component{    
    constructor(props){
        super(props)
        this.onSend = props.onSend
        this.onChange = props.onChange
    }
    
    handleChange(event){
        this.onChange(event.target.files[0])
    }
    
    render(){
        return(
            <div>
                <form id="upload">
                    <input type="file" onChange={this.handleChange.bind(this)} />
                </form>
            </div>
        )
    }
}


SnapSelector.propTypes = {
    onSend: PropTypes.func,
    onChange: PropTypes.func
}
