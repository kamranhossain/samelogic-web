import React, {Component, PropTypes} from 'react'

class EmotionalPulseDetail extends Component {
    render() {
        
        const {emotion} = this.props
        
        return (
            <div>
                <h2>{emotion.amount} Customers</h2>
                <h3>are {emotion.label}</h3>
            </div>
        )
    }
}

EmotionalPulseDetail.propTypes = {
    emotion: PropTypes.shape({
        key: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percent: PropTypes.number.isRequired,
        amount: PropTypes.number.isRequired
    }).isRequired
}

export default EmotionalPulseDetail