import mysql from "mysql2";
import { DB_HOST, DB_PORT, DB_USER, DB_PASS, DB_DATABASE } from "./config.js";

export const db = mysql.createConnection({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASS,
    port: DB_PORT,
    database: DB_DATABASE,
});
