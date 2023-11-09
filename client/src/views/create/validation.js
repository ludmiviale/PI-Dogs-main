const validation = (newDogData) => {
  let errors = {};

  if (newDogData.name === "") {
    errors.name = "Please enter the name of the breed to create";
  }
  if (newDogData.name.length > 255) {
    errors.name = "The name must not be longer than 255 characters";
  }

  if (!/^[0-9]{1,3}$|^[0-9]{1,3}\.[0-9]{1,3}$/.test(newDogData.minWeight)) {
    errors.minWeight = "The minimum weight must be an integer or decimal";
  }
  if (newDogData.minWeight > 99) {
    errors.minWeight = "The minimum weight must not exceed 99kg";
  }
  if (!/^[0-9]{1,3}$|^[0-9]{1,3}\.[0-9]{1,3}$/.test(newDogData.maxWeight)) {
    errors.maxWeight = "The maximun weight must be an integer or decimal";
  }
  if (parseFloat(newDogData.maxWeight) <= parseFloat(newDogData.minWeight)) {
    errors.maxWeight =
      "The maximum weight must be greater than the minimum weight";
  }
  if (newDogData.maxWeight > 100) {
    errors.maxWeight = "The maximun weight must not exceed 100kg";
  }

  if (!/^[0-9]{1,3}$|^[0-9]{1,3}\.[0-9]{1,3}$/.test(newDogData.minHeight)) {
    errors.minHeight = "The minimum height must be an integer or decimal";
  }
  if (newDogData.minHeight > 99) {
    errors.minHeight = "The minimum height must not exceed 99cm";
  }
  if (!/^[0-9]{1,3}$|^[0-9]{1,3}\.[0-9]{1,3}$/.test(newDogData.maxHeight)) {
    errors.maxHeight = "The maximun height must be an integer or decimal";
  }
  if (parseFloat(newDogData.maxHeight) <= parseFloat(newDogData.minHeight)) {
    errors.maxHeight =
      "The maximum height must be greater than the minimum height";
  }
  if (newDogData.maxHeight > 100) {
    errors.maxHeight = "The maximun height must not exceed 100cm";
  }

  if (!/^[0-9]{1,2}$/.test(newDogData.minLifeSpan)) {
    errors.minLifeSpan = "The life span must be a maximum two-digit integer";
  }
  if (newDogData.minLifeSpan > 29) {
    errors.minLifeSpan = "The life span must not exceed 29 years";
  }
  if (!/^[0-9]{1,2}$/.test(newDogData.maxLifeSpan)) {
    errors.maxLifeSpan = "The life span must be a maximum two-digit integer";
  }
  if (
    parseFloat(newDogData.maxLifeSpan) <= parseFloat(newDogData.minLifeSpan)
  ) {
    errors.maxLifeSpan =
      "The maximum life span must be greater than the minimum";
  }
  if (newDogData.maxLifeSpan > 30) {
    errors.maxLifeSpan = "The life span must not exceed 30 years";
  }

  if (!/https?:\/\/.*\.(?:png|jpg)/.test(newDogData.referenceImage)) {
    errors.referenceImage = "It has to be a valid url";
  }
  return errors;
};

export default validation;
