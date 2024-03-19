import { UUID } from "crypto";
import { Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Show } from "./show.entity";

@Entity()
export class Review{
    
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    comment:string

    @Column()
    rating:number

    @ManyToOne(() => Show, (show) => show.id)
    show:Show
}