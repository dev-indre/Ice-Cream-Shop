import Orders from "./Orders.js";
import Users from "./Users.js";
import OrderItems from "./Order_items.js";
import Products from "./Products.js";
import Categories from "./Categories.js";
import ProductImages from "./Product_images.js";

//orders rysis su users ir items:
Users.hasMany(Orders);
Orders.belongsTo(Users, { foreignKey: "user_id" });

Orders.hasMany(OrderItems);
OrderItems.belongsTo(Orders, { foreignKey: "order_id" });

//categories rysis su produktais:
Categories.hasMany(Products, { foreignKey: "category_id" });
Products.belongsTo(Categories, { foreignKey: "category_id" });

//products rysis su order items:
// Products.hasMany(OrderItems);
// OrderItems.belongsTo(Products, { foreignKey: "product_id" });

//products su images:
Products.hasMany(ProductImages, { foreignKey: "product_id" });
ProductImages.belongsTo(Products, { foreignKey: "product_id" });

//order items rysiai su orderiais ir produktais:
OrderItems.hasMany(Orders);
Orders.belongsTo(OrderItems, { foreignKey: "order_id" });

// OrderItems.hasMany(Products);
// Products.belongsTo(OrderItems, { foreignKey: "product_id" });

export default function associateModels() {}
