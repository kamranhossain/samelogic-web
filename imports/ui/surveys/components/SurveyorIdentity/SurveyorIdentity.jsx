import React, { Component, PropTypes } from 'react'

export default class SurveyorIdentity extends Component{
    
    render(){        
        const { value }= this.props
               
        return(
            <div className="surveyor-identity">       
                <img className="photo" src={value.photoUri} title={value.name} />
                
                <div className="medium-lite-txt">{value.name}</div>
                <div className="small-lite-txt">{value.title}, {value.organisation}</div>
            </div>
        )
    }
}


SurveyorIdentity.propTypes = {
    value: PropTypes.shape({
        name: PropTypes.string,
        position: PropTypes.string,
        organisation: PropTypes.string,
        photoUri: PropTypes.string
    })
}
