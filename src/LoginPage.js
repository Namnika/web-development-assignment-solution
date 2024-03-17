import LoginLogo from "./images/Group3.png";
import LoginLogo2 from "./images/Group 3@2x.png";

export default function LoginPage() {
  return (
    <div className="login-wrapper">
      <div className="login-input">
        <img src={LoginLogo} alt="Login Logo" srcSet={LoginLogo2} />
        <h6>#We are Electric</h6>
        <input type="email" placeholder="E-Mail" className="email" />
        <input type="password" placeholder="Password" className="password" />
        <button>Login</button>

        <a href="#link" className="forgot-link">
          <p>Forgot password?</p>
        </a>
      </div>
    </div>
  );
}
