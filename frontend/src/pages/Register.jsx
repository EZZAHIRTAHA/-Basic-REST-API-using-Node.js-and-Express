import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { register, reset } from '../features/auth/authSlice'
import { useNavigate } from 'react-router-dom'
import {toast} from 'react-toastify'
import Spinner from '../components/Spinner'


const Register = () => {


  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
  })

  const dispatch = useDispatch()
  const {user, isLoading, isSucess, isError, message} = useSelector(state => state.auth)
  const navigate = useNavigate() 

  const {name, email, password, password_confirmation} = formData

  
  useEffect(() => {
    if(isError) {
      toast.error(message)
    }
    if(isSucess || user ) {
      navigate('/')
    }
    dispatch(reset())
  }, [user, isError, isSucess, message, navigate, dispatch])


  const handleChange = (event) => {
    const {name, value} = event.target
    setFormData(formData => ({...formData, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if(password !== password_confirmation) {
      toast.error('Passwords do not match')
    } else {
      const userData = {
        name,
        email,
        password,
      }
      dispatch(register(userData))
      navigate('/')
    }
  }

  if(isLoading) {
    return <Spinner/>
  }

  return (
    <form className='form' onSubmit={handleSubmit}>
      <div className="form-group">
      <div className="">
        <label htmlFor="name" className="">Your name</label>
        <input 
          type="text" 
          name="name" 
          className="" 
          placeholder="Name" 
          onChange={handleChange}
          id="name"
          value={name}
        />
      </div>
      <div className="">
        <label htmlFor="email" className="">Your email</label>
        <input 
          type="email" 
          name="email" 
          className="" 
          placeholder="Email" 
          onChange={handleChange}
          id="email"
          value={email}
        />
      </div>
      <div className="mb-6">
        <label htmlFor="password" className="">Your password</label>
        <input 
          type="password" 
          name="password" 
          className="" 
          onChange={handleChange}
          id="password"
          value={password}
        />
      </div>
      <div className="mb-6">
        <label htmlFor="password_confirmation" className="">Confirm your password</label>
        <input 
          type="password" 
          name="password_confirmation" 
          className="" 
          onChange={handleChange}
          id="password_confirmation"
          value={password_confirmation}
        />
      </div>
      <button type="submit" className="btn">Submit</button>
        </div>
    </form>
  )
}

export default Register
