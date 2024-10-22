// src/models/Vinyl.ts
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  OneToOne,
} from "typeorm";
import { Band } from "./Bands";
import { Album } from "./Albums";

@Entity()
export class Vinyl {
  @PrimaryGeneratedColumn()
  vinyl_id!: number;

  @ManyToOne(() => Band)
  @JoinColumn({ name: "band_id" })
  band!: Band;

  @OneToOne(() => Album)
  @JoinColumn({ name: "album_id" })
  album!: Album;

  @Column({ nullable: true })
  year?: number;
}
