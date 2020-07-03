import React, { useRef } from 'react'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types'
import { FormControl, Image } from 'react-bootstrap'

const ImgUpload = ({ image, onChange }) => {
  const uploadInput = useRef(null)

  const handleClick = event => {
    uploadInput.current.click()
  }

  return (
    <div onClick={handleClick} className="img-upload">
      <FormControl
        ref={uploadInput}
        className="d-none"
        type="file"
        name="image-file"
        onChange={onChange}
        accept="image/png, image/jpeg"
      />
      {image.length > 0 ? (
        <Image fluid src={image} roundedCircle />
      ) : (
        <FontAwesomeIcon className="img-upload__avatar" icon="user" size="5x" />
      )}
      <FontAwesomeIcon className="img-upload__camera text-secondary" icon="camera" size="2x" />
    </div>
  )
}

ImgUpload.defaultProps = {
  image: '',
}

ImgUpload.propTypes = {
  image: PropTypes.string,
}

export default ImgUpload
