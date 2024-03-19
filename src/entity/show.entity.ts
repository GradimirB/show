import { UUID } from "crypto";
import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, OneToMany } from "typeorm";
import { Member } from "./member.entity";
import { Award } from "./award.entity";
import { Review } from "./review.entity";

enum ShowType{
    MOVIE ="movie",
    SERIES = "series"
}

@Entity()
export class Show{

    @PrimaryGeneratedColumn()
    id:number

    @Column()
    title:string

    @Column()
    description:string

    @Column()
    release_date:Date

    @Column()
    type:ShowType;

    @Column()
    rating:number;

    @Column()
    popularity:number;

    @Column()
    top250:boolean;
    
    @ManyToMany(()=>Member)
    @JoinTable()
    members:Member[]


    @ManyToMany(()=>Award)
    @JoinTable()
    award:Award[]
     

    @OneToMany(() => Review, (review) => review.id)
    reviews:Review[]
}

