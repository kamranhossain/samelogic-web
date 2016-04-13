import React, { Component } from 'react'

class SnapPage extends Component{
    constructor(props){
        super(props)
        
        this.state = {
            title: this.props.survey.title,
            description: this.props.survey.description
        }
    }
    
    componentWillMount(){
        
    }
    
    render(){
        return(
            <div>
                <h1>Snaps</h1>
                <div>Title: {this.state.title}</div>
                <div>Description: {this.state.description}</div>
            </div>
        )
    }
}

SnapPage.propTypes = {
    survey: React.PropTypes.shape({
        title: React.PropTypes.string,
        description: React.PropTypes.string
    })
}

export default SnapPage