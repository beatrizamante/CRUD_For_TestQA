// src/models/Band.ts
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Vinyls } from "./Vinyls";

@Entity()
export class Bands {
    @PrimaryGeneratedColumn()
    band_id!: number;

    @Column({
        type: "varchar",
        length: 50,
        unique: true,
    })
    name!: string;

    @OneToMany(() => Vinyls, (vinyl) => vinyl.band)
    vinyls!: Vinyls[];

}
