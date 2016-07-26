import { Meteor } from 'meteor/meteor'
import {Accounts} from 'meteor/accounts-base'
import { render } from 'react-dom'
import { renderRoutes } from '/imports/startup/client/routes.jsx'

import '/node_modules/react-html5video/dist/ReactHtml5Video.css'

Meteor.startup(() => {
    render(renderRoutes(), document.getElementById('app'))

    if (Meteor.users.find().count() === 0) {
        Accounts.createUser({
            email: 'test@example.com',
            password: 'password'
        })
    }
})
