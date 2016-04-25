import React, { Component, PropTypes } from 'react'

export default class SnapPlayer extends Component{
    constructor(props){
        super(props)
        this.video = props.video
        
        this.state = {
            source: null,
            duration: 0
        }
    }
    
    componentDidMount(){
        const fileReader = new FileReader()
        fileReader.onload = (event) => {
            const audio = new Audio(event.target.result)
            audio.onloadedmetadata = () => {                
                this.setState({
                    source: event.target.result,
                    duration: audio.duration
                })
            }
        }
        fileReader.readAsDataURL(this.video)        
    }
    
    
    render(){        
        return (
            <div>
                <video src={this.state.source}></video>
                <div>Duration: {this.state.duration}</div>
            </div>
        )
    }
}

SnapPlayer.propTypes = {
    video: PropTypes.object
}
