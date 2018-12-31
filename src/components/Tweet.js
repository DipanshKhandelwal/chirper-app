import React from 'react'
import { connect } from 'react-redux'
import { formatTweet } from '../utils/helpers'

class Tweet extends React.Component {
  render() {
    const { tweet } = this.props
    console.log(this.props)

    if (tweet === null) {
      return <p>This Tweet doesn't exists</p>
    }

    return (
      <div className='tweet'>
        {tweet.id}
      </div>
    )
  }
}

const mapStateToProps = ({ authedUser, users, tweets }, { id }) => {
  const tweet = tweets[id]
  const parentTweet = tweet ? tweets[tweet.replyingTo] : null

  return {
    authedUser,
    tweet: tweet
      ? formatTweet(tweet, users[tweet.author], authedUser, parentTweet)
      : null
  }
}

export default connect(mapStateToProps)(Tweet)