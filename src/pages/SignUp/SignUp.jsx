import { useContext } from "react";
import loginImage from "../../assets/images/login/login.svg";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import SocialLogin from "../../sharedpages/SocialLogin/SocialLogin";

const SignUp = () => {
  const { createUser } = useContext(AuthContext)
const navigate=useNavigate()  
  
  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    createUser(email, password)
      .then(result => {
        const signUpUser = result.user;
        console.log(signUpUser);
        navigate('/')
      })
      .catch(error => {
      console.error(error.message)
    })
    form.reset();
  };
  return (
    <div className="min-h-screen hero bg-base-200">
      <div className="flex-col hero-content lg:flex-row">
        <div className="w-1/2 text-center lg:text-left">
          <img src={loginImage} alt="" />
        </div>
        <div className="flex-shrink-0 w-full max-w-sm shadow-2xl card bg-base-100">
          <div className="card-body">
            <h1 className="text-5xl font-bold">Sign Up</h1>
            <form onSubmit={handleSignUp}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <Link to="/login" className="label-text-alt link link-hover">
                    Forgot password?
                  </Link>
                </label>
              </div>
              <div className="mt-6 form-control">
                <button className="btn btn-primary">Sign Up</button>
              </div>
            </form>
            <p className="my-4 text-center">
              Allready a car doctor member ?
              <Link className="ml-1 text-orange-600" to="/login">
                login
              </Link>
            </p>
          </div>
          <SocialLogin></SocialLogin>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
