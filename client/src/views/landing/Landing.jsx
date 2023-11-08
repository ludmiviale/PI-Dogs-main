import { Link } from "react-router-dom";
import "./landing.css";
import icon from "../../assets/icon.jpeg";

const Landing = () => {
  return (
    <div className="landing-container">
      <div className="landing">
        <p>
          Explore a variety of dog breeds with this dog search application, with
          photos and a description of each one. You can search by name or by
          temperament. You can sort them alphabetically or by weight. Also, you
          can create new dog breeds and save them in your application.
        </p>
        <p>
          Click on the dog to visit the Home page and start discovering this
          canine diversity efficiently and quickly.
        </p>
        <Link to="/home" className="home-link">
          <img src={icon} />
        </Link>
        <p>
          Created by{" "}
          <a
            href="https://www.linkedin.com/in/ludmila-grisel-viale/"
            target="_blank"
          >
            Ludmila Grisel Viale
          </a>
        </p>
      </div>
    </div>
  );
};

export default Landing;
