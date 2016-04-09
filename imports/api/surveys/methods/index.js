import { Meteor } from 'meteor/meteor'
import { DDPRateLimiter } from 'meteor/ddp-rate-limiter'
import { _ } from 'meteor/underscore'

import create from './create'
import createVideoResponse from './createVideoResponse'
import updateVideoResponseUrl from './updateVideoResponseUrl'

export { create, createVideoResponse, updateVideoResponseUrl }

// Get list of all method names on Surveys
const METHODS = _.pluck([
    create,
    createVideoResponse,
    updateVideoResponseUrl
], 'name')

if (Meteor.isServer) {
    // Only allow 5 survey operations per connection per second
    DDPRateLimiter.addRule({
        name(name) {
            return _.contains(METHODS, name)
        },

        // Rate limit per connection ID
        connectionId() { return true }
    }, 5, 1000)
}