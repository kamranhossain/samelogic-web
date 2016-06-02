import { Meteor } from 'meteor/meteor'
import moment from 'moment'
import { newErrorNotification } from './notifications'
import actionTypeBuilder from 'meteor/shawnmclean:redux-meteorware'

export const CAMPAIGNS = actionTypeBuilder.type('CAMPAIGNS')
export const CAMPAIGNS_REMOVE = actionTypeBuilder.type('CAMPAIGNS_REMOVE')
export const CAMPAIGNS_INSERT = actionTypeBuilder.type('CAMPAIGNS_INSERT')
export const CAMPAIGNS_UPDATE = actionTypeBuilder.type('CAMPAIGNS_UPDATE')

export function loadCampaignsFactory(mealCollection) {
    return (campaignName) => {
        return dispatch => {
            dispatch({
                type: CAMPAIGNS,
                meteor: {
                    subscribe: () => Meteor.subscribe('CAMPAIGNS', campaignName, {
                        onStop: error => {
                            if (error && error.error === 401) {
                                dispatch(newErrorNotification(''))
                            }
                        }
                    }),
                    get: () => mealCollection.findByUserAndDate(finalUserId, dateStart, dateEnd).fetch()
                }
            })
        }
    }
}

export function deleteMealFactory(collection) {
  return id => {
    return dispatch => {
      dispatch({
        type: CAMPAIGNS_REMOVE,
        meteor: {
          remove: {
            id,
            collection,
          },
        },
      });
    };
  };
}

export function newMealFactory(collection) {
  return (type, name, date) => {
    return dispatch => {
      dispatch({
        type: CAMPAIGNS_INSERT,
        meteor: {
          insert: {
            entity: {
              date,
              name,
              type,
            },
            collection,
          },
        },
      });
    };
  };
}

export function updateMealTimeFactory(collection) {
  return (id, date) => {
    return dispatch => {
      dispatch({
        type: CAMPAIGNS_UPDATE,
        meteor: {
          update: {
            id,
            modifiers: {
              $set: {
                date: moment(date).toDate(),
              },
            },
            collection,
          },
        },
      });
    };
  };
}