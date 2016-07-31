import React, {Component, PropTypes} from 'react'

class SideMenu extends Component {
    render() {
        return (
            <div>
                <div className="site-menubar">
                <div className="site-menubar-body">
                    <div>
                    <div>
                        <ul className="site-menu">
                            <li className="site-menu-category">General</li>
                            <li className="site-menu-item has-sub{{#active 'dashboard'}} active open{{/active}}">
                                <a href="javascript:void(0)">
                                <i className="site-menu-icon wb-dashboard" aria-hidden="true"></i>
                                <span className="site-menu-title">Dashboard</span>
                                <div className="site-menu-badge">
                                    <span className="badge badge-success">3</span>
                                </div>
                                </a>
                                <ul className="site-menu-sub">
                                <li className="site-menu-item{{#active 'index.html'}} active{{/active}}">
                                    <a className="animsition-link" href="{{dest 'index.html'}}">
                                    <span className="site-menu-title">Dashboard v1</span>
                                    </a>
                                </li>
                                <li className="site-menu-item{{#active 'dashboard/v2.html'}} active{{/active}}">
                                    <a className="animsition-link" href="{{dest 'dashboard/v2.html'}}">
                                    <span className="site-menu-title">Dashboard v2</span>
                                    </a>
                                </li>
                                <li className="site-menu-item{{#active 'dashboard/ecommerce.html'}} active{{/active}}">
                                    <a className="animsition-link" href="{{dest 'dashboard/ecommerce.html'}}">
                                    <span className="site-menu-title">Ecommerce</span>
                                    </a>
                                </li>
                                <li className="site-menu-item{{#active 'dashboard/analytics.html'}} active{{/active}}">
                                    <a className="animsition-link" href="{{dest 'dashboard/analytics.html'}}">
                                    <span className="site-menu-title">Analytics</span>
                                    </a>
                                </li>
                                <li className="site-menu-item{{#active 'dashboard/team.html'}} active{{/active}}">
                                    <a className="animsition-link" href="{{dest 'dashboard/team.html'}}">
                                    <span className="site-menu-title">Team</span>
                                    </a>
                                </li>
                                </ul>
                            </li>
                            <li className="site-menu-item has-sub{{#active 'layouts'}} active open{{/active}}">
                                <a href="javascript:void(0)">
                                <i className="site-menu-icon wb-layout" aria-hidden="true"></i>
                                <span className="site-menu-title">Layouts</span>
                                <span className="site-menu-arrow"></span>
                                </a>
                                <ul className="site-menu-sub">
                                <li className="site-menu-item{{#active 'layouts/menu-collapsed.html'}} active{{/active}}">
                                    <a className="animsition-link" href="{{dest 'layouts/menu-collapsed.html'}}">
                                    <span className="site-menu-title">Menu Collapsed</span>
                                    </a>
                                </li>
                                <li className="site-menu-item{{#active 'layouts/menu-collapsed-alt.html'}} active{{/active}}">
                                    <a className="animsition-link" href="{{dest 'layouts/menu-collapsed-alt.html'}}">
                                    <span className="site-menu-title">Menu Collapsed Alt</span>
                                    </a>
                                </li>
                                <li className="site-menu-item{{#active 'layouts/menu-expended.html'}} active{{/active}}">
                                    <a className="animsition-link" href="{{dest 'layouts/menu-expended.html'}}">
                                    <span className="site-menu-title">Menu Expended</span>
                                    </a>
                                </li>
                                <li className="site-menu-item{{#active 'layouts/grids.html'}} active{{/active}}">
                                    <a className="animsition-link" href="{{dest 'layouts/grids.html'}}">
                                    <span className="site-menu-title">Grid Scaffolding</span>
                                    </a>
                                </li>
                                <li className="site-menu-item{{#active 'layouts/layout-grid.html'}} active{{/active}}">
                                    <a className="animsition-link" href="{{dest 'layouts/layout-grid.html'}}">
                                    <span className="site-menu-title">Layout Grid</span>
                                    </a>
                                </li>
                                <li className="site-menu-item{{#active 'layouts/headers.html'}} active{{/active}}">
                                    <a className="animsition-link" href="{{dest 'layouts/headers.html'}}">
                                    <span className="site-menu-title">Different Headers</span>
                                    </a>
                                </li>
                                <li className="site-menu-item{{#active 'layouts/panel-transition.html'}} active{{/active}}">
                                    <a className="animsition-link" href="{{dest 'layouts/panel-transition.html'}}">
                                    <span className="site-menu-title">Panel Transition</span>
                                    </a>
                                </li>
                                <li className="site-menu-item{{#active 'layouts/boxed.html'}} active{{/active}}">
                                    <a className="animsition-link" href="{{dest 'layouts/boxed.html'}}">
                                    <span className="site-menu-title">Boxed Layout</span>
                                    </a>
                                </li>
                                <li className="site-menu-item{{#active 'layouts/two-columns.html'}} active{{/active}}">
                                    <a className="animsition-link" href="{{dest 'layouts/two-columns.html'}}">
                                    <span className="site-menu-title">Two Columns</span>
                                    </a>
                                </li>
                                <li className="site-menu-item{{#active 'layouts/menubar-flipped.html'}} active{{/active}}">
                                    <a className="animsition-link" href="{{dest 'layouts/menubar-flipped.html'}}">
                                    <span className="site-menu-title">Menubar Flipped</span>
                                    </a>
                                </li>
                                <li className="site-menu-item{{#active 'layouts/menubar-native-scrolling.html'}} active{{/active}}">
                                    <a className="animsition-link" href="{{dest 'layouts/menubar-native-scrolling.html'}}">
                                    <span className="site-menu-title">Menubar Native Scrolling</span>
                                    </a>
                                </li>
                                <li className="site-menu-item{{#active 'layouts/bordered-header.html'}} active{{/active}}">
                                    <a className="animsition-link" href="{{dest 'layouts/bordered-header.html'}}">
                                    <span className="site-menu-title">Bordered Header</span>
                                    </a>
                                </li>
                                <li className="site-menu-item{{#active 'layouts/page-aside-fixed.html'}} active{{/active}}">
                                    <a className="animsition-link" href="{{dest 'layouts/page-aside-fixed.html'}}">
                                    <span className="site-menu-title">Page Aside Fixed</span>
                                    </a>
                                </li>
                                </ul>
                            </li>
                            <li className="site-menu-item has-sub{{#active 'pages'}} active open{{/active}}">
                                <a href="javascript:void(0)">
                                <i className="site-menu-icon wb-file" aria-hidden="true"></i>
                                <span className="site-menu-title">Pages</span>
                                <span className="site-menu-arrow"></span>
                                </a>
                                <ul className="site-menu-sub">
                                <li className="site-menu-item has-sub{{#active 'pages/error'}} active open{{/active}}">
                                    <a href="javascript:void(0)">
                                    <span className="site-menu-title">Errors</span>
                                    <span className="site-menu-arrow"></span>
                                    </a>
                                    <ul className="site-menu-sub">
                                    <li className="site-menu-item{{#active 'pages/error-400.html'}} active{{/active}}">
                                        <a className="animsition-link" href="{{dest 'pages/error-400.html'}}">
                                        <span className="site-menu-title">400</span>
                                        </a>
                                    </li>
                                    <li className="site-menu-item{{#active 'pages/error-403.html'}} active{{/active}}">
                                        <a className="animsition-link" href="{{dest 'pages/error-403.html'}}">
                                        <span className="site-menu-title">403</span>
                                        </a>
                                    </li>
                                    <li className="site-menu-item{{#active 'pages/error-404.html'}} active{{/active}}">
                                        <a className="animsition-link" href="{{dest 'pages/error-404.html'}}">
                                        <span className="site-menu-title">404</span>
                                        </a>
                                    </li>
                                    <li className="site-menu-item{{#active 'pages/error-500.html'}} active{{/active}}">
                                        <a className="animsition-link" href="{{dest 'pages/error-500.html'}}">
                                        <span className="site-menu-title">500</span>
                                        </a>
                                    </li>
                                    <li className="site-menu-item{{#active 'pages/error-503.html'}} active{{/active}}">
                                        <a className="animsition-link" href="{{dest 'pages/error-503.html'}}">
                                        <span className="site-menu-title">503</span>
                                        </a>
                                    </li>
                                    </ul>
                                </li>
                                <li className="site-menu-item{{#active 'pages/faq.html'}} active{{/active}}">
                                    <a className="animsition-link" href="{{dest 'pages/faq.html'}}">
                                    <span className="site-menu-title">FAQ</span>
                                    </a>
                                </li>
                                <li className="site-menu-item{{#active 'pages/gallery.html'}} active{{/active}}">
                                    <a className="animsition-link" href="{{dest 'pages/gallery.html'}}">
                                    <span className="site-menu-title">Gallery</span>
                                    </a>
                                </li>
                                <li className="site-menu-item{{#active 'pages/gallery-grid.html'}} active{{/active}}">
                                    <a className="animsition-link" href="{{dest 'pages/gallery-grid.html'}}">
                                    <span className="site-menu-title">Gallery Grid</span>
                                    </a>
                                </li>
                                <li className="site-menu-item{{#active 'pages/search-result.html'}} active{{/active}}">
                                    <a className="animsition-link" href="{{dest 'pages/search-result.html'}}">
                                    <span className="site-menu-title">Search Result</span>
                                    </a>
                                </li>
                                <li className="site-menu-item has-sub{{#active 'pages/map'}} active open{{/active}}">
                                    <a href="javascript:void(0)">
                                    <span className="site-menu-title">Maps</span>
                                    <span className="site-menu-arrow"></span>
                                    </a>
                                    <ul className="site-menu-sub">
                                    <li className="site-menu-item{{#active 'pages/map-google.html'}} active{{/active}}">
                                        <a className="animsition-link" href="{{dest 'pages/map-google.html'}}">
                                        <span className="site-menu-title">Google Maps</span>
                                        </a>
                                    </li>
                                    <li className="site-menu-item{{#active 'pages/map-vector.html'}} active{{/active}}">
                                        <a className="animsition-link" href="{{dest 'pages/map-vector.html'}}">
                                        <span className="site-menu-title">Vector Maps</span>
                                        </a>
                                    </li>
                                    </ul>
                                </li>
                                <li className="site-menu-item{{#active 'pages/maintenance.html'}} active{{/active}}">
                                    <a className="animsition-link" href="{{dest 'pages/maintenance.html'}}">
                                    <span className="site-menu-title">Maintenance</span>
                                    </a>
                                </li>
                                <li className="site-menu-item{{#active 'pages/forgot-password.html'}} active{{/active}}">
                                    <a className="animsition-link" href="{{dest 'pages/forgot-password.html'}}">
                                    <span className="site-menu-title">Forgot Password</span>
                                    </a>
                                </li>
                                <li className="site-menu-item{{#active 'pages/lockscreen.html'}} active{{/active}}">
                                    <a className="animsition-link" href="{{dest 'pages/lockscreen.html'}}">
                                    <span className="site-menu-title">Lockscreen</span>
                                    </a>
                                </li>
                                <li className="site-menu-item{{#active 'pages/login.html'}} active{{/active}}">
                                    <a className="animsition-link" href="{{dest 'pages/login.html'}}">
                                    <span className="site-menu-title">Login</span>
                                    </a>
                                </li>
                                <li className="site-menu-item{{#active 'pages/register.html'}} active{{/active}}">
                                    <a className="animsition-link" href="{{dest 'pages/register.html'}}">
                                    <span className="site-menu-title">Register</span>
                                    </a>
                                </li>
                                <li className="site-menu-item{{#active 'pages/login-v2.html'}} active{{/active}}">
                                    <a className="animsition-link" href="{{dest 'pages/login-v2.html'}}">
                                    <span className="site-menu-title">Login V2</span>
                                    </a>
                                </li>
                                <li className="site-menu-item{{#active 'pages/register-v2.html'}} active{{/active}}">
                                    <a className="animsition-link" href="{{dest 'pages/register-v2.html'}}">
                                    <span className="site-menu-title">Register V2</span>
                                    <div className="site-menu-label">
                                        <span className="label label-info label-round">new</span>
                                    </div>
                                    </a>
                                </li>
                                <li className="site-menu-item{{#active 'pages/login-v3.html'}} active{{/active}}">
                                    <a className="animsition-link" href="{{dest 'pages/login-v3.html'}}">
                                    <span className="site-menu-title">Login V3</span>
                                    </a>
                                </li>
                                <li className="site-menu-item{{#active 'pages/register-v3.html'}} active{{/active}}">
                                    <a className="animsition-link" href="{{dest 'pages/register-v3.html'}}">
                                    <span className="site-menu-title">Register V3</span>
                                    </a>
                                </li>
                                <li className="site-menu-item{{#active 'pages/user.html'}} active{{/active}}">
                                    <a className="animsition-link" href="{{dest 'pages/user.html'}}">
                                    <span className="site-menu-title">User List</span>
                                    </a>
                                </li>
                                <li className="site-menu-item{{#active 'pages/invoice.html'}} active{{/active}}">
                                    <a className="animsition-link" href="{{dest 'pages/invoice.html'}}">
                                    <span className="site-menu-title">Invoice</span>
                                    </a>
                                </li>
                                <li className="site-menu-item{{#active 'pages/blank.html'}} active{{/active}}">
                                    <a className="animsition-link" href="{{dest 'pages/blank.html'}}">
                                    <span className="site-menu-title">Blank Page</span>
                                    </a>
                                </li>
                                <li className="site-menu-item{{#active 'pages/email.html'}} active{{/active}}">
                                    <a className="animsition-link" href="{{dest 'pages/email.html'}}">
                                    <span className="site-menu-title">Email</span>
                                    </a>
                                </li>
                                <li className="site-menu-item{{#active 'pages/code-editor.html'}} active{{/active}}">
                                    <a className="animsition-link" href="{{dest 'pages/code-editor.html'}}">
                                    <span className="site-menu-title">Code Editor</span>
                                    </a>
                                </li>
                                <li className="site-menu-item{{#active 'pages/profile.html'}} active{{/active}}">
                                    <a className="animsition-link" href="{{dest 'pages/profile.html'}}">
                                    <span className="site-menu-title">Profile</span>
                                    </a>
                                </li>
                                <li className="site-menu-item{{#active 'pages/site-map.html'}} active{{/active}}">
                                    <a className="animsition-link" href="{{dest 'pages/site-map.html'}}">
                                    <span className="site-menu-title">Sitemap</span>
                                    </a>
                                </li>
                                </ul>
                            </li>
                            <li className="site-menu-category">Elements</li>
                            <li className="site-menu-item has-sub{{#active 'uikit'}} active open{{/active}}">
                                <a href="javascript:void(0)">
                                <i className="site-menu-icon wb-bookmark" aria-hidden="true"></i>
                                <span className="site-menu-title">Basic UI</span>
                                <span className="site-menu-arrow"></span>
                                </a>
                                <ul className="site-menu-sub">
                                <li className="site-menu-item has-sub{{#active 'uikit/panel'}} active open{{/active}}">
                                    <a href="javascript:void(0)">
                                    <span className="site-menu-title">Panel</span>
                                    <span className="site-menu-arrow"></span>
                                    </a>
                                    <ul className="site-menu-sub">
                                    <li className="site-menu-item{{#active 'uikit/panel-structure.html'}} active{{/active}}">
                                        <a className="animsition-link" href="{{dest 'uikit/panel-structure.html'}}">
                                        <span className="site-menu-title">Panel Structure</span>
                                        </a>
                                    </li>
                                    <li className="site-menu-item{{#active 'uikit/panel-actions.html'}} active{{/active}}">
                                        <a className="animsition-link" href="{{dest 'uikit/panel-actions.html'}}">
                                        <span className="site-menu-title">Panel Actions</span>
                                        </a>
                                    </li>
                                    <li className="site-menu-item{{#active 'uikit/panel-portlets.html'}} active{{/active}}">
                                        <a className="animsition-link" href="{{dest 'uikit/panel-portlets.html'}}">
                                        <span className="site-menu-title">Panel Portlets</span>
                                        </a>
                                    </li>
                                    </ul>
                                </li>
                                <li className="site-menu-item{{#active 'uikit/buttons.html'}} active{{/active}}">
                                    <a className="animsition-link" href="{{dest 'uikit/buttons.html'}}">
                                    <span className="site-menu-title">Buttons</span>
                                    </a>
                                </li>
                                <li className="site-menu-item{{#active 'uikit/dropdowns.html'}} active{{/active}}">
                                    <a className="animsition-link" href="{{dest 'uikit/dropdowns.html'}}">
                                    <span className="site-menu-title">Dropdowns</span>
                                    </a>
                                </li>
                                <li className="site-menu-item{{#active 'uikit/icons.html'}} active{{/active}}">
                                    <a className="animsition-link" href="{{dest 'uikit/icons.html'}}">
                                    <span className="site-menu-title">Icons</span>
                                    </a>
                                </li>
                                <li className="site-menu-item{{#active 'uikit/list.html'}} active{{/active}}">
                                    <a className="animsition-link" href="{{dest 'uikit/list.html'}}">
                                    <span className="site-menu-title">List</span>
                                    </a>
                                </li>
                                <li className="site-menu-item{{#active 'uikit/tooltip-popover.html'}} active{{/active}}">
                                    <a className="animsition-link" href="{{dest 'uikit/tooltip-popover.html'}}">
                                    <span className="site-menu-title">Tooltip &amp; Popover</span>
                                    </a>
                                </li>
                                <li className="site-menu-item{{#active 'uikit/modals.html'}} active{{/active}}">
                                    <a className="animsition-link" href="{{dest 'uikit/modals.html'}}">
                                    <span className="site-menu-title">Modals</span>
                                    </a>
                                </li>
                                <li className="site-menu-item{{#active 'uikit/tabs-accordions.html'}} active{{/active}}">
                                    <a className="animsition-link" href="{{dest 'uikit/tabs-accordions.html'}}">
                                    <span className="site-menu-title">Tabs &amp; Accordions</span>
                                    </a>
                                </li>
                                <li className="site-menu-item{{#active 'uikit/images.html'}} active{{/active}}">
                                    <a className="animsition-link" href="{{dest 'uikit/images.html'}}">
                                    <span className="site-menu-title">Images</span>
                                    </a>
                                </li>
                                <li className="site-menu-item{{#active 'uikit/badges-labels.html'}} active{{/active}}">
                                    <a className="animsition-link" href="{{dest 'uikit/badges-labels.html'}}">
                                    <span className="site-menu-title">Badges &amp; Labels</span>
                                    </a>
                                </li>
                                <li className="site-menu-item{{#active 'uikit/progress-bars.html'}} active{{/active}}">
                                    <a className="animsition-link" href="{{dest 'uikit/progress-bars.html'}}">
                                    <span className="site-menu-title">Progress Bars</span>
                                    </a>
                                </li>
                                <li className="site-menu-item{{#active 'uikit/carousel.html'}} active{{/active}}">
                                    <a className="animsition-link" href="{{dest 'uikit/carousel.html'}}">
                                    <span className="site-menu-title">Carousel</span>
                                    </a>
                                </li>
                                <li className="site-menu-item{{#active 'uikit/typography.html'}} active{{/active}}">
                                    <a className="animsition-link" href="{{dest 'uikit/typography.html'}}">
                                    <span className="site-menu-title">Typography</span>
                                    </a>
                                </li>
                                <li className="site-menu-item{{#active 'uikit/colors.html'}} active{{/active}}">
                                    <a className="animsition-link" href="{{dest 'uikit/colors.html'}}">
                                    <span className="site-menu-title">Colors</span>
                                    </a>
                                </li>
                                <li className="site-menu-item{{#active 'uikit/utilities.html'}} active{{/active}}">
                                    <a className="animsition-link" href="{{dest 'uikit/utilities.html'}}">
                                    <span className="site-menu-title">Utilties</span>
                                    </a>
                                </li>
                                </ul>
                            </li>
                            <li className="site-menu-item has-sub{{#active 'advanced'}} active open{{/active}}">
                                <a href="javascript:void(0)">
                                <i className="site-menu-icon wb-hammer" aria-hidden="true"></i>
                                <span className="site-menu-title">Advanced UI</span>
                                <span className="site-menu-arrow"></span>
                                </a>
                                <ul className="site-menu-sub">
                                <li className="site-menu-item hidden-xs site-tour-trigger{{#active 'undefined'}} active{{/active}}">
                                    <a href="javascript:void(0)">
                                    <span className="site-menu-title">Tour</span>
                                    </a>
                                </li>
                                <li className="site-menu-item{{#active 'advanced/animation.html'}} active{{/active}}">
                                    <a className="animsition-link" href="{{dest 'advanced/animation.html'}}">
                                    <span className="site-menu-title">Animation</span>
                                    </a>
                                </li>
                                <li className="site-menu-item{{#active 'advanced/highlight.html'}} active{{/active}}">
                                    <a className="animsition-link" href="{{dest 'advanced/highlight.html'}}">
                                    <span className="site-menu-title">Highlight</span>
                                    </a>
                                </li>
                                <li className="site-menu-item{{#active 'advanced/lightbox.html'}} active{{/active}}">
                                    <a className="animsition-link" href="{{dest 'advanced/lightbox.html'}}">
                                    <span className="site-menu-title">Lightbox</span>
                                    </a>
                                </li>
                                <li className="site-menu-item{{#active 'advanced/scrollable.html'}} active{{/active}}">
                                    <a className="animsition-link" href="{{dest 'advanced/scrollable.html'}}">
                                    <span className="site-menu-title">Scrollable</span>
                                    </a>
                                </li>
                                <li className="site-menu-item{{#active 'advanced/rating.html'}} active{{/active}}">
                                    <a className="animsition-link" href="{{dest 'advanced/rating.html'}}">
                                    <span className="site-menu-title">Rating</span>
                                    </a>
                                </li>
                                <li className="site-menu-item{{#active 'advanced/context-menu.html'}} active{{/active}}">
                                    <a className="animsition-link" href="{{dest 'advanced/context-menu.html'}}">
                                    <span className="site-menu-title">Context Menu</span>
                                    </a>
                                </li>
                                <li className="site-menu-item{{#active 'advanced/alertify.html'}} active{{/active}}">
                                    <a className="animsition-link" href="{{dest 'advanced/alertify.html'}}">
                                    <span className="site-menu-title">Alertify</span>
                                    </a>
                                </li>
                                <li className="site-menu-item{{#active 'advanced/masonry.html'}} active{{/active}}">
                                    <a className="animsition-link" href="{{dest 'advanced/masonry.html'}}">
                                    <span className="site-menu-title">Masonry</span>
                                    </a>
                                </li>
                                <li className="site-menu-item{{#active 'advanced/treeview.html'}} active{{/active}}">
                                    <a className="animsition-link" href="{{dest 'advanced/treeview.html'}}">
                                    <span className="site-menu-title">Treeview</span>
                                    </a>
                                </li>
                                <li className="site-menu-item{{#active 'advanced/toastr.html'}} active{{/active}}">
                                    <a className="animsition-link" href="{{dest 'advanced/toastr.html'}}">
                                    <span className="site-menu-title">Toastr</span>
                                    </a>
                                </li>
                                <li className="site-menu-item{{#active 'advanced/maps-vector.html'}} active{{/active}}">
                                    <a className="animsition-link" href="{{dest 'advanced/maps-vector.html'}}">
                                    <span className="site-menu-title">Vector Maps</span>
                                    </a>
                                </li>
                                <li className="site-menu-item{{#active 'advanced/maps-google.html'}} active{{/active}}">
                                    <a className="animsition-link" href="{{dest 'advanced/maps-google.html'}}">
                                    <span className="site-menu-title">Google Maps</span>
                                    </a>
                                </li>
                                <li className="site-menu-item{{#active 'advanced/sortable-nestable.html'}} active{{/active}}">
                                    <a className="animsition-link" href="{{dest 'advanced/sortable-nestable.html'}}">
                                    <span className="site-menu-title">Sortable &amp; Nestable</span>
                                    </a>
                                </li>
                                <li className="site-menu-item{{#active 'advanced/bootbox-sweetalert.html'}} active{{/active}}">
                                    <a className="animsition-link" href="{{dest 'advanced/bootbox-sweetalert.html'}}">
                                    <span className="site-menu-title">Bootbox &amp; Sweetalert</span>
                                    </a>
                                </li>
                                </ul>
                            </li>
                            <li className="site-menu-item has-sub{{#active 'structure'}} active open{{/active}}">
                                <a href="javascript:void(0)">
                                <i className="site-menu-icon wb-plugin" aria-hidden="true"></i>
                                <span className="site-menu-title">Structure</span>
                                <span className="site-menu-arrow"></span>
                                </a>
                                <ul className="site-menu-sub">
                                <li className="site-menu-item{{#active 'structure/alerts.html'}} active{{/active}}">
                                    <a className="animsition-link" href="{{dest 'structure/alerts.html'}}">
                                    <span className="site-menu-title">Alerts</span>
                                    </a>
                                </li>
                                <li className="site-menu-item{{#active 'structure/ribbon.html'}} active{{/active}}">
                                    <a className="animsition-link" href="{{dest 'structure/ribbon.html'}}">
                                    <span className="site-menu-title">Ribbon</span>
                                    </a>
                                </li>
                                <li className="site-menu-item{{#active 'structure/pricing-tables.html'}} active{{/active}}">
                                    <a className="animsition-link" href="{{dest 'structure/pricing-tables.html'}}">
                                    <span className="site-menu-title">Pricing Tables</span>
                                    </a>
                                </li>
                                <li className="site-menu-item{{#active 'structure/overlay.html'}} active{{/active}}">
                                    <a className="animsition-link" href="{{dest 'structure/overlay.html'}}">
                                    <span className="site-menu-title">Overlay</span>
                                    </a>
                                </li>
                                <li className="site-menu-item{{#active 'structure/cover.html'}} active{{/active}}">
                                    <a className="animsition-link" href="{{dest 'structure/cover.html'}}">
                                    <span className="site-menu-title">Cover</span>
                                    </a>
                                </li>
                                <li className="site-menu-item{{#active 'structure/timeline-simple.html'}} active{{/active}}">
                                    <a className="animsition-link" href="{{dest 'structure/timeline-simple.html'}}">
                                    <span className="site-menu-title">Simple Timeline</span>
                                    </a>
                                </li>
                                <li className="site-menu-item{{#active 'structure/timeline.html'}} active{{/active}}">
                                    <a className="animsition-link" href="{{dest 'structure/timeline.html'}}">
                                    <span className="site-menu-title">Timeline</span>
                                    </a>
                                </li>
                                <li className="site-menu-item{{#active 'structure/step.html'}} active{{/active}}">
                                    <a className="animsition-link" href="{{dest 'structure/step.html'}}">
                                    <span className="site-menu-title">Step</span>
                                    </a>
                                </li>
                                <li className="site-menu-item{{#active 'structure/comments.html'}} active{{/active}}">
                                    <a className="animsition-link" href="{{dest 'structure/comments.html'}}">
                                    <span className="site-menu-title">Comments</span>
                                    </a>
                                </li>
                                <li className="site-menu-item{{#active 'structure/media.html'}} active{{/active}}">
                                    <a className="animsition-link" href="{{dest 'structure/media.html'}}">
                                    <span className="site-menu-title">Media</span>
                                    </a>
                                </li>
                                <li className="site-menu-item{{#active 'structure/chat.html'}} active{{/active}}">
                                    <a className="animsition-link" href="{{dest 'structure/chat.html'}}">
                                    <span className="site-menu-title">Chat</span>
                                    </a>
                                </li>
                                <li className="site-menu-item{{#active 'structure/testimonials.html'}} active{{/active}}">
                                    <a className="animsition-link" href="{{dest 'structure/testimonials.html'}}">
                                    <span className="site-menu-title">Testimonials</span>
                                    </a>
                                </li>
                                <li className="site-menu-item{{#active 'structure/nav.html'}} active{{/active}}">
                                    <a className="animsition-link" href="{{dest 'structure/nav.html'}}">
                                    <span className="site-menu-title">Nav</span>
                                    </a>
                                </li>
                                <li className="site-menu-item{{#active 'structure/navbars.html'}} active{{/active}}">
                                    <a className="animsition-link" href="{{dest 'structure/navbars.html'}}">
                                    <span className="site-menu-title">Navbars</span>
                                    </a>
                                </li>
                                <li className="site-menu-item{{#active 'structure/blockquotes.html'}} active{{/active}}">
                                    <a className="animsition-link" href="{{dest 'structure/blockquotes.html'}}">
                                    <span className="site-menu-title">Blockquotes</span>
                                    </a>
                                </li>
                                <li className="site-menu-item{{#active 'structure/pagination.html'}} active{{/active}}">
                                    <a className="animsition-link" href="{{dest 'structure/pagination.html'}}">
                                    <span className="site-menu-title">Pagination</span>
                                    </a>
                                </li>
                                <li className="site-menu-item{{#active 'structure/breadcrumbs.html'}} active{{/active}}">
                                    <a className="animsition-link" href="{{dest 'structure/breadcrumbs.html'}}">
                                    <span className="site-menu-title">Breadcrumbs</span>
                                    </a>
                                </li>
                                </ul>
                            </li>
                            <li className="site-menu-item has-sub{{#active 'widgets'}} active open{{/active}}">
                                <a href="javascript:void(0)">
                                <i className="site-menu-icon wb-extension" aria-hidden="true"></i>
                                <span className="site-menu-title">Widgets</span>
                                <span className="site-menu-arrow"></span>
                                </a>
                                <ul className="site-menu-sub">
                                <li className="site-menu-item{{#active 'widgets/statistics.html'}} active{{/active}}">
                                    <a className="animsition-link" href="{{dest 'widgets/statistics.html'}}">
                                    <span className="site-menu-title">Statistics Widgets</span>
                                    </a>
                                </li>
                                <li className="site-menu-item{{#active 'widgets/data.html'}} active{{/active}}">
                                    <a className="animsition-link" href="{{dest 'widgets/data.html'}}">
                                    <span className="site-menu-title">Data Widgets</span>
                                    </a>
                                </li>
                                <li className="site-menu-item{{#active 'widgets/blog.html'}} active{{/active}}">
                                    <a className="animsition-link" href="{{dest 'widgets/blog.html'}}">
                                    <span className="site-menu-title">Blog Widgets</span>
                                    </a>
                                </li>
                                <li className="site-menu-item{{#active 'widgets/chart.html'}} active{{/active}}">
                                    <a className="animsition-link" href="{{dest 'widgets/chart.html'}}">
                                    <span className="site-menu-title">Chart Widgets</span>
                                    </a>
                                </li>
                                <li className="site-menu-item{{#active 'widgets/social.html'}} active{{/active}}">
                                    <a className="animsition-link" href="{{dest 'widgets/social.html'}}">
                                    <span className="site-menu-title">Social Widgets</span>
                                    </a>
                                </li>
                                <li className="site-menu-item{{#active 'widgets/weather.html'}} active{{/active}}">
                                    <a className="animsition-link" href="{{dest 'widgets/weather.html'}}">
                                    <span className="site-menu-title">Weather Widgets</span>
                                    </a>
                                </li>
                                </ul>
                            </li>
                            <li className="site-menu-item has-sub{{#active 'forms'}} active open{{/active}}">
                                <a href="javascript:void(0)">
                                <i className="site-menu-icon wb-library" aria-hidden="true"></i>
                                <span className="site-menu-title">Forms</span>
                                <span className="site-menu-arrow"></span>
                                </a>
                                <ul className="site-menu-sub">
                                <li className="site-menu-item{{#active 'forms/general.html'}} active{{/active}}">
                                    <a className="animsition-link" href="{{dest 'forms/general.html'}}">
                                    <span className="site-menu-title">General Elements</span>
                                    </a>
                                </li>
                                <li className="site-menu-item{{#active 'forms/material.html'}} active{{/active}}">
                                    <a className="animsition-link" href="{{dest 'forms/material.html'}}">
                                    <span className="site-menu-title">Material Elements</span>
                                    </a>
                                </li>
                                <li className="site-menu-item{{#active 'forms/advanced.html'}} active{{/active}}">
                                    <a className="animsition-link" href="{{dest 'forms/advanced.html'}}">
                                    <span className="site-menu-title">Advanced Elements</span>
                                    </a>
                                </li>
                                <li className="site-menu-item{{#active 'forms/layouts.html'}} active{{/active}}">
                                    <a className="animsition-link" href="{{dest 'forms/layouts.html'}}">
                                    <span className="site-menu-title">Form Layouts</span>
                                    </a>
                                </li>
                                <li className="site-menu-item{{#active 'forms/wizard.html'}} active{{/active}}">
                                    <a className="animsition-link" href="{{dest 'forms/wizard.html'}}">
                                    <span className="site-menu-title">Form Wizard</span>
                                    </a>
                                </li>
                                <li className="site-menu-item{{#active 'forms/validation.html'}} active{{/active}}">
                                    <a className="animsition-link" href="{{dest 'forms/validation.html'}}">
                                    <span className="site-menu-title">Form Validation</span>
                                    </a>
                                </li>
                                <li className="site-menu-item{{#active 'forms/masks.html'}} active{{/active}}">
                                    <a className="animsition-link" href="{{dest 'forms/masks.html'}}">
                                    <span className="site-menu-title">Form Masks</span>
                                    </a>
                                </li>
                                <li className="site-menu-item{{#active 'forms/editable.html'}} active{{/active}}">
                                    <a className="animsition-link" href="{{dest 'forms/editable.html'}}">
                                    <span className="site-menu-title">Form Editable</span>
                                    </a>
                                </li>
                                <li className="site-menu-item has-sub{{#active 'forms/editor'}} active open{{/active}}">
                                    <a href="javascript:void(0)">
                                    <span className="site-menu-title">Editors</span>
                                    <span className="site-menu-arrow"></span>
                                    </a>
                                    <ul className="site-menu-sub">
                                    <li className="site-menu-item{{#active 'forms/editor-summernote.html'}} active{{/active}}">
                                        <a className="animsition-link" href="{{dest 'forms/editor-summernote.html'}}">
                                        <span className="site-menu-title">Summernote</span>
                                        </a>
                                    </li>
                                    <li className="site-menu-item{{#active 'forms/editor-markdown.html'}} active{{/active}}">
                                        <a className="animsition-link" href="{{dest 'forms/editor-markdown.html'}}">
                                        <span className="site-menu-title">Markdown</span>
                                        </a>
                                    </li>
                                    <li className="site-menu-item{{#active 'forms/editor-ace.html'}} active{{/active}}">
                                        <a className="animsition-link" href="{{dest 'forms/editor-ace.html'}}">
                                        <span className="site-menu-title">Ace Editor</span>
                                        </a>
                                    </li>
                                    </ul>
                                </li>
                                <li className="site-menu-item{{#active 'forms/image-cropping.html'}} active{{/active}}">
                                    <a className="animsition-link" href="{{dest 'forms/image-cropping.html'}}">
                                    <span className="site-menu-title">Image Cropping</span>
                                    </a>
                                </li>
                                <li className="site-menu-item{{#active 'forms/file-uploads.html'}} active{{/active}}">
                                    <a className="animsition-link" href="{{dest 'forms/file-uploads.html'}}">
                                    <span className="site-menu-title">File Uploads</span>
                                    </a>
                                </li>
                                </ul>
                            </li>
                            <li className="site-menu-item has-sub{{#active 'tables'}} active open{{/active}}">
                                <a href="javascript:void(0)">
                                <i className="site-menu-icon wb-table" aria-hidden="true"></i>
                                <span className="site-menu-title">Tables</span>
                                <span className="site-menu-arrow"></span>
                                </a>
                                <ul className="site-menu-sub">
                                <li className="site-menu-item{{#active 'tables/basic.html'}} active{{/active}}">
                                    <a className="animsition-link" href="{{dest 'tables/basic.html'}}">
                                    <span className="site-menu-title">Basic Tables</span>
                                    </a>
                                </li>
                                <li className="site-menu-item{{#active 'tables/bootstrap.html'}} active{{/active}}">
                                    <a className="animsition-link" href="{{dest 'tables/bootstrap.html'}}">
                                    <span className="site-menu-title">Bootstrap Tables</span>
                                    </a>
                                </li>
                                <li className="site-menu-item{{#active 'tables/floatthead.html'}} active{{/active}}">
                                    <a className="animsition-link" href="{{dest 'tables/floatthead.html'}}">
                                    <span className="site-menu-title">floatThead</span>
                                    </a>
                                </li>
                                <li className="site-menu-item{{#active 'tables/responsive.html'}} active{{/active}}">
                                    <a className="animsition-link" href="{{dest 'tables/responsive.html'}}">
                                    <span className="site-menu-title">Responsive Tables</span>
                                    </a>
                                </li>
                                <li className="site-menu-item{{#active 'tables/editable.html'}} active{{/active}}">
                                    <a className="animsition-link" href="{{dest 'tables/editable.html'}}">
                                    <span className="site-menu-title">Editable Tables</span>
                                    </a>
                                </li>
                                <li className="site-menu-item{{#active 'tables/jsgrid.html'}} active{{/active}}">
                                    <a className="animsition-link" href="{{dest 'tables/jsgrid.html'}}">
                                    <span className="site-menu-title">jsGrid</span>
                                    </a>
                                </li>
                                <li className="site-menu-item{{#active 'tables/footable.html'}} active{{/active}}">
                                    <a className="animsition-link" href="{{dest 'tables/footable.html'}}">
                                    <span className="site-menu-title">FooTable</span>
                                    </a>
                                </li>
                                <li className="site-menu-item{{#active 'tables/datatable.html'}} active{{/active}}">
                                    <a className="animsition-link" href="{{dest 'tables/datatable.html'}}">
                                    <span className="site-menu-title">DataTables</span>
                                    </a>
                                </li>
                                </ul>
                            </li>
                            <li className="site-menu-item has-sub{{#active 'charts'}} active open{{/active}}">
                                <a href="javascript:void(0)">
                                <i className="site-menu-icon wb-pie-chart" aria-hidden="true"></i>
                                <span className="site-menu-title">Chart</span>
                                <span className="site-menu-arrow"></span>
                                </a>
                                <ul className="site-menu-sub">
                                <li className="site-menu-item{{#active 'charts/chartjs.html'}} active{{/active}}">
                                    <a className="animsition-link" href="{{dest 'charts/chartjs.html'}}">
                                    <span className="site-menu-title">Chart.js</span>
                                    </a>
                                </li>
                                <li className="site-menu-item{{#active 'charts/gauges.html'}} active{{/active}}">
                                    <a className="animsition-link" href="{{dest 'charts/gauges.html'}}">
                                    <span className="site-menu-title">Gauges</span>
                                    </a>
                                </li>
                                <li className="site-menu-item{{#active 'charts/flot.html'}} active{{/active}}">
                                    <a className="animsition-link" href="{{dest 'charts/flot.html'}}">
                                    <span className="site-menu-title">Flot</span>
                                    </a>
                                </li>
                                <li className="site-menu-item{{#active 'charts/peity.html'}} active{{/active}}">
                                    <a className="animsition-link" href="{{dest 'charts/peity.html'}}">
                                    <span className="site-menu-title">Peity</span>
                                    </a>
                                </li>
                                <li className="site-menu-item{{#active 'charts/sparkline.html'}} active{{/active}}">
                                    <a className="animsition-link" href="{{dest 'charts/sparkline.html'}}">
                                    <span className="site-menu-title">Sparkline</span>
                                    </a>
                                </li>
                                <li className="site-menu-item{{#active 'charts/morris.html'}} active{{/active}}">
                                    <a className="animsition-link" href="{{dest 'charts/morris.html'}}">
                                    <span className="site-menu-title">Morris</span>
                                    </a>
                                </li>
                                <li className="site-menu-item{{#active 'charts/chartist.html'}} active{{/active}}">
                                    <a className="animsition-link" href="{{dest 'charts/chartist.html'}}">
                                    <span className="site-menu-title">Chartist.js</span>
                                    </a>
                                </li>
                                <li className="site-menu-item{{#active 'charts/rickshaw.html'}} active{{/active}}">
                                    <a className="animsition-link" href="{{dest 'charts/rickshaw.html'}}">
                                    <span className="site-menu-title">Rickshaw</span>
                                    </a>
                                </li>
                                <li className="site-menu-item{{#active 'charts/pie-progress.html'}} active{{/active}}">
                                    <a className="animsition-link" href="{{dest 'charts/pie-progress.html'}}">
                                    <span className="site-menu-title">Pie Progress</span>
                                    </a>
                                </li>
                                <li className="site-menu-item{{#active 'charts/c3.html'}} active{{/active}}">
                                    <a className="animsition-link" href="{{dest 'charts/c3.html'}}">
                                    <span className="site-menu-title">C3</span>
                                    </a>
                                </li>
                                </ul>
                            </li>
                            <li className="site-menu-category">Apps</li>
                            <li className="site-menu-item has-sub{{#active 'apps'}} active open{{/active}}">
                                <a href="javascript:void(0)">
                                <i className="site-menu-icon wb-grid-4" aria-hidden="true"></i>
                                <span className="site-menu-title">Apps</span>
                                <span className="site-menu-arrow"></span>
                                </a>
                                <ul className="site-menu-sub">
                                <li className="site-menu-item{{#active 'apps/contacts/contacts.html'}} active{{/active}}">
                                    <a className="animsition-link" href="{{dest 'apps/contacts/contacts.html'}}">
                                    <span className="site-menu-title">Contacts</span>
                                    </a>
                                </li>
                                <li className="site-menu-item{{#active 'apps/calendar/calendar.html'}} active{{/active}}">
                                    <a className="animsition-link" href="{{dest 'apps/calendar/calendar.html'}}">
                                    <span className="site-menu-title">Calendar</span>
                                    </a>
                                </li>
                                <li className="site-menu-item{{#active 'apps/notebook/notebook.html'}} active{{/active}}">
                                    <a className="animsition-link" href="{{dest 'apps/notebook/notebook.html'}}">
                                    <span className="site-menu-title">Notebook</span>
                                    </a>
                                </li>
                                <li className="site-menu-item{{#active 'apps/taskboard/taskboard.html'}} active{{/active}}">
                                    <a className="animsition-link" href="{{dest 'apps/taskboard/taskboard.html'}}">
                                    <span className="site-menu-title">Taskboard</span>
                                    </a>
                                </li>
                                <li className="site-menu-item has-sub{{#active 'apps/documents'}} active open{{/active}}">
                                    <a href="javascript:void(0)">
                                    <span className="site-menu-title">Documents</span>
                                    <span className="site-menu-arrow"></span>
                                    </a>
                                    <ul className="site-menu-sub">
                                    <li className="site-menu-item{{#active 'apps/documents/articles.html'}} active{{/active}}">
                                        <a className="animsition-link" href="{{dest 'apps/documents/articles.html'}}">
                                        <span className="site-menu-title">Articles</span>
                                        </a>
                                    </li>
                                    <li className="site-menu-item{{#active 'apps/documents/categories.html'}} active{{/active}}">
                                        <a className="animsition-link" href="{{dest 'apps/documents/categories.html'}}">
                                        <span className="site-menu-title">Categories</span>
                                        </a>
                                    </li>
                                    <li className="site-menu-item{{#active 'apps/documents/article.html'}} active{{/active}}">
                                        <a className="animsition-link" href="{{dest 'apps/documents/article.html'}}">
                                        <span className="site-menu-title">Article</span>
                                        </a>
                                    </li>
                                    </ul>
                                </li>
                                <li className="site-menu-item{{#active 'apps/forum/forum.html'}} active{{/active}}">
                                    <a className="animsition-link" href="{{dest 'apps/forum/forum.html'}}">
                                    <span className="site-menu-title">Forum</span>
                                    </a>
                                </li>
                                <li className="site-menu-item{{#active 'apps/message/message.html'}} active{{/active}}">
                                    <a className="animsition-link" href="{{dest 'apps/message/message.html'}}">
                                    <span className="site-menu-title">Message</span>
                                    </a>
                                </li>
                                <li className="site-menu-item{{#active 'apps/projects/projects.html'}} active{{/active}}">
                                    <a className="animsition-link" href="{{dest 'apps/projects/projects.html'}}">
                                    <span className="site-menu-title">Projects</span>
                                    </a>
                                </li>
                                <li className="site-menu-item{{#active 'apps/mailbox/mailbox.html'}} active{{/active}}">
                                    <a className="animsition-link" href="{{dest 'apps/mailbox/mailbox.html'}}">
                                    <span className="site-menu-title">Mailbox</span>
                                    </a>
                                </li>
                                <li className="site-menu-item{{#active 'apps/media/overview.html'}} active{{/active}}">
                                    <a className="animsition-link" href="{{dest 'apps/media/overview.html'}}">
                                    <span className="site-menu-title">Media</span>
                                    </a>
                                </li>
                                <li className="site-menu-item{{#active 'apps/work/work.html'}} active{{/active}}">
                                    <a className="animsition-link" href="{{dest 'apps/work/work.html'}}">
                                    <span className="site-menu-title">Work</span>
                                    </a>
                                </li>
                                <li className="site-menu-item{{#active 'apps/location/location.html'}} active{{/active}}">
                                    <a className="animsition-link" href="{{dest 'apps/location/location.html'}}">
                                    <span className="site-menu-title">Location</span>
                                    </a>
                                </li>
                                </ul>
                            </li>
                            <li className="site-menu-category">Angular UI</li>
                            <li className="site-menu-item{{#active 'angular/index.html'}} active{{/active}}">
                                <a className="animsition-link" href="{{dest 'angular/index.html'}}">
                                <i className="site-menu-icon bd-angular" aria-hidden="true"></i>
                                <span className="site-menu-title">Angular UI</span>
                                <div className="site-menu-label">
                                    <span className="label label-danger label-round">new</span>
                                </div>
                                </a>
                            </li>
                            </ul>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}

SideMenu.propTypes = {

}

export default SideMenu