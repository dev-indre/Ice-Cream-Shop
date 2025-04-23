import { Sequelize } from "sequelize";

const sequelize = new Sequelize("ice_cream_shop", "root", "12345", {
  host: "localhost",
  dialect:
    "mysql" /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */,
});

export default sequelize;
