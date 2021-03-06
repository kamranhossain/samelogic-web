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
        feedback: 'Happy you had a good experience with us!\n I\'d love to hear more!'       
    },
    {
        key: 'neutral_face',
        value: 3,
        label: 'Meh',
        includeInSnapsSurvey: true,
        feedback: 'I’m sorry you didn’t have a good experience.\n I\’d love to know how you feel that we can improve our service.\n I\'d love to hear more!'         
    },
    {
        key: 'angry_face',
        value: 4,
        label: 'Unsatisfied',
        includeInSnapsSurvey: true,
        feedback: 'I\’m so sorry you had a horrible experience.\n I\’d really love to hear how you felt so we can make this better.'         
    }
])