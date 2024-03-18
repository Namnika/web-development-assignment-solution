import LoginLogo from "./images/Group3.png";
import LoginLogo2 from "./images/Group 3@2x.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  let emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  const isValidEmail = emailRegex.test(email);

  function handleLogin(e) {
    e.preventDefault();
    if (email.trim() === "" || password.trim() === "") {
      setError("Email or Password can't be empty!");
    } else if (!isValidEmail) {
      setError("Email is incorrect!");
    } else {
      navigate("/home");
    }
  }

  return (
    <div className="login-wrapper">
      <div className="login-input">
        <img src={LoginLogo} alt="Login Logo" srcSet={LoginLogo2} />
        <h6>#We are Electric</h6>
        {!isValidEmail && (
          <p style={{ color: "crimson", marginTop: 0, fontSize: "12px" }}>
            {error}
          </p>
        )}
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="E-Mail"
          className="email"
          required
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
          className="password"
          required
        />
        <button type="submit" onClick={handleLogin}>
          Login
        </button>
        <p>Forgot password?</p>
      </div>
    </div>
  );
}
