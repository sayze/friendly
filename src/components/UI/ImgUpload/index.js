import React from 'react'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types'
import { Image } from 'react-bootstrap'

const ImgUpload = ({ image }) => (
  <div className="img-upload">
    {image.length > 0 ? (
      <Image fluid src={image} roundedCircle />
    ) : (
      <FontAwesomeIcon className="img-upload__avatar" icon="user" size="4x" />
    )}
    <FontAwesomeIcon className="img-upload__camera text-secondary" icon="camera" />
  </div>
)

ImgUpload.defaultProps = {
  image: '',
}

ImgUpload.propTypes = {
  image: PropTypes.string,
}

export default ImgUpload
