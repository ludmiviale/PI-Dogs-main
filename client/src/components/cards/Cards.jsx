import Card from "../card/Card";

const Cards = ({ allDogs }) => {
  const dogsList = allDogs;

  return (
    <div>
      {dogsList?.map((dog) => (
        <Card key={dog.id} dog={dog} />
      ))}
    </div>
  );
};

export default Cards;
