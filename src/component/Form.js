import React from 'react'
import FormSignup from './FormSignup'
import './Form.css'
import left from './img.jpg'

const Form = () => {
  return (
    <>
      <div className='form-container'>
        <span className='close-btn'>X</span>
        <div className='form-content-left'>
          <img src={left} alt='left' className='form-img' />
        </div>
        <FormSignup />
      </div>
    </>
  )
}

export default Form
