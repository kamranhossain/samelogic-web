import { Meteor } from 'meteor/meteor'
import { newErrorNotification } from '/imports/ui/app/actions/notifications'
import { SurveyResponses } from '/imports/api/collections/surveyResponses'

import actionTypeBuilder from '/imports/ui/app/actions/actionTypeBuilder'

export const EMOTIONS = actionTypeBuilder.type('EMOTIONS')

export function loadEmotionsFactory() {
    return campaignId => {
        return dispatch => {
            dispatch({
                type: EMOTIONS,
                meteor: {
                    subscribe: () => Meteor.subscribe('surveyResponses.admin', campaignId, '', {
                        onStop: error => {
                            if (error && error.error === 401) {
                                dispatch(newErrorNotification('failed to load campaigns'))
                            }
                        }
                    }),
                    get: () => {
                        const responses = SurveyResponses.find({campaignId: campaignId}).fetch()
                        let emotions = [
                            { key: 'neutral', count: 0},
                            { key: 'anger', count: 0},
                            { key: 'disgust', count: 0},
                            { key: 'joy', count: 0},
                            { key: 'fear', count: 0},
                            { key: 'sadness', count: 0},
                            { key: 'surprise', count: 0}
                        ]
                        
                        responses.forEach((r) => {
                            if(r.emotionData){
                                emotions.forEach(em => {
                                    if(em.emotion == r.emotionData.key){
                                        em.count++
                                    }
                                })
                            }
                        })
                        
                        return emotions
                    }
                }
            })
        }
    }
}