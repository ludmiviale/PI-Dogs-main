import { Link } from "react-router-dom";
import "./card.css";

const Card = ({ dog }) => {
  const { id, name, weight, temperament, reference_image_id } = dog;
  return (
    <div className="card">
      <Link to={`/home/${id}`}>
        <h2>{name}</h2>
      </Link>
      <p>Weight: {weight}</p>
      <p>{temperament}</p>
      <img src={reference_image_id} alt="dog photo" />
    </div>
  );
};

export default Card;
