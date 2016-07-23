import React, {Component, PropTypes} from 'react'
import ResponseListItem from '/imports/ui/admin/components/ResponseList/ResponseListItem.jsx'

class ResponseList extends Component {
    render() {
        const {items, selected} = this.props
        let selectedKey = selected === undefined ? '' : selected.key
        return (
            <div className="container">
                
                {items.map((emotion) =>
                    <ResponseListItem key={emotion.emoji} value={emotion} selected={selectedKey === emotion.emoji} onClick={this.props.onChange} />
                )}
                
            </div>
        )
    }
}

ResponseList.propTypes = {
    items: PropTypes.object.isRequired,
    selected: PropTypes.object,
    onChange: PropTypes.func
}

export default ResponseList