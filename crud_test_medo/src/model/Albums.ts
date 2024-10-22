// src/models/Album.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { Band } from "./Bands";

@Entity()
export class Album {
    @PrimaryGeneratedColumn()
    album_id!: number;

    @ManyToOne(() => Band, (band) => band.albuns)
    @JoinColumn({ name: "band_id"})
    band!: Band;

    @Column({
        type: "varchar",
        length: 200,
    })
    title!: string;

    @Column()
    year?: number;
}
