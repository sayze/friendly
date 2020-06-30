import React from 'react'
import { Card, Image } from 'react-bootstrap'
import PropTypes from 'prop-types'

const Tile = ({ image, name, subtext }) => (
  <Card>
    <Card.Body>
      <div className="d-flex align-items-center">
        <Image src={image} height={80} width={80} roundedCircle />
        <div className="ml-4">
          <p className="mb-1 mt-0">{name}</p>
          <p className="text-muted my-0">
            <small>{subtext}</small>
          </p>
        </div>
      </div>
    </Card.Body>
  </Card>
)

Tile.defaultProps = {
  subtext: '',
}

Tile.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  subtext: PropTypes.string,
}

export default Tile
