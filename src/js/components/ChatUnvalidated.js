import React from 'react'
import PropTypes from 'prop-types'

const ChatUnvalidated = (props) => {
  return (
    <div>{props.errorMessage}</div>
  )
}

ChatUnvalidated.propTypes = {
  errorMessage: PropTypes.string.isRequired,
}

export default ChatUnvalidated
