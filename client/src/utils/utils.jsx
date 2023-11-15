const filterAndOrderDogs = (dogs, filters, sort) => {
  let filteredAndOrderedDogs = dogs;

  if (filters.search != undefined && filters.search != null) {
    filteredAndOrderedDogs = filteredAndOrderedDogs.filter((dog) =>
      dog.name.toLowerCase().includes(filters.search.toLowerCase())
    );
  }

  if (filters.source != undefined && filters.source != null) {
    if (filters.source == "api") {
      filteredAndOrderedDogs = filteredAndOrderedDogs.filter(
        (dog) => typeof dog.id == "number"
      );
    } else if (filters.source == "database") {
      filteredAndOrderedDogs = filteredAndOrderedDogs.filter(
        (dog) => typeof dog.id == "string"
      );
    }
  }

  if (filters.temperament != undefined && filters.temperament != null) {
    if (filters.temperament != "all") {
      filteredAndOrderedDogs = filteredAndOrderedDogs.filter((dog) => {
        return dog.temperament?.includes(filters.temperament);
      });
    }
  }

  switch (sort) {
    case "alphabeticalAsc":
      filteredAndOrderedDogs.sort((a, b) => {
        return a.name.localeCompare(b.name);
      });
      break;
    case "alphabeticalDesc":
      filteredAndOrderedDogs.sort((a, b) => b.name.localeCompare(a.name));
      break;
    case "lowerWeight":
      filteredAndOrderedDogs.sort((a, b) => {
        const weightA = a.weight.split(" - ");
        const weightB = b.weight.split(" - ");
        const weightValueA = parseFloat(weightA[0]);
        const weightValueB = parseFloat(weightB[0]);
        return (
          weightValueA - weightValueB ||
          isNaN(weightValueA) - isNaN(weightValueB)
        );
      });
      break;
    case "greaterWeight":
      filteredAndOrderedDogs.sort((a, b) => {
        const weightA = a.weight.split(" - ");
        const weightB = b.weight.split(" - ");
        const weightValueA = parseFloat(weightA[0]);
        const weightValueB = parseFloat(weightB[0]);
        return (
          weightValueB - weightValueA ||
          isNaN(weightValueB) - isNaN(weightValueA)
        );
      });
      break;
    default:
      break;
  }

  return filteredAndOrderedDogs;
};

export default filterAndOrderDogs;
