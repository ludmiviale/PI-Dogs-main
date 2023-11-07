import { Link } from "react-router-dom";
import "./landing.css";
import icon from "../../assets/icon.jpeg";

const Landing = () => {
  return (
    <div className="landing-container">
      <div className="landing">
        <Link to="/home" className="home-link">
          <img src={icon} />
        </Link>
        <p>
          Explore a variety of dog breeds with this dog search application. You
          will find photos and a brief description of each breed. You can search
          by name or by temperament. You can sort them alphabetically or by
          weight. Additionally, you can create new dog breeds and save them in
          your application.
        </p>
        <p>
          Visit the Home page now and start discovering this canine diversity
          efficiently and quickly.
        </p>
        <span>
          Created by{" "}
          <a
            href="https://www.linkedin.com/in/ludmila-grisel-viale/"
            target="_blank"
          >
            Ludmila Grisel Viale
          </a>
        </span>
      </div>
    </div>
  );
};

export default Landing;
