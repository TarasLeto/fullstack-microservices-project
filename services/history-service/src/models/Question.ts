import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Question {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  question!: string;

  @Column("text", { array: true })
  options!: string[];

  @Column()
  answer!: string;
}
