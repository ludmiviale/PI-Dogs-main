import { Link } from "react-router-dom";

const Card = ({ dog }) => {
  const { id, name, weight, temperament, reference_image_id } = dog;
  return (
    <div>
      <Link to={`/home/${id}`}>
        <h2>{name}</h2>
      </Link>
      <p>{temperament}</p>
      <p>{weight}</p>
      <img src={reference_image_id} alt="dog photo" />
    </div>
  );
};

export default Card;
