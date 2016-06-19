import { connect } from 'react-redux'
import Header from '/imports/ui/surveys/components/Header/Header.jsx'


function checkLoading(state){
    return (!state.surveys.survey.ready
           || state.surveys.snaps.newSnap.loading)
}

function getLoadingPercent(state){
    let percent = 0
    if(state.surveys.snaps.newSnap.loading && state.surveys.snaps.newSnap.progress > 0){
        percent = state.surveys.snaps.newSnap.progress
    }
    return percent * 100
}

function mapStateToProps(state) {
    return {
        loading: checkLoading(state),
        loadingPercent: getLoadingPercent(state)
    }
}

const mapDispatchToProps = () => {
    return {
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Header)