import React, {Component, PropTypes} from 'react'
import Video from 'react-html5video'
class SnapPlayerModal extends Component {
    render() {
        const {response} = this.props
        if(response){
            return (
                <div className="snap-player-modal">
                    <div className="row">
                        <Video controls>
                            <source src={response.contentUrl} type="video/webm" />
                        </Video>
                    </div>
                </div>
            )
        }
        else{
            return null
        }
    }
}

SnapPlayerModal.propTypes = {
    response: PropTypes.object.isRequired
}

export default SnapPlayerModal