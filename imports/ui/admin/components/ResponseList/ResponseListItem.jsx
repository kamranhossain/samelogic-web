import React, {Component, PropTypes} from 'react'
import pluralize from 'pluralize'
import classNames from 'classnames'
import Emojis from '/imports/api/collections/emojis'

class ResponseListItem extends Component {
    render() {
        const {selected, value} = this.props
        const emojiLabel = Emojis.get(value.emoji, 'label')
        var classes = classNames(
            'response-item',
            {
                'selected': selected
            }
        )
        return (
            <div className={classes} title={`${value.count} ${pluralize('people', value.count)} ${pluralize('are', value.count)} ${emojiLabel}`}
                onClick={this.props.onClick.bind(this, value)}>
                <h4><span className={value.emoji}></span></h4>
                {emojiLabel}
                <h2>{value.percent}%</h2>
            </div>
        )
    }
}

ResponseListItem.propTypes = {
    value: PropTypes.object,
    selected: PropTypes.bool,
    onClick: PropTypes.func
}

export default ResponseListItem