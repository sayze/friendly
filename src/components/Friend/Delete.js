import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import PropTypes from 'prop-types'

const Delete = ({ onSubmit, friend, submitting }) => {
  const [isSubmitting, setIsSubmitting] = useState(submitting)

  const handleSubmit = () => {
    setIsSubmitting(true)
    onSubmit(friend)
  }

  return (
    <div>
      <p>
        Are you sure you want to delete <strong>{friend.name}</strong>? Action can't be undone.
      </p>
      <Button disabled={isSubmitting} className="mt-2 float-right" variant="danger" onClick={handleSubmit}>
        Yes, Delete
      </Button>
    </div>
  )
}

Delete.defaultProps = {
  onSubmit: () => {},
  submitting: false,
}

Delete.propTypes = {
  friend: PropTypes.object.isRequired,
  submitting: PropTypes.bool,
  onSubmit: PropTypes.func,
}

export default Delete
