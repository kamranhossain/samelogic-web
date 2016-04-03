import { ValidatedMethod } from 'meteor/mdg:validated-method'
import { SimpleSchema } from 'meteor/aldeed:simple-schema'

import { Surveys } from './../surveys'

export default new ValidatedMethod({
    name: 'surveys.create',
    validate: new SimpleSchema({
        title: { type: String },
        description: { type: String }
    }).validator(),
    run({ title, description}) {

        const survey = {
            title,
            description,
            createdAt: new Date()
        }

        return Surveys.insert(survey)
    }
})

