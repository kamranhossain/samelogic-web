import React, { Component, PropTypes } from 'react'

export default class SurveyorIdentity extends Component{
    
    render(){        
        const { identity }= this.props
               
        return(
            <div>                            
                <div className="SenderPic">
                </div>
                
                <div className="medium-lite-txt">Bianca Welds</div>
                <div className="small-lite-txt">Program Manager, CMIP</div>
            </div>
        )
    }
}


SurveyorIdentity.propTypes = {
    identity: PropTypes.shape({
        name: PropTypes.string,
        position: PropTypes.string,
        company: PropTypes.string,
        photoUrl: PropTypes.string
    })
}
