import React, {Component, PropTypes} from 'react'
import classNames from 'classnames'

import EmojiSelector from '/imports/ui/surveys/components/EmojiSelector/EmojiSelector.jsx'
import SnapSelector from '/imports/ui/surveys/components/SnapSelector/SnapSelector.jsx'
import SnapPlayer from '/imports/ui/surveys/components/SnapPlayer/SnapPlayer.jsx'
import SurveyorIdentity from '/imports/ui/surveys/components/SurveyorIdentity/SurveyorIdentity.jsx'

class SnapForm extends Component {

    render() {
        const { asyncValidating, fields, handleSubmit, submitting, submitSnap, actions, newSnap, survey, emojis } = this.props
        const { emoji, snap, comment } = fields
        return (
            <div className="snap-form">
                {survey.current && survey.ready ?
                <form>
                    <div className="row">
                        <h3 className="medium-lite-txt"><b>{survey.current.title}</b></h3>
                    </div>
                    <div className="row">
                        <SurveyorIdentity />
                    </div>                    
                    <div className="row emoji-selector-container">
                        <EmojiSelector options={emojis.items} {...emoji} />
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            {snap.valid ? 
                                <SnapPlayer snap={snap.value[0]} /> : 
                                <div className="medium-lite-txt lmt lmb">Tell us about your experience in <strong>15 - 16 seconds</strong>!</div>
                            }
                        </div>
                    </div>
                    <div className="row action-button-container">

                        <div className="snap-selector">
                            <div className="btn btn-file btn-disc"> 
                                <input type="file" {...snap} value={null} />
                                <span className="inner center-block red-bg">
                                    <i className="glyphicon glyphicon-camera white" />
                                </span>
                            </div>
                        </div>

                    </div>
                </form> : null
                }
            </div>
        )
    }
}

SnapForm.propTypes = {
    fields: PropTypes.shape({
        emoji: PropTypes.object.isRequired,
        snap: PropTypes.object.isRequired,
        comment: PropTypes.object.isRequired
    }),
    handleSubmit: PropTypes.func.isRequired,
    error: PropTypes.string,
    resetForm: PropTypes.func.isRequired,
    submitting: PropTypes.bool.isRequired,
    submitSnap: PropTypes.func.isRequired
}

export default SnapForm