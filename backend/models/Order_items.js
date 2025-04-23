import { DataTypes } from "sequelize";
import sequelize from "../config/connect-sequelize.js";

const OrderItems = sequelize.define(
  "OrderItems",
  {
    amount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    price_each: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    total: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
  },
  {
    timestamps: false,
    tableName: "order_items",
  }
);

export default OrderItems;
