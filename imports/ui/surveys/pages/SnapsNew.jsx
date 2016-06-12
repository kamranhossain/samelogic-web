import React, {Component} from 'react'
import HeaderContainer from '/imports/ui/surveys/containers/HeaderContainer'
import SnapFormContainer from '/imports/ui/surveys/containers/SnapFormContainer'

class SnapsNew extends Component {
    render() {
        return (
            <div>
                <HeaderContainer />
                <SnapFormContainer />
            </div>
        )
    }
}

export default SnapsNew