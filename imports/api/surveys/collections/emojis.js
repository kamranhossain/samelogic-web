import { SEnum } from 'meteor/zeroasterisk:s-enum'

export default SEnum([
    {
        key: 'smiling_face_with_heart_shaped_eyes',
        value: 1,
        label: 'Delighted',
        includeInSnapsSurvey: true,
        feedback: 'Happy you had a great experience with us!\n I\'d love to hear more!'        
    },
    {
        key: 'grinning_face',
        value: 2,
        label: 'Happy',
        includeInSnapsSurvey: true,
        feedback: 'Test!\n I\'d love to hear more!'       
    },
    {
        key: 'neutral_face',
        value: 3,
        label: 'Meh',
        includeInSnapsSurvey: true,
        feedback: 'grinning_face!\n I\'d love to hear more!'         
    },
    {
        key: 'angry_face',
        value: 4,
        label: 'Unsatisfied',
        includeInSnapsSurvey: true,
        feedback: 'angry_face!\n I\'d love to hear more!'         
    }
])