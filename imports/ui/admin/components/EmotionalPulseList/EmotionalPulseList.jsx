import React, {Component, PropTypes} from 'react'
import EmotionalPulseListItem from '/imports/ui/admin/components/EmotionalPulseList/EmotionalPulseListItem.jsx'

class EmotionalPulseList extends Component {
    render() {
        const {items, selected} = this.props
        let selectedKey = selected === undefined ? '' : selected.key
        return (
            <div className="">
                
                {items.map((emotion) =>
                    <EmotionalPulseListItem key={emotion.emoji} value={emotion} selected={selectedKey === emotion.emoji} onClick={this.props.onChange} />
                )}
                
            </div>
        )
    }
}

EmotionalPulseList.propTypes = {
    items: PropTypes.object.isRequired,
    selected: PropTypes.object,
    onChange: PropTypes.func
}

export default EmotionalPulseList