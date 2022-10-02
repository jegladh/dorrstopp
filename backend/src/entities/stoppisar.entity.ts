import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class Stoppisar {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nummer: number;

    @Column()
    namn: string;

    @Column()
    kepsnamn: string;

    @Column()
    examen: boolean;

    @Column()
    telefon: number;
}