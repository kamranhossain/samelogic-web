import React, {Component, PropTypes} from 'react'

class Header extends Component {
    render() {
        const {user, actions} = this.props

        return (
            <div>
                {user ?
                    <div>
                        UserId: {user._id}
                        <button className="dropdown-item" onClick={actions.logout}>
                            Log out
                        </button>
                    </div>
                    : null}                
            </div>
        )
    }
}

Header.propTypes = {
    user: PropTypes.shape({
        
    }).isRequired,
    actions: PropTypes.shape({
        logout: PropTypes.func.isRequired
    }).isRequired
}

export default Header