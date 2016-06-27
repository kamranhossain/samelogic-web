import React, {Component, PropTypes} from 'react'
import classNames from 'classnames'
import Emojis from '/imports/api/collections/emojis'

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
            <div className={classes} title={value.emoji}
                onClick={this.props.onClick.bind(this, value)}>
                <span className={value.emoji}></span>
                {Emojis.get(value.emoji, 'label')}-{value.count}
            </div>
        )
    }
}

EmotionalPulseListItem.propTypes = {
    value: PropTypes.object,
    selected: PropTypes.bool,
    onClick: PropTypes.func
}

export default EmotionalPulseListItem