import React, { useState } from 'react'
import "./Logi.css"
import axios from 'axios'


const Login = () => {
  const [Name, setName] = useState("")
  const [Email, setemail] = useState("")
  const [Password, setPassword] = useState("")
  const [Repassword, setRepassword] = useState("")
  const [Phone, setphone] = useState("")
  const [sign, setsign] = useState(false)

  const submitForm = () => {
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (Password != Repassword)
      return alert("Password Not Matching")
    if (Name == "")
      return alert("Name Field is empty")
    if (!Email.match(validRegex))
      return alert("Invalid Email format")
    else {
      axios.post("http://localhost:5000/user/signUp", {
        name: Name,
        email: Email,
        password: Password,
        phone: Phone
      })
        .then(function (res) {
          console.log(res);
        })
        .catch(function (error) {
          console.log(error);
        })
    }
  }

  return (
    <div className='slider_area'>
      <div className='single_slide'>
        {
          sign ? (
            <div className="form-container sign-up-container">
              <h1>Create Account</h1>
              <span>or use your email for registration</span>
              <input value={Name} type="text" placeholder="Name" onChange={e => setName(e.target.value)} />
              <input value={Phone} type="number" placeholder="Phone Number" onChange={e => setphone(e.target.value)} />
              <input value={Email} type="email" placeholder="Email" onChange={e => setemail(e.target.value)} />
              <input value={Password} type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
              <input value={Repassword} type="password" placeholder="Re-Password" onChange={e => setRepassword(e.target.value)} />
              <button onClick={submitForm}>Sign Up</button>
              <br></br>
              <div className='button-parent'>
                <button className='loginButton' onClick={() => setsign(false)}>SignIn</button>
              </div>
            </div>
          ) : (
            <div className="form-container sign-up-container">
              <h1>Create </h1>
              <span>or use your email for registration</span>
              <input value={Email} type="email" placeholder="Email" onChange={e => setemail(e.target.value)} />
              <input value={Password} type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
              <button onClick={submitForm}>Sign In</button>
              <br></br>
              <div className='button-parent'>
                <button className='loginButton' onClick={() => setsign(true)}>SignUp</button>
              </div>
            </div>
          )
        }
      </div>

    </div>


  )
}

export default Login;