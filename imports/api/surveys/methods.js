import { Meteor } from 'meteor/meteor'
import { ValidatedMethod } from 'meteor/mdg:validated-method'
import { SimpleSchema } from 'meteor/aldeed:simple-schema'
import { DDPRateLimiter } from 'meteor/ddp-rate-limiter'
import { _ } from 'meteor/underscore'

import { Surveys } from './surveys'

export const create = new ValidatedMethod({
    name: 'surveys.create',
    validate: new SimpleSchema({
        title: { type: String},
        description: { type: String}
    }).validator(),
    run({ title, description}){
        
        const survey = {
            title,
            description,
            createdAt: new Date()
        }
        
        Surveys.insert(survey)
    }
})

// Get list of all method names on Surveys
const METHODS = _.pluck([
    create
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