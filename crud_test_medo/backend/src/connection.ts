import "reflect-metadata";
import { DataSource } from "typeorm";
import { Vinyls } from "./entity/Vinyls";
import mysql from "mysql2/promise";
import * as dotenv from "dotenv";

dotenv.config();

async function createDatabase() {
  const connection = await mysql.createConnection({
    host: process.env.DB_HOSTNAME,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
  });

  try {
    await connection.query(`CREATE DATABASE IF NOT EXISTS VinylCase`);
    console.log("Database 'VinylCase' has been created or already exists.");
  } catch (err) {
    console.log("Unable to create Database: ", err);
  } finally {
    connection.end();
  }
}

export const AppDataSource = new DataSource({
  type: "mysql",
  host: process.env.DB_HOSTNAME,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [Vinyls],
  synchronize: true,
  logging: true,
});

export async function initializeDataSource() {
  try {
    await AppDataSource.initialize();
    console.log("Connected to Database");
  } catch (err) {
    console.log("Database not found. Attempting to create...");
    await createDatabase();
    try {
      await AppDataSource.initialize();
      console.log("Connected to Database after creation");
    } catch (error) {
      console.log("Error connecting to the database after creation:", error);
    }
  }
}

