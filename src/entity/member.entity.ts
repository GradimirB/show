import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from "typeorm";
import { Show } from "./show.entity";



enum TypeMember{
    DIRECTOR = 'director',
    ACTOR = 'actor'

}


@Entity()
export class Member{
    
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    forename:string;

    @Column()
    surname:string;

    @Column()
    birth_date:Date

    @Column()
    type:TypeMember

    @ManyToMany(()=> Show)
    @JoinTable()
    shows: Show[]

}