import React, {useState, useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../features/auth/authSlice'



const Login = () => {

  const [formData, setFormData] = React.useState({
    email: '',
    password: ''
  })
  const dispatch = useDispatch()
  const {email, password} = formData
  
  const handleChange = (event) => {
    const {name, value} = event.target
    setFormData(formData => ({...formData, [name]: value}))
  }


  
  const handleSubmit = (e) => {
    e.preventDefault()
    const userData = {
      email,
      password
    }
    dispatch()
  }




  return (
    <form className='form' onSubmit={handleSubmit}>
      <div className="form-group">
      <div className="">
        <label htmlFor="email" className="">Your email</label>
        <input 
          type="email" 
          name="email" 
          className="" 
          placeholder="Email" 
          onChange={handleChange}
          id='email'
        />
      </div>
      <div className="mb-6">
        <label htmlFor="password" className="">Your password</label>
        <input 
          type="password" 
          name="password" 
          className="" 
          onChange={handleChange}
          id='password'
        />
      </div>
      <button type="submit" className="btn">Submit</button>
        </div>
    </form>

  )
}

export default Login
