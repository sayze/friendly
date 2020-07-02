import React from 'react'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ImgUpload = () => (
  <div className="img-upload">
    <FontAwesomeIcon className="img-upload__avatar" icon={['fa', 'user']} size={'3x'} />
  </div>
)

export default ImgUpload
