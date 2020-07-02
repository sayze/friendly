import React from 'react'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ImgUpload = () => (
  <div className="img-upload">
    <FontAwesomeIcon className="img-upload__avatar" icon={['fa', 'user']} size="4x" />
    <FontAwesomeIcon className="img-upload__camera text-secondary" icon={['fa', 'camera']} />
  </div>
)

export default ImgUpload
