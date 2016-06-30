import React, {Component, PropTypes} from 'react'
import pluralize from 'pluralize'
import Emojis from '/imports/api/collections/emojis'

class EmotionalPulseDetail extends Component {
    render() {
        
        const {emotion} = this.props
        
        const emojiLabel = Emojis.get(emotion.emoji, 'label')
        return (
            <div>
                <h2>{`${emotion.count} ${pluralize('Customer', emotion.count)}`}</h2>
                <h3>{`${pluralize('is', emotion.count)} ${emojiLabel}`}</h3>
            </div>
        )
    }
}

EmotionalPulseDetail.propTypes = {
    emotion: PropTypes.shape({
        emoji: PropTypes.number.isRequired,
        percent: PropTypes.number.isRequired,
        amount: PropTypes.number.isRequired
    }).isRequired
}

export default EmotionalPulseDetail