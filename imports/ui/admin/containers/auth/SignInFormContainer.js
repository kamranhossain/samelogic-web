import { reduxForm } from 'redux-form'
import {generateValidation} from 'redux-form-validation'

import SignInForm from '/imports/ui/admin/components/SignInForm/SignInForm.jsx'
import * as AdminActions from '/imports/ui/admin/actions'


//Client side validation
const validations = {
    email: {
        required: true,
        email: true
    },
    password: {
        required: true
    }
}

//For any field errors upon submission (i.e. not instant check)
const validateAndSignIn = (values, dispatch) => {

    return new Promise((resolve, reject) => {
        dispatch(AdminActions.loginWithPassword(values.email, values.password))
            .then(() => {
                dispatch(AdminActions.signInUserSuccess())
                //dispatch(push(`/surveys/${values.surveyId}/completed`))
                resolve()
            })
            .catch(e => {
                dispatch(AdminActions.signInUserFailure({data: e}))
                reject(e)
            })
    })
}



const mapDispatchToProps = () => {
    return {
    }
}


function mapStateToProps(state) {
    return {
        newSignIn: state.admin.auth.newSignIn
    }
}


// connect: first argument is mapStateToProps, 2nd is mapDispatchToProps
// reduxForm: 1st is form config, 2nd is mapStateToProps, 3rd is mapDispatchToProps
export default reduxForm({
    form: 'SignInForm',
    ...generateValidation(validations),
    onSubmit: validateAndSignIn
}, mapStateToProps, mapDispatchToProps)(SignInForm)