import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Header from '/imports/ui/admin/components/Header/Header.jsx'

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


export default connect(mapStateToProps, mapDispatchToProps)(Header)