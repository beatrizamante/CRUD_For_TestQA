// src/models/Vinyl.ts
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { Bands } from "./Bands";

@Entity()
export class Vinyls {
  @PrimaryGeneratedColumn()
  vinyl_id!: number;

  @ManyToOne(() => Bands)
  @JoinColumn({ name: "band_id" })
  band!: Bands;

  @Column({ type: "varchar", length: 60 })
  title!: string;

  @Column({ nullable: true, type: "int" })
  year?: number;
}
