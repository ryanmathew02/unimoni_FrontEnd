import React, { useState } from 'react'
import "./Logi.css"
import axios from 'axios'
import { GoogleLogin } from '@react-oauth/google';



const Login = () => {
  const [Name, setName] = useState("")
  const [Email, setemail] = useState("")
  const [Password, setPassword] = useState("")
  const [Repassword, setRepassword] = useState("")
  const [Phone, setphone] = useState("")
  const [sign, setsign] = useState(false)

  const submitForm2 = () =>{
    if(Password=="")
      return alert("Password Field is Empty");
    if(Email == "")
      return alert("Enter Email ID");
    else{
      axios.post("http://localhost:5000/users/signIn",{
        email: Email,
        password: Password
      })
      .then(function(response){
        console.log(response);
        if(response.data.code==200){
          localStorage.setItem('token', response.data.token);
          window.location.reload();
        }
        else
          alert("Something went wrong");
      })
      .catch(function(error){
        console.log(error);
      })
    }
  }

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

      const responseMessage = (response) => {
        console.log(response);
      };
      const errorMessage = (error) => {
        console.log(error);
      };

  return (
    <div>
      <div className="slider_area">
        <div className="single_slider d-flex justify-content-center slider_bg_1 overlay">
          <div className="container" style={{ top: "25vh", position: "absolute" }}>
            <div className="row align-items-center justify-content-center">
              <div className="col-xl-12">
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
                      <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />

                      <br></br>
                      <div className='button-parent'>
                        <button className='loginButton' onClick={() => setsign(false)}>SignIn</button>
                      </div>
                      <br></br>
                    </div>
                  ) : (
                    <div className="form-container sign-up-container">
                      <h1>Create </h1>
                      <span>or use your email for registration</span>
                      <input value={Email} type="email" placeholder="Email" onChange={e => setemail(e.target.value)} />
                      <input value={Password} type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
                      <button onClick={submitForm2}>Sign In</button>
                      <br></br>
                      <div className='button-parent'>
                        <button className='loginButton' onClick={() => setsign(true)}>SignUp</button>
                      </div>
                      <br></br>
                      <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
                    </div>
                  )
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login;