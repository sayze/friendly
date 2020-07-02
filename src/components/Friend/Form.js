import React from 'react'
import { Form as UIForm } from 'react-bootstrap'
import { Formik } from 'formik'
import * as Yup from 'yup'
import PropTypes from 'prop-types'
import ImgUpload from '../UI/ImgUpload'

const Form = ({ name }) => (
  <Formik
    validationSchema={Yup.object({ name: Yup.string().required() })}
    onSubmit={console.log}
    initialValues={{ name }}
  >
    <UIForm className="d-flex flex-column align-items-center">
      <UIForm.Group controlId="UIFormImag">
        <ImgUpload />
      </UIForm.Group>
      <UIForm.Group className="w-100" controlId="UIFormName">
        <UIForm.Label>Name</UIForm.Label>
        <UIForm.Control name="name" type="text" placeholder="eg. John Smith" defaultValue={name} />
      </UIForm.Group>
    </UIForm>
  </Formik>
)

Form.defaultProps = {
  name: '',
}

Form.propTypes = {
  name: PropTypes.string,
}

export default Form
