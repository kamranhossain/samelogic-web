import React, {Component, PropTypes} from 'react'
import ProgressBar from 'react-progress-bar-plus'

class Header extends Component {
    render() {
        const { loading, loadingPercent } = this.props
        let percent = 100

        if(loading && loadingPercent > 0)
            percent = loadingPercent
        else if(loading)
            percent = 1

        return (
            <div>               
                <ProgressBar onTop={true} autoIncrement={true} percent={percent} />
            </div>
        )
    }
}

Header.propTypes = {
    loading: PropTypes.bool.isRequired,
    loadingPercent: PropTypes.number.isRequired
}

export default Header