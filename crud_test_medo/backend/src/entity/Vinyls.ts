// src/models/Vinyl.ts
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
} from "typeorm";

@Entity()
export class Vinyls {
  @PrimaryGeneratedColumn()
  vinyl_id!: number;
  
  @Column({ type: "varchar", length: 60})
  band!: string;

  @Column({ type: "varchar", length: 60 })
  title!: string;

  @Column({ nullable: true, type: "int" })
  year?: number;
}
