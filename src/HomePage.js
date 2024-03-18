import Dashboard from "./Dashboard";
import UserProfile from "./images/Group 46.png";
import UserProfile2 from "./images/Group 46@2x.png";
import MoptroLogo from "./images/moptro logo.png";
import MoptroLogo2 from "./images/moptro logo@2x.png";
import { productivity } from "./utils/Productivity";

export default function HomePage() {
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

      <img
        className="hompage-logo"
        src={MoptroLogo}
        alt="Moptro Logo"
        srcSet={MoptroLogo2}
      />
      <Dashboard productivity={productivity} />
    </div>
  );
}
