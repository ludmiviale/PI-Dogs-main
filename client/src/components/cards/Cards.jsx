import Card from "../card/Card";
import "./cards.css";

const Cards = ({ dogsToDisplay }) => {
  return (
    <div className="card-container">
      {dogsToDisplay?.map((dog) => (
        <Card key={dog.id} dog={dog} />
      ))}
    </div>
  );
};

export default Cards;
