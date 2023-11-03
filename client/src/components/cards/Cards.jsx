import Card from "../card/Card";

const Cards = ({ dogsToDisplay }) => {
  return (
    <div>
      {dogsToDisplay?.map((dog) => (
        <Card key={dog.id} dog={dog} />
      ))}
    </div>
  );
};

export default Cards;
