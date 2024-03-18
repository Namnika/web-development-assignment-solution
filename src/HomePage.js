import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div>
      <Link to="/login"><p>Back to Login</p></Link>
      <p>This is Home Screen</p>
    </div>
  );
}
