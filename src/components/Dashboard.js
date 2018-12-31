import React from 'react'
import { connect } from 'react-redux'

class Dashboard extends React.Component {
  render() {
    console.log(this.props)
    const { tweetsIds } = this.props
    return (
      <div>
        <h3 className='center'>Your Timeline</h3>
        <ul>
          {tweetsIds.map((id) => (
            <li key={id}>
              <div>Tweet Id : {id}</div>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = ({ tweets }) => {
  return {
    tweetsIds: Object.keys(tweets)
      .sort((a, b) => tweets[b].timestamp - tweets[a].timestamp)
  }
}

export default connect(mapStateToProps)(Dashboard)