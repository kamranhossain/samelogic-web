import { ValidatedMethod } from 'meteor/mdg:validated-method'
import { SimpleSchema } from 'meteor/aldeed:simple-schema'

import { Campaigns } from '../collections/campaigns'

export default new ValidatedMethod({
    name: 'campaigns.create',
    validate: new SimpleSchema({
        title: { type: String },
        description: { type: String }
    }).validator(),
    run({ title, description}) {

        const campaign = {
            title,
            description,
            identity: {
                name: 'Bianca Welds',
                title: 'Program Manager',
                organisation: 'CMIP',
                photoUri: '/img/bianca.png'
            }
        }

        return Campaigns.insert(campaign)
    }
})

