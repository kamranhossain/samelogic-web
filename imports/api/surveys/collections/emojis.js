import { SEnum } from 'meteor/zeroasterisk:s-enum'

export default SEnum([
    {
        key: 'smiling_face_with_heart_shaped_eyes',
        value: 1,
        label: 'Delighted',
        icon: '',
        includeInSnapsSurvey: true        
    },
    {
        key: 'grinning_face',
        value: 2,
        label: 'Happy',
        icon: '',
        includeInSnapsSurvey: true        
    },
    {
        key: 'neutral_face',
        value: 3,
        label: 'Meh',
        icon: '',
        includeInSnapsSurvey: true        
    },
    {
        key: 'angry_face',
        value: 4,
        label: 'Unsatisfied',
        icon: '',
        includeInSnapsSurvey: true        
    }
])