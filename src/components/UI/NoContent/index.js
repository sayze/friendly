import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types'

const NoContent = ({ icon, message, title }) => (
  <div className="text-center">
    <FontAwesomeIcon className="text-secondary" size="8x" icon={icon} />
    <h4 className="my-4">{title}</h4>
    <p className="text-muted">{message}</p>
  </div>
)

NoContent.defaultProps = {
  message: 'Nothing to be seen here',
  title: 'No Content',
}

NoContent.propTypes = {
  message: PropTypes.string,
  title: PropTypes.string,
  icon: PropTypes.string.isRequired,
}

export default NoContent
