import { DataTypes } from "sequelize";
import sequelize from "../config/connect-sequelize.js";

const ProductImages = sequelize.define(
  "ProductImages",
  {
    image_url: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    timestamps: false,
    tableName: "product_images",
  }
);

export default ProductImages;
