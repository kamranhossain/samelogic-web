import React, {Component, PropTypes} from 'react'
import { Link } from 'react-router'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'

class Header extends Component {
    render() {
        const {user, actions} = this.props

        return (
            <Navbar staticTop>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#">Samelogic</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <LinkContainer to="/admin">
                            <NavItem eventKey={1}>Dashboard</NavItem>
                        </LinkContainer>
                        <LinkContainer to="/admin/campaigns">
                            <NavItem eventKey={2}>Campaigns</NavItem>
                        </LinkContainer>
                    </Nav>
                    <Nav pullRight>
                        <NavDropdown eventKey={3} title="Account" id="nav-dropdown">
                            <MenuItem eventKey={3.1}>Profile</MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey={3.2}>Settings</MenuItem>
                            <MenuItem eventKey={3.3} onClick={actions.logout}>Sign Out</MenuItem>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>                
            </Navbar>
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