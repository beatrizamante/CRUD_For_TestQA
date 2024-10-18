import React from 'react'

export default class card extends React.Component {
  render() {
    return (
        <div className="card">
        <img src="path" alt="" />
        <div className="card-title">
          <h1>Title</h1>
          <span>Click here</span>
        </div>
      </div>
    )
  }
}
