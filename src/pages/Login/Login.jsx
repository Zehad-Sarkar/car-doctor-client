import { Link, useLocation, useNavigate } from "react-router-dom";
import loginImage from "../../assets/images/login/login.svg";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import SocialLogin from "../../sharedpages/SocialLogin/SocialLogin";

const Login = () => {
  const { userSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    userSignIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        // console.log(loggedUser);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error.message);
      });
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
            <h1 className="text-5xl font-bold">Login</h1>
            <form onSubmit={handleLogin}>
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
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <p className="my-4 text-center">
              New to car doctor{" "}
              <Link className="text-orange-600" to="/signup">
                Sign up
              </Link>
            </p>
          </div>
          <SocialLogin></SocialLogin>
        </div>
      </div>
    </div>
  );
};

export default Login;
