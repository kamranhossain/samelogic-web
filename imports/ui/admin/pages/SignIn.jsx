import React, {Component, PropTypes} from 'react'
import SignInFormContainer from '/imports/ui/admin/containers/auth/SignInFormContainer'

class SignIn extends Component {
    render() {
        return (
            <div>
                <SignInFormContainer />
            </div>
        )
    }
}

SignIn.propTypes = {

}

export default SignIn