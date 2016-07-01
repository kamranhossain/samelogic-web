import React, {Component, PropTypes} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as AdminActions from '/imports/ui/admin/actions'

class AuthAppContainer extends Component {
    render() {
        const {children} = this.props
        return (
            <div className="auth-app-container">
                {children}
            </div>
        )
    }
}

AuthAppContainer.propTypes = {
    children: PropTypes.node
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthAppContainer)