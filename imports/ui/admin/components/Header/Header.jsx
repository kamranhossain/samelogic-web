import React, {Component, PropTypes} from 'react'
import { Link } from 'react-router'

class Header extends Component {
    render() {
        const {user, actions} = this.props

        return (
            <nav className="header navbar navbar-default navbar-static-top">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="#">Samelogic</a>
                    </div>

                    <div id="navbar" className="navbar-collapse collapse">
                        <ul className="nav navbar-nav">
                            <li className="active"><Link to="/admin">Dashboard</Link></li>
                            <li><Link to="/admin/campaigns">Campaigns</Link></li>                            
                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                            <li className="dropdown">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Account <span className="caret"></span></a>
                                <ul className="dropdown-menu">
                                    <li><a href="#">Action</a></li>
                                    <li><a href="#">Another action</a></li>
                                    <li><a href="#">Something else here</a></li>
                                    <li role="separator" className="divider"></li>
                                    <li className="dropdown-header">Nav header</li>
                                    <li><a href="#">Separated link</a></li>
                                    <li><a onClick={actions.logout} href="#">Sign Out</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>    
            </nav>
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