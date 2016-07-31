import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import SideMenu from '/imports/ui/admin/components/Dashboard/SideMenu/SideMenu.jsx'

import * as AdminActions from '/imports/ui/admin/actions'

function mapStateToProps(state) {
    return {
        user: state.admin.auth.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(AdminActions, dispatch)        
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(SideMenu)