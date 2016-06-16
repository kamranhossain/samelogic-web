import React, { Component, PropTypes } from 'react'

export default class SnapPlayer extends Component{
    render(){
        const videoUrl = URL.createObjectURL(this.props.snap)
        
        return (
            <div className="snap-player">
                <video src={videoUrl} ref="video" preload="metadata">
                    <p>Your browser does not support the HTML5 Video element.</p>
                </video>                
            </div>
        )
    }
}

SnapPlayer.propTypes = {
    snap: PropTypes.object
}
