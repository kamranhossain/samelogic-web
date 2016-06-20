import React, {Component, PropTypes} from 'react'
import SnapFormContainer from '/imports/ui/surveys/containers/SnapFormContainer'

export default class SnapsNew extends Component {
    render() {
        const { location: {query}} = this.props
        const selectedEmoji = query ? query.e : 0
        return (
            <div>
                <SnapFormContainer selectedEmoji={selectedEmoji} />
            </div>
        )
    }
}

SnapsNew.propTypes = {
    location: PropTypes.shape({
        query: PropTypes.object.isRequired
    }).isRequired
}