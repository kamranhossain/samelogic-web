import React, {Component, PropTypes} from 'react'
import EmotionalPulseListItem from '/imports/ui/admin/components/EmotionalPulseList/EmotionalPulseListItem.jsx'

class EmotionalPulseList extends Component {
    render() {
        const {emotions, selected} = this.props
        let selectedKey = selected === undefined ? '' : selected.key
        return (
            <div>
                {emotions.map((emotion) =>
                    <EmotionalPulseListItem key={emotion.key} value={emotion} selected={selectedKey === emotion.key} onClick={this.props.onChange} />
                )}
            </div>
        )
    }
}

EmotionalPulseList.propTypes = {
    emotions: PropTypes.array.isRequired,
    selected: PropTypes.object,
    onChange: PropTypes.func
}

export default EmotionalPulseList