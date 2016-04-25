import React, { Component, PropTypes } from 'react'

export default class SnapPlayer extends Component{
    constructor(props){
        super(props)
        this.video = props.video
    }
    
    init(){
        
    }
        
    render(){
        return (
            <div>
            Snap Player
            </div>
        )
    }
}

SnapPlayer.propTypes = {
    video: PropTypes.object
}
