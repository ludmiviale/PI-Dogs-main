const validation = (newDogData) => {
  let errors = {};

  if (newDogData.name === "") {
    errors.name = "Please enter the name of the breed to create";
  }
  if (!/^[0-9]{1,3}$|^[0-9]{1,3}\.[0-9]{1,3}$/.test(newDogData.minHeight)) {
    errors.minHeight = "The minimum height must be an integer or decimal";
  }
  if (!/^[0-9]{1,3}$|^[0-9]{1,3}\.[0-9]{1,3}$/.test(newDogData.maxHeight)) {
    errors.maxHeight = "The maximun height must be an integer or decimal";
  }
  if (parseFloat(newDogData.maxHeight) <= parseFloat(newDogData.minHeight)) {
    errors.maxHeight =
      "The maximum height must be greater than the minimum height";
  }
  if (!/^[0-9]{1,3}$|^[0-9]{1,3}\.[0-9]{1,3}$/.test(newDogData.minWeight)) {
    errors.minWeight = "The minimum weight must be an integer or decimal";
  }
  if (!/^[0-9]{1,3}$|^[0-9]{1,3}\.[0-9]{1,3}$/.test(newDogData.maxWeight)) {
    errors.maxWeight = "The maximun weight must be an integer or decimal";
  }
  if (parseFloat(newDogData.maxWeight) <= parseFloat(newDogData.minWeight)) {
    errors.maxWeight =
      "The maximum weight must be greater than the minimum weight";
  }
  if (!/^[0-9]{1,2}$/.test(newDogData.minLifeSpan)) {
    errors.minLifeSpan = "Life span must be a maximum two-digit integer";
  }
  if (!/^[0-9]{1,2}$/.test(newDogData.maxLifeSpan)) {
    errors.maxLifeSpan = "Life span must be a maximum two-digit integer";
  }
  if (
    parseFloat(newDogData.maxLifeSpan) <= parseFloat(newDogData.minLifeSpan)
  ) {
    errors.maxLifeSpan =
      "The maximum life span must be greater than the minimum life span";
  }
  if (!/https?:\/\/.*\.(?:png|jpg)/.test(newDogData.referenceImage)) {
    errors.referenceImage = "It has to be a valid url";
  }
  return errors;
};

export default validation;
