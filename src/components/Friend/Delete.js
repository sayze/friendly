import React from 'react'
import Button from 'react-bootstrap/Button'
import PropTypes from 'prop-types'

const Delete = ({ onSubmit, friend }) => (
  <div>
    <p>
      Are you sure you want to delete <strong>{friend.name}</strong>? Action can't be undone.
    </p>
    <Button className="mt-2 float-right" variant="danger" onClick={() => onSubmit(friend)}>
      Yes, Delete
    </Button>
  </div>
)

Delete.defaultProps = {
  onSubmit: () => {},
}

Delete.propTypes = {
  friend: PropTypes.object.isRequired,
  onSubmit: PropTypes.func,
}

export default Delete
