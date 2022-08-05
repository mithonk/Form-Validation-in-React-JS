import React from 'react'
import useForm from '../hooks/useForm'
import validate from '../utils/validate'

const FormSignup = () => {
  const { handleChange, values, handleSubmit, errors } = useForm(validate)
  return (
    <div className='form-content-right'>
      <form className='form' onSubmit={handleSubmit}>
        <h1>Get Started with us today! Create your account</h1>
        <div className='form-inputs'>
          <label htmlFor='username' className='label-name'>
            Username
          </label>
          <input
            id='username'
            type='text'
            name='username'
            className='form-input'
            placeholder='Enter your username'
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>

        <div className='form-inputs'>
          <label htmlFor='email' className='label-name'>
            Email
          </label>
          <input
            id='email'
            type='text'
            name='email'
            className='form-input'
            placeholder='Enter your email'
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>

        <div className='form-inputs'>
          <label htmlFor='password' className='label-name'>
            Password
          </label>
          <input
            id='password'
            type='password'
            name='password'
            className='form-input'
            placeholder='Enter your password'
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>

        <div className='form-inputs'>
          <label htmlFor='confirmpassword' className='label-name'>
            Confirm Password
          </label>
          <input
            id='confirmpassword'
            type='password'
            name='confirmpassword'
            className='form-input'
            placeholder='Enter your confirm password'
            value={values.confirmpassword}
            onChange={handleChange}
          />
          {errors.confirmpassword && <p>{errors.confirmpassword}</p>}
        </div>

        <button className='form-input-btn' type='submit'>
          Sign up
        </button>
        <span className='form-input-login'>
          Already have an account? Login <a href='#'>here</a>
        </span>
      </form>
    </div>
  )
}

export default FormSignup
