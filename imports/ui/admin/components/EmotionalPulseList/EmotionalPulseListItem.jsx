import React, {Component, PropTypes} from 'react'
import classNames from 'classnames'

class EmotionalPulseListItem extends Component {
    render() {
        const {selected, value} = this.props
        
        var classes = classNames(
            'emotional-pulse-item',
            {
                'selected': selected
            }
        )
        return (
            <div className={classes} title={value.label}
                onClick={this.props.onClick.bind(this, value)}>
                <span className={value.key}></span>
                {value.percent}%
            </div>
        )
    }
}

EmotionalPulseListItem.propTypes = {
    value: PropTypes.shape({
        key: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percent: PropTypes.number.isRequired
    }).isRequired,
    selected: PropTypes.bool,
    onClick: PropTypes.func
}

export default EmotionalPulseListItem