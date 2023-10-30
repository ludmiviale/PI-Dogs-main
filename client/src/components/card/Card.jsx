function Card({ dog }) {
  const { name, weight, temperament, reference_image_id } = dog;
  return (
    <div>
      <h2>{name}</h2>
      <p>{temperament}</p>
      <p>{weight}</p>
      <img src={reference_image_id} alt="dog photo" />
    </div>
  );
}

export default Card;
