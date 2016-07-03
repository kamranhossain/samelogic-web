import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import CampaignList from '/imports/ui/admin/components/CampaignList/CampaignList.jsx'

import * as AdminActions from '/imports/ui/admin/actions'

function mapStateToProps(state) {
    return {
        campaigns: state.admin.campaigns
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(AdminActions, dispatch)        
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(CampaignList)