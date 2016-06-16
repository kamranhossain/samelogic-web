import React, { Component, PropTypes } from 'react'

export default class SnapPlayer extends Component{
    constructor(props){
        super(props)

        this.prevSnap = null
        this.state = {
            source: null,
            duration: 0
        }
    }

    videoMetaDataLoaded(event){
        console.log(event)
    }

    render(){       
        if(this.prevSnap != this.props.snap){
            const fileReader = new FileReader()
            fileReader.onload = (event) => { 
                this.prevSnap = this.props.snap       
                this.setState({
                    source: event.target.result
                })
            }
            fileReader.readAsDataURL(this.props.snap) 
        }
        return (
            <div className="snap-player">
                <video src={this.state.source} preload="metadata" loadeddata={(event) => console.log(event)}>
                    <p>Your browser does not support the HTML5 Video element.</p>
                </video>
                <div className="SnapDuration"><b>{this.state.duration}s</b></div>
            </div>
        )
    }
}

SnapPlayer.propTypes = {
    snap: PropTypes.object
}
