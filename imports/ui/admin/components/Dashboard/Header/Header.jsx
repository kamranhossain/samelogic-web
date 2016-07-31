import React, {Component, PropTypes} from 'react'
import { Link } from 'react-router'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'

class Header extends Component {
    render() {
        const {user, actions} = this.props

        return (
            <nav className="site-navbar navbar navbar-default navbar-fixed-top navbar-mega" role="navigation">

            <div className="navbar-header">
                <button type="button" className="navbar-toggle hamburger hamburger-close navbar-toggle-left hided"
                data-toggle="menubar">
                <span className="sr-only">Toggle navigation</span>
                <span className="hamburger-bar"></span>
                </button>
                <button type="button" className="navbar-toggle collapsed" data-target="#site-navbar-collapse"
                data-toggle="collapse">
                <i className="icon wb-more-horizontal" aria-hidden="true"></i>
                </button>
                <div className="navbar-brand navbar-brand-center site-gridmenu-toggle" data-toggle="gridmenu">
                <img className="navbar-brand-logo" src="{{assets}}/images/logo.png" title="Remark" />
                <span className="navbar-brand-text hidden-xs"> Remark</span>
                </div>
                <button type="button" className="navbar-toggle collapsed" data-target="#site-navbar-search"
                data-toggle="collapse">
                <span className="sr-only">Toggle Search</span>
                <i className="icon wb-search" aria-hidden="true"></i>
                </button>
            </div>

            <div className="navbar-container container-fluid">
                <div className="collapse navbar-collapse navbar-collapse-toolbar" id="site-navbar-collapse">
                <ul className="nav navbar-toolbar">
                    <li className="hidden-float" id="toggleMenubar">
                    <a data-toggle="menubar" href="#" role="button">
                        <i className="icon hamburger hamburger-arrow-left">
                        <span className="sr-only">Toggle menubar</span>
                        <span className="hamburger-bar"></span>
                        </i>
                    </a>
                    </li>
                    <li className="hidden-xs" id="toggleFullscreen">
                    <a className="icon icon-fullscreen" data-toggle="fullscreen" href="#" role="button">
                        <span className="sr-only">Toggle fullscreen</span>
                    </a>
                    </li>
                    <li className="hidden-float">
                    <a className="icon wb-search" data-toggle="collapse" href="#" data-target="#site-navbar-search"
                    role="button">
                        <span className="sr-only">Toggle Search</span>
                    </a>
                    </li>
                    <li className="dropdown dropdown-fw dropdown-mega">
                    <a className="dropdown-toggle" data-toggle="dropdown" href="#" aria-expanded="false"
                    data-animation="fade" role="button">Mega <i className="icon wb-chevron-down-mini" aria-hidden="true"></i></a>
                    <ul className="dropdown-menu" role="menu">
                        <li role="presentation">
                        <div className="mega-content">
                            <div className="row">
                            <div className="col-sm-4">
                                <h5>UI Kit</h5>
                                <ul className="blocks-2">
                                <li className="mega-menu margin-0">
                                    <ul className="list-icons">
                                    <li><i className="wb-chevron-right-mini" aria-hidden="true"></i>
                                        <a
                                        href="{{dest 'advanced/animation.html'}}">Animation</a>
                                    </li>
                                    <li><i className="wb-chevron-right-mini" aria-hidden="true"></i>
                                        <a
                                        href="{{dest 'uikit/buttons.html'}}">Buttons</a>
                                    </li>
                                    <li><i className="wb-chevron-right-mini" aria-hidden="true"></i>
                                        <a
                                        href="{{dest 'uikit/colors.html'}}">Colors</a>
                                    </li>
                                    <li><i className="wb-chevron-right-mini" aria-hidden="true"></i>
                                        <a
                                        href="{{dest 'uikit/dropdowns.html'}}">Dropdowns</a>
                                    </li>
                                    <li><i className="wb-chevron-right-mini" aria-hidden="true"></i>
                                        <a
                                        href="{{dest 'uikit/icons.html'}}">Icons</a>
                                    </li>
                                    <li><i className="wb-chevron-right-mini" aria-hidden="true"></i>
                                        <a
                                        href="{{dest 'advanced/lightbox.html'}}">Lightbox</a>
                                    </li>
                                    </ul>
                                </li>
                                <li className="mega-menu margin-0">
                                    <ul className="list-icons">
                                    <li><i className="wb-chevron-right-mini" aria-hidden="true"></i>
                                        <a
                                        href="{{dest 'uikit/modals.html'}}">Modals</a>
                                    </li>
                                    <li><i className="wb-chevron-right-mini" aria-hidden="true"></i>
                                        <a
                                        href="{{dest 'uikit/panel-structure.html'}}">Panels</a>
                                    </li>
                                    <li><i className="wb-chevron-right-mini" aria-hidden="true"></i>
                                        <a
                                        href="{{dest 'structure/overlay.html'}}">Overlay</a>
                                    </li>
                                    <li><i className="wb-chevron-right-mini" aria-hidden="true"></i>
                                        <a
                                        href="{{dest 'uikit/tooltip-popover.html '}}">Tooltips</a>
                                    </li>
                                    <li><i className="wb-chevron-right-mini" aria-hidden="true"></i>
                                        <a
                                        href="{{dest 'advanced/scrollable.html'}}">Scrollable</a>
                                    </li>
                                    <li><i className="wb-chevron-right-mini" aria-hidden="true"></i>
                                        <a
                                        href="{{dest 'uikit/typography.html'}}">Typography</a>
                                    </li>
                                    </ul>
                                </li>
                                </ul>
                            </div>
                            <div className="col-sm-4">
                                <h5>Media
                                <span className="badge badge-success">4</span>
                                </h5>
                                <ul className="blocks-3">
                                <li>
                                    <a className="thumbnail margin-0" href="javascript:void(0)">
                                    <img className="width-full" src="{{global}}/photos/placeholder.png" alt="..." />
                                    </a>
                                </li>
                                <li>
                                    <a className="thumbnail margin-0" href="javascript:void(0)">
                                    <img className="width-full" src="{{global}}/photos/placeholder.png" alt="..." />
                                    </a>
                                </li>
                                <li>
                                    <a className="thumbnail margin-0" href="javascript:void(0)">
                                    <img className="width-full" src="{{global}}/photos/placeholder.png" alt="..." />
                                    </a>
                                </li>
                                <li>
                                    <a className="thumbnail margin-0" href="javascript:void(0)">
                                    <img className="width-full" src="{{global}}/photos/placeholder.png" alt="..." />
                                    </a>
                                </li>
                                <li>
                                    <a className="thumbnail margin-0" href="javascript:void(0)">
                                    <img className="width-full" src="{{global}}/photos/placeholder.png" alt="..." />
                                    </a>
                                </li>
                                <li>
                                    <a className="thumbnail margin-0" href="javascript:void(0)">
                                    <img className="width-full" src="{{global}}/photos/placeholder.png" alt="..." />
                                    </a>
                                </li>
                                </ul>
                            </div>
                            <div className="col-sm-4">
                                <h5 className="margin-bottom-0">Accordion</h5>
                                <div className="panel-group panel-group-simple" id="siteMegaAccordion" aria-multiselectable="true"
                                role="tablist">
                                <div className="panel">
                                    <div className="panel-heading" id="siteMegaAccordionHeadingOne" role="tab">
                                    <a className="panel-title" data-toggle="collapse" href="#siteMegaCollapseOne" data-parent="#siteMegaAccordion"
                                    aria-expanded="false" aria-controls="siteMegaCollapseOne">
                                        Collapsible Group Item #1
                                    </a>
                                    </div>
                                    <div className="panel-collapse collapse" id="siteMegaCollapseOne" aria-labelledby="siteMegaAccordionHeadingOne"
                                    role="tabpanel">
                                    <div className="panel-body">
                                        De moveat laudatur vestra parum doloribus labitur sentire partes, eripuit praesenti
                                        congressus ostendit alienae, voluptati ornateque accusamus
                                        clamat reperietur convicia albucius.
                                    </div>
                                    </div>
                                </div>
                                <div className="panel">
                                    <div className="panel-heading" id="siteMegaAccordionHeadingTwo" role="tab">
                                    <a className="panel-title collapsed" data-toggle="collapse" href="#siteMegaCollapseTwo"
                                    data-parent="#siteMegaAccordion" aria-expanded="false"
                                    aria-controls="siteMegaCollapseTwo">
                                        Collapsible Group Item #2
                                    </a>
                                    </div>
                                    <div className="panel-collapse collapse" id="siteMegaCollapseTwo" aria-labelledby="siteMegaAccordionHeadingTwo"
                                    role="tabpanel">
                                    <div className="panel-body">
                                        Praestabiliorem. Pellat excruciant legantur ullum leniter vacare foris voluptate
                                        loco ignavi, credo videretur multoque choro fatemur
                                        mortis animus adoptionem, bello statuat expediunt naturales.
                                    </div>
                                    </div>
                                </div>

                                <div className="panel">
                                    <div className="panel-heading" id="siteMegaAccordionHeadingThree" role="tab">
                                    <a className="panel-title collapsed" data-toggle="collapse" href="#siteMegaCollapseThree"
                                    data-parent="#siteMegaAccordion" aria-expanded="false"
                                    aria-controls="siteMegaCollapseThree">
                                        Collapsible Group Item #3
                                    </a>
                                    </div>
                                    <div className="panel-collapse collapse" id="siteMegaCollapseThree" aria-labelledby="siteMegaAccordionHeadingThree"
                                    role="tabpanel">
                                    <div className="panel-body">
                                        Horum, antiquitate perciperet d conspectum locus obruamus animumque perspici probabis
                                        suscipere. Desiderat magnum, contenta poena desiderant
                                        concederetur menandri damna disputandum corporum.
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </li>
                    </ul>
                    </li>
                </ul>
                <ul className="nav navbar-toolbar navbar-right navbar-toolbar-right">
                    <li className="dropdown">
                    <a className="dropdown-toggle" data-toggle="dropdown" href="javascript:void(0)" data-animation="scale-up"
                    aria-expanded="false" role="button">
                        <span className="flag-icon flag-icon-us"></span>
                    </a>
                    <ul className="dropdown-menu" role="menu">
                        <li role="presentation">
                        <a href="javascript:void(0)" role="menuitem">
                            <span className="flag-icon flag-icon-gb"></span> English</a>
                        </li>
                        <li role="presentation">
                        <a href="javascript:void(0)" role="menuitem">
                            <span className="flag-icon flag-icon-fr"></span> French</a>
                        </li>
                        <li role="presentation">
                        <a href="javascript:void(0)" role="menuitem">
                            <span className="flag-icon flag-icon-cn"></span> Chinese</a>
                        </li>
                        <li role="presentation">
                        <a href="javascript:void(0)" role="menuitem">
                            <span className="flag-icon flag-icon-de"></span> German</a>
                        </li>
                        <li role="presentation">
                        <a href="javascript:void(0)" role="menuitem">
                            <span className="flag-icon flag-icon-nl"></span> Dutch</a>
                        </li>
                    </ul>
                    </li>
                    <li className="dropdown">
                    <a className="navbar-avatar dropdown-toggle" data-toggle="dropdown" href="#" aria-expanded="false"
                    data-animation="scale-up" role="button">
                        <span className="avatar avatar-online">
                        <img src="{{global}}/portraits/5.jpg" alt="..." />
                        <i></i>
                        </span>
                    </a>
                    <ul className="dropdown-menu" role="menu">
                        <li role="presentation">
                        <a href="javascript:void(0)" role="menuitem"><i className="icon wb-user" aria-hidden="true"></i> Profile</a>
                        </li>
                        <li role="presentation">
                        <a href="javascript:void(0)" role="menuitem"><i className="icon wb-payment" aria-hidden="true"></i> Billing</a>
                        </li>
                        <li role="presentation">
                        <a href="javascript:void(0)" role="menuitem"><i className="icon wb-settings" aria-hidden="true"></i> Settings</a>
                        </li>
                        <li className="divider" role="presentation"></li>
                        <li role="presentation">
                        <a href="javascript:void(0)" role="menuitem"><i className="icon wb-power" aria-hidden="true"></i> Logout</a>
                        </li>
                    </ul>
                    </li>
                    <li className="dropdown">
                    <a data-toggle="dropdown" href="javascript:void(0)" title="Notifications" aria-expanded="false"
                    data-animation="scale-up" role="button">
                        <i className="icon wb-bell" aria-hidden="true"></i>
                        <span className="badge badge-danger up">5</span>
                    </a>
                    <ul className="dropdown-menu dropdown-menu-right dropdown-menu-media" role="menu">
                        <li className="dropdown-menu-header" role="presentation">
                        <h5>NOTIFICATIONS</h5>
                        <span className="label label-round label-danger">New 5</span>
                        </li>

                        <li className="list-group" role="presentation">
                        <div data-role="container">
                            <div data-role="content">
                            <a className="list-group-item" href="javascript:void(0)" role="menuitem">
                                <div className="media">
                                <div className="media-left padding-right-10">
                                    <i className="icon wb-order bg-red-600 white icon-circle" aria-hidden="true"></i>
                                </div>
                                <div className="media-body">
                                    <h6 className="media-heading">A new order has been placed</h6>
                                    <time className="media-meta" dateTime="2016-06-12T20:50:48+08:00">5 hours ago</time>
                                </div>
                                </div>
                            </a>
                            <a className="list-group-item" href="javascript:void(0)" role="menuitem">
                                <div className="media">
                                <div className="media-left padding-right-10">
                                    <i className="icon wb-user bg-green-600 white icon-circle" aria-hidden="true"></i>
                                </div>
                                <div className="media-body">
                                    <h6 className="media-heading">Completed the task</h6>
                                    <time className="media-meta" dateTime="2016-06-11T18:29:20+08:00">2 days ago</time>
                                </div>
                                </div>
                            </a>
                            <a className="list-group-item" href="javascript:void(0)" role="menuitem">
                                <div className="media">
                                <div className="media-left padding-right-10">
                                    <i className="icon wb-settings bg-red-600 white icon-circle" aria-hidden="true"></i>
                                </div>
                                <div className="media-body">
                                    <h6 className="media-heading">Settings updated</h6>
                                    <time className="media-meta" dateTime="2016-06-11T14:05:00+08:00">2 days ago</time>
                                </div>
                                </div>
                            </a>
                            <a className="list-group-item" href="javascript:void(0)" role="menuitem">
                                <div className="media">
                                <div className="media-left padding-right-10">
                                    <i className="icon wb-calendar bg-blue-600 white icon-circle" aria-hidden="true"></i>
                                </div>
                                <div className="media-body">
                                    <h6 className="media-heading">Event started</h6>
                                    <time className="media-meta" dateTime="2016-06-10T13:50:18+08:00">3 days ago</time>
                                </div>
                                </div>
                            </a>
                            <a className="list-group-item" href="javascript:void(0)" role="menuitem">
                                <div className="media">
                                <div className="media-left padding-right-10">
                                    <i className="icon wb-chat bg-orange-600 white icon-circle" aria-hidden="true"></i>
                                </div>
                                <div className="media-body">
                                    <h6 className="media-heading">Message received</h6>
                                    <time className="media-meta" dateTime="2016-06-10T12:34:48+08:00">3 days ago</time>
                                </div>
                                </div>
                            </a>
                            </div>
                        </div>
                        </li>
                        <li className="dropdown-menu-footer" role="presentation">
                        <a className="dropdown-menu-footer-btn" href="javascript:void(0)" role="button">
                            <i className="icon wb-settings" aria-hidden="true"></i>
                        </a>
                        <a href="javascript:void(0)" role="menuitem">
                            All notifications
                        </a>
                        </li>
                    </ul>
                    </li>
                    <li className="dropdown">
                    <a data-toggle="dropdown" href="javascript:void(0)" title="Messages" aria-expanded="false"
                    data-animation="scale-up" role="button">
                        <i className="icon wb-envelope" aria-hidden="true"></i>
                        <span className="badge badge-info up">3</span>
                    </a>
                    <ul className="dropdown-menu dropdown-menu-right dropdown-menu-media" role="menu">
                        <li className="dropdown-menu-header" role="presentation">
                        <h5>MESSAGES</h5>
                        <span className="label label-round label-info">New 3</span>
                        </li>

                        <li className="list-group" role="presentation">
                        <div data-role="container">
                            <div data-role="content">
                            <a className="list-group-item" href="javascript:void(0)" role="menuitem">
                                <div className="media">
                                <div className="media-left padding-right-10">
                                    <span className="avatar avatar-sm avatar-online">
                                    <img src="{{global}}/portraits/2.jpg" alt="..." />
                                    <i></i>
                                    </span>
                                </div>
                                <div className="media-body">
                                    <h6 className="media-heading">Mary Adams</h6>
                                    <div className="media-meta">
                                    <time dateTime="2016-06-17T20:22:05+08:00">30 minutes ago</time>
                                    </div>
                                    <div className="media-detail">Anyways, i would like just do it</div>
                                </div>
                                </div>
                            </a>
                            <a className="list-group-item" href="javascript:void(0)" role="menuitem">
                                <div className="media">
                                <div className="media-left padding-right-10">
                                    <span className="avatar avatar-sm avatar-off">
                                    <img src="{{global}}/portraits/3.jpg" alt="..." />
                                    <i></i>
                                    </span>
                                </div>
                                <div className="media-body">
                                    <h6 className="media-heading">Caleb Richards</h6>
                                    <div className="media-meta">
                                    <time dateTime="2016-06-17T12:30:30+08:00">12 hours ago</time>
                                    </div>
                                    <div className="media-detail">I checheck the document. But there seems</div>
                                </div>
                                </div>
                            </a>
                            <a className="list-group-item" href="javascript:void(0)" role="menuitem">
                                <div className="media">
                                <div className="media-left padding-right-10">
                                    <span className="avatar avatar-sm avatar-busy">
                                    <img src="{{global}}/portraits/4.jpg" alt="..." />
                                    <i></i>
                                    </span>
                                </div>
                                <div className="media-body">
                                    <h6 className="media-heading">June Lane</h6>
                                    <div className="media-meta">
                                    <time dateTime="2016-06-16T18:38:40+08:00">2 days ago</time>
                                    </div>
                                    <div className="media-detail">Lorem ipsum Id consectetur et minim</div>
                                </div>
                                </div>
                            </a>
                            <a className="list-group-item" href="javascript:void(0)" role="menuitem">
                                <div className="media">
                                <div className="media-left padding-right-10">
                                    <span className="avatar avatar-sm avatar-away">
                                    <img src="{{global}}/portraits/5.jpg" alt="..." />
                                    <i></i>
                                    </span>
                                </div>
                                <div className="media-body">
                                    <h6 className="media-heading">Edward Fletcher</h6>
                                    <div className="media-meta">
                                    <time dateTime="2016-06-15T20:34:48+08:00">3 days ago</time>
                                    </div>
                                    <div className="media-detail">Dolor et irure cupidatat commodo nostrud nostrud.</div>
                                </div>
                                </div>
                            </a>
                            </div>
                        </div>
                        </li>
                        <li className="dropdown-menu-footer" role="presentation">
                        <a className="dropdown-menu-footer-btn" href="javascript:void(0)" role="button">
                            <i className="icon wb-settings" aria-hidden="true"></i>
                        </a>
                        <a href="javascript:void(0)" role="menuitem">
                            See all messages
                        </a>
                        </li>
                    </ul>
                    </li>
                    <li id="toggleChat">
                    <a data-toggle="site-sidebar" href="javascript:void(0)" title="Chat" data-url="{{dest 'site-sidebar.tpl'}}">
                        <i className="icon wb-chat" aria-hidden="true"></i>
                    </a>
                    </li>
                </ul>
                </div>
                <div className="collapse navbar-search-overlap" id="site-navbar-search">
                <form role="search">
                    <div className="form-group">
                    <div className="input-search">
                        <i className="input-search-icon wb-search" aria-hidden="true"></i>
                        <input type="text" className="form-control" name="site-search" placeholder="Search..." />
                        <button type="button" className="input-search-close icon wb-close" data-target="#site-navbar-search"
                        data-toggle="collapse" aria-label="Close"></button>
                    </div>
                    </div>
                </form>
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