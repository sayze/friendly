import React from 'react'
import { Form as UIForm } from 'react-bootstrap'
import { Formik } from 'formik'
import * as Yup from 'yup'
import PropTypes from 'prop-types'
import ImgUpload from 'components/UI/ImgUpload'
import Button from 'react-bootstrap/Button'

const getImage = image => {
  if (typeof image === 'string' && image.length > 0) {
    return image
  } else if (typeof image === 'object') {
    return URL.createObjectURL(image)
  }

  return ''
}

const Form = ({ name, image, onSubmit }) => (
  <Formik
    validationSchema={Yup.object({
      name: Yup.string()
        .trim()
        .required(),
    })}
    onSubmit={onSubmit}
    initialValues={{ name, image }}
  >
    {({ handleSubmit, setFieldValue, setFieldTouched, isSubmitting, handleChange, values, touched, errors }) => (
      <UIForm className="d-flex flex-column align-items-center" noValidate onSubmit={handleSubmit}>
        <UIForm.Group controlId="UIFormImag">
          <ImgUpload
            image={getImage(values.image)}
            onChange={event => {
              const selection = event.target.files[0] || null
              if (selection) {
                setFieldValue('image', selection)
                setTimeout(() => setFieldTouched('image', true))
              }
            }}
          />
        </UIForm.Group>
        <UIForm.Group className="w-100" controlId="UIFormName">
          <UIForm.Label>Name</UIForm.Label>
          <UIForm.Control
            name="name"
            type="text"
            placeholder="eg. John Smith"
            defaultValue={values.name}
            onChange={handleChange}
            isInvalid={!!errors.name && touched.name}
          />
          <UIForm.Control.Feedback type="invalid">{errors.name}</UIForm.Control.Feedback>
        </UIForm.Group>
        <Button disabled={isSubmitting} type="submit" className="ml-auto mt-2" variant="success">
          Save Friend
        </Button>
      </UIForm>
    )}
  </Formik>
)

Form.defaultProps = {
  name: '',
  image: '',
  onSubmit: () => {},
}

Form.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  onSubmit: PropTypes.func,
}

export default Form
