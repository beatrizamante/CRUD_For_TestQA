import "reflect-metadata";
import { DataSource } from "typeorm";
import { Album } from "./Albums";
import { Band } from "./Bands";
import { Vinyl } from "./Vinyls";

const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "@Brat5984#",
  database: "VinylCase",
  entities: [Vinyl, Album, Band],
  synchronize: true,
  logging: true,
});

AppDataSource.initialize()
  .then(() => {
    console.log("Connected");
  })
  .catch((err) => console.log(err));
