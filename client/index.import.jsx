import AdminApp from './admin/AdminApp'

Meteor.startup(() =>{
  React.render(<AdminApp />, document.getElementById('render-target'))
})
