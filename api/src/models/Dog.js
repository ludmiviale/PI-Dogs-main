const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  sequelize.define(
    "dog",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Please enter the name",
          },
        },
      },
      height: {
        type: DataTypes.DECIMAL(5, 2),
        allowNull: false,
        validate: {
          noNegativeValue(value) {
            if (value < 0) {
              throw new Error("Height cannot be negative");
            }
          },
        },
      },
      weight: {
        type: DataTypes.DECIMAL(5, 2),
        allowNull: false,
        validate: {
          noNegativeValue(value) {
            if (value < 0) {
              throw new Error("Weight cannot be negative");
            }
          },
        },
      },
      life_span: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Please enter the life span",
          },
        },
      },
      reference_image_id: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    { timestamps: false }
  );
};
