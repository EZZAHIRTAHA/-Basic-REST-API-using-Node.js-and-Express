import React from 'react'

const Register = () => {


  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
  })
  
  const {name, email, password, password_confirmation} = formData

  
  const handleChange = (event) => {
    const {name, value} = event.target
    setFormData(formData => ({...formData, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

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
