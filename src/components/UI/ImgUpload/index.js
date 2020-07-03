import React, { useRef } from 'react'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types'
import { FormControl, Image } from 'react-bootstrap'
import cx from 'classnames'

const ImgUpload = ({ image, onChange, readOnly }) => {
  const uploadInput = useRef(null)

  const handleClick = () => {
    if (readOnly) {
      return
    }
    uploadInput.current.click()
  }

  return (
    <div onClick={handleClick} className={cx('img-upload', { 'read-only': readOnly })}>
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
        <FontAwesomeIcon className="img-upload__avatar" icon="user" size="3x" />
      )}

      <FontAwesomeIcon
        className={cx('img-upload__camera', 'text-secondary', { 'd-none': readOnly })}
        icon="camera"
        size="1x"
      />
    </div>
  )
}

ImgUpload.defaultProps = {
  image: '',
  readOnly: false,
  onChange: () => {},
}

ImgUpload.propTypes = {
  image: PropTypes.string,
  readOnly: PropTypes.bool,
  onChange: PropTypes.func,
}

export default ImgUpload
