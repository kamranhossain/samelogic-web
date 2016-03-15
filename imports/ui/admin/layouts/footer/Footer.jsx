import React, { Component } from 'react'

export default class Layout extends Component {

  constructor(props){
    super(props)

    this.state = {
      version: '1.0.0'
    }
  }

  render() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
            </div>
            <div className="col-md-4 text-center">
              <a href="http://grik.ly" target="_blank">
                <img src="/img/grikly-logo.png"/>
              </a>
            </div>
            <div className="col-md-4 text-muted text-right">
              {this.state.version}
            </div>
          </div>
         </div>
       </footer>
    )
  }
}
