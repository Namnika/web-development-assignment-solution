import UserProfile from "./images/Group 46.png";
import UserProfile2 from "./images/Group 46@2x.png";
export default function HomePage() {
  return (
    <div>
      <nav>
        <img
          src={UserProfile}
          width={200}
          height={200}
          alt="User Profile"
          srcSet={UserProfile2}
        />
      </nav>
      <p>This is Home Screen</p>
    </div>
  );
}
