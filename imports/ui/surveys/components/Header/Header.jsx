import React, {Component, PropTypes} from 'react'
import ProgressBar from 'react-progress-bar-plus'

class Header extends Component {
    render() {
        const { loadingPercent } = this.props
        return (
            <div>               
                <ProgressBar onTop={true} autoIncrement={true} percent={loadingPercent} />
            </div>
        )
    }
}

Header.propTypes = {
    loadingPercent: PropTypes.number.isRequired
}

export default Header