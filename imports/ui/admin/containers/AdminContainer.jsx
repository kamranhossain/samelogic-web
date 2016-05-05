import { Meteor } from 'meteor/meteor'
import { createContainer } from 'meteor/react-meteor-data'

import { connect }  from 'react-redux'
import { push } from 'react-router-redux'


import Layout from '/imports/ui/admin/layouts/Layout.jsx'

const AdminContainer = createContainer(() => {

    return {
        connected: Meteor.status().connected
    }
    
}, Layout)

const mapStateToProps = (state) => {
    return {
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminContainer)