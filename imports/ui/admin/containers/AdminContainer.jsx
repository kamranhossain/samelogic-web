import { Meteor } from 'meteor/meteor'
import { createContainer } from 'meteor/react-meteor-data'

import { bindActionCreators } from 'redux'
import { connect }  from 'react-redux'
import { push } from 'react-router-redux'

import * as AdminActions from '/imports/ui/admin/actions'
import Layout from '/imports/ui/admin/layouts/Layout.jsx'

const AdminContainer = createContainer(({actions}) => {
    actions.loadUser()
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
        actions: bindActionCreators(AdminActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminContainer)