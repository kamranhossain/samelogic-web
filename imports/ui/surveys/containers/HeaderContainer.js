import React, { Component } from 'react'
import { connect } from 'react-redux'
import Header from '/imports/ui/surveys/components/Header/Header.jsx'


function checkLoading(state){
    return !state.surveys.survey.ready
}

function getLoadingPercent(state){
    return 0
}

function mapStateToProps(state) {
    return {
        loading: checkLoading(state),
        loadingPercent: getLoadingPercent(state)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Header)