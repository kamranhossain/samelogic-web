import { reduxForm } from 'redux-form'
import { push } from 'react-router-redux'

import SignInForm from '/imports/ui/admin/components/SignInForm/SignInForm.jsx'
/*import {
  createPost, createPostSuccess, createPostFailure, resetNewPost, validatePostFields, validatePostFieldsSuccess, validatePostFieldsFailure
} from '/imports/ui/surveys/actions/snaps' */
import * as AdminActions from '/imports/ui/admin/actions'


//Client side validation
function validate(values) {
    const errors = {}

    if (!values.email || values.email.trim() === '') {
        errors.email = 'Enter email'
    }
    if (!values.password || !values.password.trim() === '') {
        errors.password = 'Enter password'
    }

    return errors
}

//For any field errors upon submission (i.e. not instant check)
const validateAndSignIn = (values, dispatch) => {

    return new Promise((resolve, reject) => {
        dispatch(AdminActions.loginWithPassword(values.email, values.password))
            .then((response) => {
                dispatch(AdminActions.createSnapSuccess(response))
                dispatch(push(`/surveys/${values.surveyId}/completed`))
                resolve()
            })
            .catch(e => {
                dispatch(AdminActions.createSnapFailure(e))
                reject(e)
            })
    })
}



const mapDispatchToProps = () => {
    return {
        signIn: validateAndSignIn
    }
}


function mapStateToProps(state, ownProps) {
    return {
        user: state.admin.auth.user
    }
}


// connect: first argument is mapStateToProps, 2nd is mapDispatchToProps
// reduxForm: 1st is form config, 2nd is mapStateToProps, 3rd is mapDispatchToProps
export default reduxForm({
    form: 'SignInForm',
    fields: ['email', 'password'],
    validate,
    onSubmit: validateAndSignIn
}, mapStateToProps, mapDispatchToProps)(SignInForm)