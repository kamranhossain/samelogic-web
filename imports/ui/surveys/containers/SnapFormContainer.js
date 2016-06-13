import { reduxForm } from 'redux-form'
import { bindActionCreators } from 'redux'

import SnapForm from '/imports/ui/surveys/components/SnapForm/SnapForm.jsx'
/*import {
  createPost, createPostSuccess, createPostFailure, resetNewPost, validatePostFields, validatePostFieldsSuccess, validatePostFieldsFailure
} from '/imports/ui/surveys/actions/snaps' */
import * as SurveyActions from '/imports/ui/surveys/actions'

//Client side validation
function validate(values) {
    const errors = {}

    if (!values.emoji || values.emoji=== 0) {
        errors.emoji = 'Select an Emoji'
    }
    if (!values.snap) {
        errors.snap = 'Record or Select a Video'
    }

    return errors
}

//For instant async server validation
const asyncValidate = (values, dispatch) => {

    return new Promise((resolve, reject) => {
/*
    dispatch(validatePostFields(values))
      .then((response) => {
        let data = response.payload.data;
        //if status is not 200 or any one of the fields exist, then there is a field error
        if (response.payload.status != 200 || data.title || data.categories || data.description) {
          //let other components know of error by updating the redux` state
          dispatch(validatePostFieldsFailure(response.payload));
          reject(data); //this is for redux-form itself
        } else {
          //let other components know that everything is fine by updating the redux` state
          dispatch(validatePostFieldsSuccess(response.payload)); //ps: this is same as dispatching RESET_POST_FIELDS
          resolve(); //this is for redux-form itself
        }
      });
  */
    })
}

//For any field errors upon submission (i.e. not instant check)
const validateAndCreatePost = (values, dispatch) => {

    return new Promise((resolve, reject) => {
/*

    let token = sessionStorage.getItem('jwtToken');
    if (!token || token === '') { //if there is no token, dont bother,
      let data = {data: {message: 'Please Sign In'}};//axios like error
      dispatch(createPostFailure(data)); // but let other comps know
      reject(data); //this is for redux-form itself
      return;
    }
    dispatch(createPost(values, token))
      .then((response) => {
        let data = response.payload.data;
        //if any one of these exist, then there is a field error 
        if (response.payload.status != 200) {
          //let other components know of error by updating the redux` state
          dispatch(createPostFailure(response.payload));
          reject(data); //this is for redux-form itself
        } else {
          //let other components know that everything is fine by updating the redux` state
          dispatch(createPostSuccess(response.payload));
          resolve(); //this is for redux-form itself
        }
      });

  */
    })
}



const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(SurveyActions, dispatch)
    }
}


function mapStateToProps(state) {
    return {
        newSnap: state.surveys.snaps.newSnap,
        survey: state.surveys.survey,
        emojis: state.surveys.emojis
    }
}


// connect: first argument is mapStateToProps, 2nd is mapDispatchToProps
// reduxForm: 1st is form config, 2nd is mapStateToProps, 3rd is mapDispatchToProps
export default reduxForm({
    form: 'SnapForm',
    fields: ['emoji', 'snap', 'comment'],
    asyncValidate,
    asyncBlurFields: ['emoji'],
    validate
}, mapStateToProps, mapDispatchToProps)(SnapForm)