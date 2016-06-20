import { reduxForm } from 'redux-form'
import { push } from 'react-router-redux'

import SnapForm from '/imports/ui/surveys/components/SnapForm/SnapForm.jsx'
/*import {
  createPost, createPostSuccess, createPostFailure, resetNewPost, validatePostFields, validatePostFieldsSuccess, validatePostFieldsFailure
} from '/imports/ui/surveys/actions/snaps' */
import * as SurveyActions from '/imports/ui/surveys/actions'

const MIN_DURATION = 5 
const MAX_DURATION = 60

//Client side validation
function validate(values) {
    const errors = {}

    if (!values.emoji || values.emoji=== 0) {
        errors.emoji = 'Select an Emoji'
    }
    if (!values.snap || !values.snap[0]) {
        errors.snap = 'Record or Select a Video'
    }

    return errors
}

//For instant async server validation
const asyncValidate = (values) => {

    return new Promise((resolve, reject) => {        
        if (values.snap || values.snap[0]) {
            const objectUrl = URL.createObjectURL(values.snap[0])
            const audio = new Audio(objectUrl)
            audio.onloadedmetadata = () => {
                let error = undefined
                const duration = Math.floor(audio.duration)
                if(audio.duration < MIN_DURATION){
                    error = `Video was ${duration}s, Too short`
                } else if(audio.duration > MAX_DURATION){
                    error = `Video was ${duration}s, Too short`
                }
                if(error){
                    reject({snap: error})
                }
                else{
                    resolve()
                }
            }
        }
    })
}

//For any field errors upon submission (i.e. not instant check)
const validateAndCreateSnap= (values, dispatch) => {

    return new Promise((resolve, reject) => {
        dispatch(SurveyActions.createSnap(values))
            .then((response) => {
                dispatch(SurveyActions.createSnapSuccess(response))
                dispatch(push(`/surveys/${values.surveyId}/completed`))
                resolve()
            })
            .catch(e => {
                dispatch(SurveyActions.createSnapFailure(e))
                reject(e)
            })
    })
}



const mapDispatchToProps = () => {
    return {
    }
}


function mapStateToProps(state, ownProps) {
    return {
        newSnap: state.surveys.snaps.newSnap,
        survey: state.surveys.survey,
        emojis: state.surveys.emojis,
        initialValues: { surveyId : state.surveys.survey.current ? state.surveys.survey.current._id : ''},
        selectedEmoji: ownProps.selectedEmoji
    }
}


// connect: first argument is mapStateToProps, 2nd is mapDispatchToProps
// reduxForm: 1st is form config, 2nd is mapStateToProps, 3rd is mapDispatchToProps
export default reduxForm({
    form: 'SnapForm',
    fields: ['surveyId', 'emoji', 'snap', 'comment'],
    asyncValidate,
    asyncBlurFields: ['snap'],
    validate,
    onSubmit: validateAndCreateSnap
}, mapStateToProps, mapDispatchToProps)(SnapForm)