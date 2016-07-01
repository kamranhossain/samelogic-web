import React, {Component, PropTypes} from 'react'

class SignInForm extends Component {
    render() {
        const { fields: {email, password}, handleSubmit, submitting} = this.props
        return (
            <div className="sign-in-form">
                Sign In Form
                <form onSubmit={handleSubmit}>
                    <div className={`form-group ${email.touched && email.invalid ? 'has-error' : ''}`}>
                        <label className="control-label">Email</label>
                        <input type="text" className="form-control" {...email} />
                        <div className="help-block">
                            {email.touched ? email.error : ''}
                        </div>
                    </div>


                    <div className={`form-group ${password.touched && password.invalid ? 'has-error' : ''}`}>
                        <label className="control-label">Password</label>
                        <input type="password" className="form-control" {...password} />
                        <div className="help-block">
                            {password.touched ? password.error : ''}
                        </div>
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
    submitting: PropTypes.bool.isRequired
}

export default SignInForm