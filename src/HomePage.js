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
      <section>
        <label>Employee Productivity Dashboard</label>
        <div className="productivity">
          {productivity.map((prod) => {
            return (
              <>
                <div className="prodlevel">
                  <h4>{prod.prodname}</h4>
                  <div
                    class="progress"
                    role="progressbar"
                    aria-label="Basic example"
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <div
                      class="progress-bar"
                      style={{
                        width: `${prod.prodlevel}`,
                        backgroundColor: "#36A546",
                      }}
                    ></div>
                  </div>
                </div>

                <span>{prod.prodlevel}</span>
              </>
            );
          })}
        </div>
      </section>
    </div>
  );
}
