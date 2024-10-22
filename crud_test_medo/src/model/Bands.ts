// src/models/Band.ts
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Album } from "./Albums";

@Entity()
export class Band {
    @PrimaryGeneratedColumn()
    band_id!: number;

    @Column({
        type: "varchar",
        length: 200,
        unique: true,
    })
    name!: string;

    @OneToMany(() => Album, (album) => album.band)
    albuns!: Album[];

}
