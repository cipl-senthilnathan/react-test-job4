import React, { Component } from 'react'

export default class Home extends Component {
  render () {
    return (
      <div className="banner" style={{textAlign: 'center',
      backgroundColor: 'rgba(255, 191, 198, 0.95)',
      "height": '150px'}}>
        <div className="container">
        <div>
          <h1 className="logo-font">
              React-Demo-App
          </h1>
          <p>Colan Infotech Private Ltd</p>
        </div>
      </div>
      </div>
    )
  }
}
