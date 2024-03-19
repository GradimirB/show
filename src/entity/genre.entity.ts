import { UUID } from "crypto";
import { Column, Entity, JoinColumn, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Show } from "./show.entity";

@Entity()
export class Genre{
    @PrimaryGeneratedColumn()
    id:UUID

    @Column()
    name:string;

    @ManyToMany(()=>Show)
    @JoinColumn()
    genre:Show[]
}