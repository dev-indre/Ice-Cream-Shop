import mysql from "mysql2/promise";
let connection = null;
try {
  connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "12345",
    database: "ice_cream_shop",
  });
  console.log("Prisijungimas prie duomenu bazes pavyko");
} catch (err) {
  console.log("Prisijungimas prie duomenu bazes nepavyko");
  console.log(err);
}
export default connection;
