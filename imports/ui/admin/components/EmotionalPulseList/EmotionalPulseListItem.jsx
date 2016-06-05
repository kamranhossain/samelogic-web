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
            <div className={classes} title={value.key}
                onClick={this.props.onClick.bind(this, value)}>
                <span className={value.key}></span>
                {value.key}-{value.count}
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