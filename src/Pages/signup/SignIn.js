import React from 'react'
import './SignIn.css';

const SignIn = () => {
    return (
        <div>SignIn
            <div className='loginInner'>
                <p className='h3light'>Welcome back</p>
                <h3 className='h3light'>Log into your account</h3>
                {/* <h5 className={errormsg == '' ? ('') : ('error-mssg')}>{errormsg}</h5> */}
                <div className='inputcontainer'>
                    <div className='inputdetails'>
                        <div className='inputinfo'>
                            <p>Email or Username</p>
                        </div>
                        {/* className={emailaddressisblank ? ('inputbox empty-inputbox') : ('inputbox')} */}
                        <div >
                            <input  className="logintextinput" type='email' placeholder='Email or username' />
                            {/* value={email} onChange={(e) => setEmail(e.target.value.toLowerCase())} */}
                        </div>
                    </div>
                    <div className='inputdetails'>
                        <div className='inputinfo'>
                            <p>Password</p>
                            <h6  >Forgot password?</h6>
                            {/* onClick={() => navigate("/forgetpassword", { state: { email: email } })} */}
                        </div>
                        {/* className={pwdisblank ? ('inputbox empty-inputbox') : ('inputbox')} */}
                        <div >
                        {/* value={password} onChange={(e) => setPassword(e.target.value)} */}
                            <input  className='logintextinput'  placeholder='Enter password' />
                            {/* type={ispasswordvisible ? 'text' : 'password'} */}
                            {/* <div onClick={() => togglepassword()}>
                                {
                                    ispasswordvisible ? (
                                        <EyeClosedIcon className='shwpswd' size={16} />
                                    ) : (
                                        <EyeIcon className='shwpswd' size={16} />
                                    )
                                }
                            </div> */}
                        </div>
                    </div>
                </div>

                {/* {
                    loading ? (
                        <div className='continuebtn'>
                            <LoadingOutlined />
                        </div>
                    ) : (
                        <div onClick={() => signIn()} className='continuebtn'>
                            <p>Sign in</p>
                        </div>
                    )
                } */}
                {/* <h5 className='loginswitcher'>Dont have an account? <span onClick={() => navigate("/signup")}>Sign Up</span></h5> */}
                <div className="spacedDivider">
                    <hr />
                    <h5>or</h5>
                    <hr />
                </div>
                {/* <div onClick={() => signUpUsingGoogle()} className='googlesigninbtn'>
                    <img className='googleicon' alt="G" src='https://cdn2.iconfinder.com/data/icons/social-media-2259/512/search-512.png' />
                </div> */}
            </div>

        </div>
    )
}

export default SignIn