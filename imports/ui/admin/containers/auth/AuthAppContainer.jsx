import React, {Component, PropTypes} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { push } from 'react-router-redux'

import * as AdminActions from '/imports/ui/admin/actions'

class AuthAppContainer extends Component {
    render() {
        const {children, query, auth, redirectTo} = this.props        
        const redirect = query ? query.redirect : null

        if(auth.user){
            if(redirect){
                redirectTo(redirect)
            }
            else{
                redirectTo('admin')
            }
        }

        return (
            <div className="auth-app-container">
                {auth.isLoggingIn ? null : children}
            </div>
        )
    }
}

AuthAppContainer.propTypes = {
    children: PropTypes.node,
    query: PropTypes.object,
    auth: PropTypes.object.isRequired,
    redirectTo: PropTypes.func.isRequired
}

const mapStateToProps = (state, ownProps) => {
    return {
        query: ownProps.location.query,        
        auth: state.admin.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(AdminActions, dispatch),
        redirectTo: (redirect) => dispatch(push(redirect))
    }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthAppContainer)