import UserProfile from "./images/Group 46.png";
import UserProfile2 from "./images/Group 46@2x.png";
export default function HomePage() {
  return (
    <div>
      <nav className="navbar">
        <img
          src={UserProfile}
          width={40}
          height={40}
          alt="User Profile"
          srcSet={UserProfile2}
        />
      </nav>
    </div>
  );
}
