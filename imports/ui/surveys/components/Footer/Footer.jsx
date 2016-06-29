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
                <div className="col-md-12 text-center">
                  <a href="http://samelogic.com" target="_blank">
                    <img src="/img/samelogic-logo-small-white.png"/>
                  </a>
                </div>
                <div className="col-md-12 small-lite-txt">
                  v{this.state.version}
                </div>
              </div>
            </div>
          </footer>
        )
    }
}
