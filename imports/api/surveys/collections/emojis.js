import { SEnum } from 'meteor/zeroasterisk:s-enum'

export const Emojis = SEnum([
    {
        key: 'grinning_face',
        value: 1,
        label: 'Grinning Face',
        icon: '',
        includeInSnapsSurvey: true        
    },
    {
        key: 'smiling_face_with_heart_shaped_eyes',
        value: 2,
        label: 'Smiling Face with Heart-Shaped Eyes',
        icon: '',
        includeInSnapsSurvey: true        
    },
    {
        key: 'angry_face',
        value: 3,
        label: 'Angry Face',
        icon: '',
        includeInSnapsSurvey: true        
    },
    {
        key: 'neutral_face',
        value: 4,
        label: 'Neutral Face',
        icon: '',
        includeInSnapsSurvey: true        
    }
])