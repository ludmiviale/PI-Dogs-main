import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getDogById, dogsCleaner } from "../../redux/actions";

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
    <div>
      <Link to="/home">Home</Link>

      <h2>{dogDetail.name}</h2>
      <p>{dogDetail.weight}</p>
      <p>{dogDetail.height}</p>
      <p>{dogDetail.life_span}</p>
      <p>{dogDetail.temperament}</p>
      <img src={dogDetail.reference_image_id} alt="dog photo" />
      <p>{dogDetail.id}</p>
    </div>
  );
};

export default Detail;
