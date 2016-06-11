import React, {Component, PropTypes} from 'react'
import classNames from 'classnames'

import EmojiSelector from '/imports/ui/surveys/components/EmojiSelector/EmojiSelector.jsx'
import SnapSelector from '/imports/ui/surveys/components/SnapSelector/SnapSelector.jsx'
import SnapPlayer from '/imports/ui/surveys/components/SnapPlayer/SnapPlayer.jsx'
import SurveyorIdentity from '/imports/ui/surveys/components/SurveyorIdentity/SurveyorIdentity.jsx'
import EmojiFeedback from '/imports/ui/surveys/components/EmojiFeedback/EmojiFeedback.jsx'

class SnapForm extends Component {

    render() {
        const { asyncValidating, fields: { emoji, snap, comment }, survey, handleSubmit, submitting, submitSnap } = this.props

        return (
            <div className="snap-form">
                <form onSubmit={handleSubmit(submitSnap)}>
                    <div className="row">
                        <h3 className="medium-lite-txt"><b>{survey.title}</b></h3>
                    </div>
                    <div className="row">
                        <SurveyorIdentity />
                    </div>
                    <div className="row emoji-selector-container">
                        <EmojiSelector emojis={emojis} onChange={actions.emojiSelected} />
                    </div>
                    <div className="row">
                        <EmojiFeedback emojis={emojis} />
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            {isSnapSelected ? 
                                <SnapPlayer snap={selectedSnap} /> :
                                <div className="medium-lite-txt lmt lmb">Tell us about your experience in <strong>{snaps.minDuration} - {snaps.maxDuration} seconds</strong>!</div>
                            }
                        </div>
                    </div>
                    <div className="row action-button-container">
                        <div className={snapSelectorSelectedClass}>
                            <div className={snapSelectorInnerSelectedClass} >
                                <SnapSelector onChange={actions.snapSelected} snapSelected={isSnapSelected} />
                            </div>
                        </div>

                        <div className={sendSnapSelectedClass}>
                        {isSnapSelected ? 
                            <div className="pull-left" >
                                <div className="send-snap-btn">  
                                    <button type="submit" className="btn btn-disc">
                                        <h3>Send</h3>
                                        <div className="inner center-block green-bg">
                                            <i className="glyphicon glyphicon-ok white" />
                                        </div>
                                    </button>
                                </div>
                            </div>
                            : null }
                        </div>
                    </div>
                </form>
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