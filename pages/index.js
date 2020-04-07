import React from 'react'
import { connect } from 'react-redux'
import ContactForm from '../components/ContactForm/index'

function Index (props) {
  return <ContactForm {...props} />
}

export default connect(
  null,
  null
)(Index)
