import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import classNames from 'classnames'
import {reduxForm} from 'redux-form'

import EmojiSelector from '/imports/ui/surveys/components/EmojiSelector/EmojiSelector.jsx'
import SnapSelector from '/imports/ui/surveys/components/SnapSelector/SnapSelector.jsx'
import SnapPlayer from '/imports/ui/surveys/components/SnapPlayer/SnapPlayer.jsx'
import SendSnapButton from '/imports/ui/surveys/components/SendSnapButton/SendSnapButton.jsx'
import SurveyorIdentity from '/imports/ui/surveys/components/SurveyorIdentity/SurveyorIdentity.jsx'
import EmojiFeedback from '/imports/ui/surveys/components/EmojiFeedback/EmojiFeedback.jsx'

import * as SurveyActions from '/imports/ui/surveys/actions'

var form = reduxForm({
    form: 'snapForm',
    fields: ['emoji', 'snap', 'message'],
    touchOnChange: true, // react-widgets DateTimePicker doesn't blur
    validate(snap) {
        var errors = {}
        return errors
    }
})

class SnapContainer extends Component{

    render(){
        const { actions, survey, saving, emojis, errors, selectedSnap, snaps, handleSubmit } = this.props
        
        const isSnapSelected = selectedSnap.data !== null

        const snapSelectorSelectedClass = classNames({
            'col-xs-6 snap-selector-selected': isSnapSelected,
            'col-xs-12': !isSnapSelected
        })
        const sendSnapSelectedClass = classNames({
            'col-xs-6 send-snap-selected': isSnapSelected
        })
        const snapSelectorInnerSelectedClass = classNames({
            'pull-right': isSnapSelected
        })

        
        return(
            <div className="snap-container">
                <form onSubmit={handleSubmit(actions.createVideoSurveyResponse)}>
                    <div>{errors.errorMessage}</div>
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
                    <span className="sr-only font-zero">{saving ? <div>true</div> : <div>false</div>}</span>
                </form>
            </div>
        )
    }
}

SnapContainer.propTypes = {
    survey: PropTypes.shape({
        _id: PropTypes.string,
        title: PropTypes.string,
        description: PropTypes.string
    }),
    saving: PropTypes.bool.isRequired,
    emojis: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
    selectedSnap: PropTypes.object,
    snaps: PropTypes.shape({
        minDuration: PropTypes.number.isRequired,
        maxDuration: PropTypes.number.isRequired
    }).isRequired
}

const mapStateToProps = (state) => {
    return {
        survey: state.surveys.survey.current,
        saving: state.surveys.snaps.saving,
        emojis: state.surveys.snaps.emojis,
        errors: state.surveys.errors,
        selectedSnap: state.surveys.snaps.selectedSnap,
        snaps: state.surveys.snaps
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(SurveyActions, dispatch)
    }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(form(SnapContainer))