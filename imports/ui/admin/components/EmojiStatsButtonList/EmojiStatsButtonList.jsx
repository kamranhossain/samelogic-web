import React, {Component, PropTypes} from 'react'
import EmojiStatsButtonListItem from '/imports/ui/admin/components/EmojiStatsButtonList/EmojiStatsButtonListItem.jsx'

class EmojiStatsButtonList extends Component {
    render() {
        const {items, selected} = this.props
        let selectedKey = selected === undefined ? '' : selected.key
        return (
            <div className="container">
                
                {items.map((emotion) =>
                    <EmojiStatsButtonListItem key={emotion.emoji} value={emotion} selected={selectedKey === emotion.emoji} onClick={this.props.onChange} />
                )}
                
            </div>
        )
    }
}

EmojiStatsButtonList.propTypes = {
    items: PropTypes.object.isRequired,
    selected: PropTypes.object,
    onChange: PropTypes.func
}

export default EmojiStatsButtonList