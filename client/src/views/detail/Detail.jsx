import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDogById, dogsCleaner } from "../../redux/actions";
import "./detail.css";
import icon from "../../assets/icon.jpeg";

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const dogDetail = useSelector((state) => state.dogDetail);

  useEffect(() => {
    dispatch(getDogById(id));
    return () => {
      dispatch(dogsCleaner());
    };
  }, [id]);

  return (
    <div className="detail-container">
      <div className="detail">
        <Link to="/home" className="home-link">
          <img src={icon} />
        </Link>
        <h2>{dogDetail.name}</h2>
        <p>Weight: {dogDetail.weight}</p>
        <p>Height: {dogDetail.height}</p>
        <p>Life span: {dogDetail.life_span}</p>
        <p>Temperaments: {dogDetail.temperament}</p>
        <img src={dogDetail.reference_image_id} alt="dog photo" />
        <p id="id">{dogDetail.id}</p>
      </div>
    </div>
  );
};

export default Detail;
