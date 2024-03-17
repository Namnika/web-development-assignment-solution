import LoginLogo from "./images/Group3.png";
import LoginLogo2 from "./images/Group 3@2x.png";

export default function LoginPage() {
  return (
    <div className="login-wrapper">
      <img src={LoginLogo} alt="Login Logo" srcSet={LoginLogo2} />
    </div>
  );
}
