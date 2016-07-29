import React, {Component, PropTypes} from 'react'
import {Panel, Alert, Row, Col} from 'react-bootstrap'
import Video from 'react-html5video'
class SnapPlayerModal extends Component {
    renderAnalyticsRow() {
        const {response: {emotionData}} = this.props
        if(emotionData){
            const emotionSeries = getEmotionSeriesFromEvents(emotionData.emotionalEvents)
            return (
                <div>
                    <Panel header="Emotions Expressed">
                        <ul className="list-inline">
                            { emotionSeries.map(f =>
                                <li title={`${(f.duration/emotionData.timescale).toFixed(1)}% of video is ${f.emotion}`}>
                                    {f.emotion}
                                </li>
                            )}
                        </ul>
                    </Panel>
                </div>
            )
        } else {
            return (
                <div>
                    <Alert bsStyle="warning">
                        <strong>Hold tight!</strong> Analytics is still running on this response.
                    </Alert>
                </div>
            )
        }
    }
    render() {
        const {response} = this.props

        if(response){
            return (
                <div className="snap-player-modal">
                    <Row>
                        <Col xs={12}>
                            <Video controls>
                                <source src={response.contentUrl} type="video/webm" />
                            </Video>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12}>
                            {this.renderAnalyticsRow()}
                        </Col>
                    </Row>
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

function getEmotionSeriesFromEvents(events) {
    var result = []
    events.reduce(function (res, value) {
        if (!res[value.emotion]) {
            res[value.emotion] = {
                duration: 0,
                emotion: value.emotion
            }
            result.push(res[value.emotion])
        }
        res[value.emotion].duration += value.duration
        return res
    }, {})
    return result
}