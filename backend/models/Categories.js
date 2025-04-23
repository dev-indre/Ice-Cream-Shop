import { DataTypes } from "sequelize";
import sequelize from "../config/connect-sequelize.js";

const Categories = sequelize.define(
  "Categories",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image_url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true,
    createdAt: "created_at",
    tableName: "categories",
    updatedAt: false,
  }
);

export default Categories;
