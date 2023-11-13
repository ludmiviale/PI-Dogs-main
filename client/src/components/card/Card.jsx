import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteDog } from "../../redux/actions";
import "./card.css";

const Card = ({ dog }) => {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteDog(id));
  };

  const { id, name, weight, temperament, reference_image_id } = dog;
  return (
    <div className="card">
      <Link to={`/home/${id}`}>
        <h2>{name}</h2>
      </Link>
      <p>Weight: {weight}</p>
      <p>{temperament}</p>
      <img src={reference_image_id} alt="dog photo" />
      {isNaN(id) ? (
        <button onClick={() => handleDelete(id)}>Delete</button>
      ) : (
        ""
      )}
    </div>
  );
};

export default Card;
