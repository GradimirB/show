import { UUID } from "crypto";
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Show } from "./show.entity";

@Entity()
export class Award{
    @PrimaryGeneratedColumn()
    id:UUID;

    @Column()
    name:string;

    
    @ManyToMany(()=>Show)
    @JoinTable()
    awardedShows:Show[]
}