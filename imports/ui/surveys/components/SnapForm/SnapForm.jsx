import React, {Component, PropTypes} from 'react'
import classNames from 'classnames'

import EmojiSelector from '/imports/ui/surveys/components/EmojiSelector/EmojiSelector.jsx'
import SnapPlayer from '/imports/ui/surveys/components/SnapPlayer/SnapPlayer.jsx'
import SurveyorIdentity from '/imports/ui/surveys/components/SurveyorIdentity/SurveyorIdentity.jsx'

class SnapForm extends Component {

    renderError(newSnap){
        if(newSnap && newSnap.error && newSnap.error.message) {
            return (
                <div className="alert alert-danger">
                {newSnap ? newSnap.error.message : ''}
                </div>
            )
        } else {
            return <span></span>
        }
    }

    render() {
        const { asyncValidating, fields, handleSubmit, submitting, newSnap, survey, emojis } = this.props
        const { surveyId, emoji, snap, comment } = fields

        const snapSelectorSelectedClass = classNames({
            'col-xs-6 snap-selector-selected': snap.valid,
            'col-xs-12': !snap.valid
        })
        const sendSnapSelectedClass = classNames({
            'col-xs-6 send-snap-selected': snap.valid
        })
        const snapSelectorInnerSelectedClass = classNames({
            'pull-right': snap.valid
        })
        return (
            <div className="snap-form">
                {survey.current && survey.ready ?
                
                <form onSubmit={handleSubmit}>
                    {this.renderError(newSnap)}

                    <input type="hidden" {...surveyId} />
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
                                <div className="medium-lite-txt lmt lmb">Tell us about your experience in <strong>15 - 60 seconds</strong>!</div>
                            }
                            <div className="help-block">
                                {snap.touched ? snap.error : ''}
                            </div>
                        </div>
                    </div>
                    <div className="row action-button-container">
                        <div className={snapSelectorSelectedClass}>
                            <div className={snapSelectorInnerSelectedClass}>
                                <div className="btn btn-file btn-disc" disabled={submitting}> 
                                    <h3>{snap.valid ? 'Re-Record?' : 'Tap to Record'}</h3>
                                    <input type="file" {...snap} disabled={submitting}
                                        value={null} 
                                        onChange={(evt) =>{
                                            snap.onChange(evt)
                                            snap.onBlur(evt)
                                        }} 
                                    />
                                    <span className="inner center-block red-bg">
                                        <i className="glyphicon glyphicon-camera white" />
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className={sendSnapSelectedClass}>
                            {snap.valid ? 
                                <div className="pull-left" >
                                    <button type="submit" className="btn btn-disc" disabled={submitting}>
                                        <h3>Send</h3>
                                        <div className="inner center-block green-bg">
                                            <i className="glyphicon glyphicon-ok white" />
                                        </div>
                                    </button>
                                </div>
                                : null }
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
        comment: PropTypes.object.isRequired,
        surveyId: PropTypes.object.isRequired
    }),
    handleSubmit: PropTypes.func.isRequired,
    error: PropTypes.string,
    resetForm: PropTypes.func.isRequired,
    submitting: PropTypes.bool.isRequired,
    createSnap: PropTypes.func.isRequired
}

export default SnapForm