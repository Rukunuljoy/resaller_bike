import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import img from '../../asset/login/login.png'
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";

const Login = () => {
    const {login} = useContext(AuthContext)
    const {providerLogin} = useContext(AuthContext)
    const location = useLocation()
    const Navigate = useNavigate()

    const from = location.state?.from?.pathName || '/'

    const  handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        login(email, password)
        .then(result =>{
            const user = result.user;
            console.log(user.email)

            const currentUser = {
              email: user.email
            }
            console.log(currentUser)


              fetch('https://travel-service-server.vercel.app/jwt',{
                method:'POST',
                headers:{
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(currentUser)      
        })
        .then(res=>res.json())
        .then(data=>{
          console.log(data)
          localStorage.setItem('token',data.token);
          Navigate(from,{replace:true})
        })  
    })
    .catch(err=>console.error(err))
  }
    const googleProvider = new GoogleAuthProvider()
    
    const handleGoogleSignIn=()=>{
      providerLogin(googleProvider)
      .then(result=>{
        const user = result.user;
        console.log(user)
      })
      .catch(err=>console.error(err))
    }
  return (
    <div className="hero w-full my-20">
      <div className="hero-content gap-10 grid md:grid-cols-2 flex-col lg:flex-row">
        <div className="text-center lg:text-left">
            <img className="w-3/4" src={img} alt = ""/>
        </div>
        <div className="card  w-full max-w-sm shadow-2xl py-10 bg-base-100">
          <h1 className="text-5xl font-bold text-center mt-5">Login now!</h1>
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6 mb-4">
                <input className="btn btn-primary" type = "submit" value='login'/>
            </div>
            <button onClick={handleGoogleSignIn} className="btn btn-light">Google Login</button>
          </form>
                <p className="text-center mb-10 ">please Register an Account?<Link className="text-orange-600 font-bold" to="/signup">Sign Up</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
