import React, { Component, PropTypes } from 'react'

export default class SnapPlayer extends Component{
    constructor(props){
        super(props)
        this.video = props.video
        
        this.state = {
            source: null
        }
    }
    
    componentDidMount(){
        const fileReader = new FileReader()
        fileReader.onload = (event) => {
            this.setState({source: event.target.result})
        }
        fileReader.readAsDataURL(this.video)        
    }
        
    render(){
        return (
            <div>
            <video src={this.state.source}></video>
            </div>
        )
    }
}

SnapPlayer.propTypes = {
    video: PropTypes.object
}
