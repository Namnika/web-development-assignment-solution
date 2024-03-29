import { Link } from "react-router-dom";
import Dashboard from "./Dashboard";
import UserProfile from "./images/Group 46.png";
import UserProfile2 from "./images/Group 46@2x.png";
import MoptroLogo from "./images/moptro logo.png";
import MoptroLogo2 from "./images/moptro logo@2x.png";
import { productivity } from "./utils/Productivity";
import { useState } from "react";

export default function HomePage() {
  const [isDashboardVisible, setDashboardVisible] = useState(false);

  return (
    <div className="dashboard">
      <nav>
        <img
          style={{ cursor: "pointer" }}
          src={UserProfile}
          width={40}
          height={40}
          alt="User Profile"
          srcSet={UserProfile2}
        />
      </nav>
      <Link
        onClick={() => setDashboardVisible(true)}
        to="/home"
        className="hompage-logo"
      >
        <img src={MoptroLogo} alt="Moptro Logo" srcSet={MoptroLogo2} />
      </Link>
      {isDashboardVisible ? <Dashboard products={productivity} /> : null}
    </div>
  );
}
