import React from 'react'
import { Form as UIForm } from 'react-bootstrap'
import { Formik } from 'formik'
import * as Yup from 'yup'
import PropTypes from 'prop-types'

const Form = ({ name }) => (
  <Formik
    validationSchema={Yup.object({ name: Yup.string().required() })}
    onSubmit={console.log}
    initialValues={{ name }}
  >
    <UIForm>
      <UIForm.Group controlId="UIFormBasicEmail">
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
