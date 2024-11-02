import { Link, useLocation, useNavigate } from "react-router-dom";
import img from "../../assets/images/login/login.svg";
import { useContext } from "react";
import { AUthContext } from "../../provider/AuthProvider";
import axios from "axios";

const Login = () => {
  const { signInUser } = useContext(AUthContext);
  const navigate = useNavigate();
  const location = useLocation()
  console.log(location);

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log("from clicked", email, password);

    signInUser(email, password)
      .then((userCredential) => {
        // Signed in
        const loggedUser = userCredential.user;
        const user = {email}
        if (loggedUser.email) {
          axios.post('http://localhost:5000/jwt', user, {withCredentials: true})
          .then(function (response) {
            console.log(response);
            if (response.data.success) {
              navigate(location?.state ? location?.state : "/");
            }
          })
          
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };
  return (
    <div className="hero bg-base-200 min-h-screen justify-center">
      <div className="hero-content flex-col lg:flex-row mr-8">
        <div className="text-center lg:text-left w-1/2 ml-8">
          <img src={img} alt="Login - image" />
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h1 className="text-5xl font-bold text-center text-orange-700">
            Login!
          </h1>
          <form className="card-body" onSubmit={handleLogin}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="email"
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
                name="password"
                type="password"
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
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <p className=" text-center">
            New to car clinic , register here &nbsp;&nbsp;
            <span className=" text-orange-800 text-2xl">
              <Link to="/signUp">Sign-up</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
