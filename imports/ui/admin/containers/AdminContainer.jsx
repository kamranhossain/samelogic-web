import React, {Component, PropTypes} from 'react'

import { bindActionCreators } from 'redux'
import { connect }  from 'react-redux'

import * as AdminActions from '/imports/ui/admin/actions'

class AdminContainer extends Component {

    render(){
        const {children} = this.props

        return (
            <div className="admin-container">
                {children}
            </div>
        )
    }
    
}

AdminContainer.PropTypes = {
    children: PropTypes.number.isRequired
}

const mapStateToProps = (state) => {
    return {
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(AdminActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminContainer)