import React from 'react'
import ReactDOM  from 'react-dom'

import AdminApp from './admin/AdminApp'

Meteor.startup(() =>{
  ReactDOM.render(<AdminApp />, document.getElementById('render-target'))
})
