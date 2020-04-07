import React from 'react'
import { useInput } from '../Hooks/input-hook'

export default function ContactForm (props) {
  //declare input hooks

  const handleSubmit = (evt) => {
    evt.preventDefault()
    //alert name and email
    //window.alert(`Submitting: ${name} ${email}`)
    //reset email, name to empty
  }
  return (
    <form className='form'>
      <h2>Contact US</h2>
      <p type='Name:'>
        <input type='text' placeholder='Write your name here..' />
      </p>
      <p type='Email'>
        <input type='text' placeholder='Write your email here..' />
      </p>
      <button type='submit'>Submit</button>
    </form>
  )
}
