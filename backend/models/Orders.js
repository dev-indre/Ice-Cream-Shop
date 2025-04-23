import { DataTypes } from "sequelize";
import sequelize from "../config/connect-sequelize.js";

const Orders = sequelize.define(
  "Orders",
  {
    total: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true,
    createdAt: "created_at",
    tableName: "orders",
  }
);

export default Orders;
