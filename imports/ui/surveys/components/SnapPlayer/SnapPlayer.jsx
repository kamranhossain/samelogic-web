import React, { Component, PropTypes } from 'react'

export default class SnapPlayer extends Component{
    constructor(props){
        super(props)
        this.snap = props.snap
        
        this.state = {
            source: null,
            duration: 0
        }
    }
    
    componentDidMount(){
        const fileReader = new FileReader()
        fileReader.onload = (event) => {        
            this.setState({
                source: event.target.result,
                duration: this.snap.duration
            })
        }
        fileReader.readAsDataURL(this.snap.data)        
    }    
    
    render(){        
        return (
            <div className="vidContainerInner">
                <video className="SnapVideo" src={this.state.source}>
                </video>
                <div className="SnapDuration"><b>{this.state.duration}s</b></div>
            </div>   
        )
    }
}

SnapPlayer.propTypes = {
    snap: PropTypes.object
}
