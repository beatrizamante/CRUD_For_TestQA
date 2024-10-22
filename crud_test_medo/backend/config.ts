import "reflect-metadata";
import { DataSource } from "typeorm";
import { Album } from "./src/entity/Albums";
import { Band } from "./src/entity/Bands";
import { Vinyl } from "./src/entity/Vinyls";
import * as dotenv from "dotenv";
import mysql from "mysql";
import { promisify } from "util";

dotenv.config();

async function createDatabase() {
  const connection = await mysql.createConnection({
    host: process.env.DB_HOSTNAME,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
  });

  const query = promisify(connection.query).bind(connection);

  try {
    await query(`CREATE DATABASE IF NOT EXISTS VinylCase`);
    console.log("Database 'VinylCase' has been created or already exists.");
  } catch (err) {
    console.log("Unable to create Database: ", err);
  } finally {
    connection.end();
  }
}

async function initializeDataSource() {
  const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.DB_HOSTNAME,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [Vinyl, Album, Band],
    synchronize: true,
    logging: true,
  });

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

initializeDataSource();
