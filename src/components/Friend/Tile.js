import React from 'react'
import { Button, Card, Image } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types'
import ImgUpload from '../UI/ImgUpload'

const Tile = ({ image, name, subtext, onEditClick, onDeleteClick }) => (
  <Card>
    <Card.Body>
      <div className="d-flex align-items-center">
        {image.length > 0 ? <Image src={image} height={80} width={80} roundedCircle /> : <ImgUpload readOnly />}
        <div className="ml-4">
          <p className="mb-1 mt-0">{name}</p>
          <p className="text-muted my-0">
            <small>{subtext}</small>
          </p>
        </div>
        <div className="ml-auto">
          <Button size="sm" onClick={onEditClick} variant="outline-secondary" className="rounded mr-3">
            <FontAwesomeIcon icon="pen" />
          </Button>
          <Button size="sm" onClick={onDeleteClick} variant="outline-danger" className="rounded">
            <FontAwesomeIcon icon="trash" />
          </Button>
        </div>
      </div>
    </Card.Body>
  </Card>
)

Tile.defaultProps = {
  subtext: '',
  image: '',
  onEditClick: () => {},
  onDeleteClick: () => {},
}

Tile.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string.isRequired,
  subtext: PropTypes.string,
  onEditClick: PropTypes.func,
  onDeleteClick: PropTypes.func,
}

export default Tile
