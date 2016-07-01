import React, {Component, PropTypes} from 'react'
import FormMessages from 'redux-form-validation'

class SignInForm extends Component {

    renderError(newSignIn){
        if(newSignIn && newSignIn.error && newSignIn.error.message) {
            return (
                <div className="alert alert-danger">
                {newSignIn.error.reason ? newSignIn.error.reason : newSignIn.error.message}
                </div>
            )
        } else {
            return <span></span>
        }
    }

    render() {
        const { fields: {email, password}, handleSubmit, submitting, newSignIn} = this.props
        return (
            <div className="sign-in-form">
                Sign In Form
                <form onSubmit={handleSubmit}>
                    {this.renderError(newSignIn)}
                    <div className={`form-group ${email.touched && email.invalid ? 'has-error' : ''}`}>
                        <label className="control-label">Email</label>
                        <input type="text" className="form-control" {...email} />
                        <FormMessages className="help-block" tagName="div" field={email}>
                            <span when="required">
                                Email is required
                            </span>
                            <span when="email">
                                Please enter a valid email
                            </span>
                        </FormMessages>
                    </div>


                    <div className={`form-group ${password.touched && password.invalid ? 'has-error' : ''}`}>
                        <label className="control-label">Password</label>
                        <input type="password" className="form-control" {...password} />
                        <FormMessages className="help-block" tagName="div" field={password}>
                            <span when="required">
                                Password is required
                            </span>
                        </FormMessages>
                    </div>
                    <button type="submit" className="btn btn-primary"  disabled={submitting} >Submit</button>
                </form>
            </div>
        )
    }
}

SignInForm.propTypes = {
    fields: PropTypes.shape({
        email: PropTypes.object.isRequired,
        password: PropTypes.object.isRequired
    }).isRequired,
    handleSubmit: PropTypes.func.isRequired,
    submitting: PropTypes.bool.isRequired,
    newSignIn: PropTypes.object.isRequired
}

export default SignInForm