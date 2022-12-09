import { Entity, Column, CreateDateColumn, PrimaryColumn, ManyToOne, JoinColumn } from "typeorm";
import { v4 as uuid } from 'uuid';
import { User } from "./User.entity";

@Entity("projects")
export class Project {

    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    user_id: string;

    @ManyToOne(() => User)
    @JoinColumn({ name: "user_id" })
    user: User;

    @Column()
    active: boolean;

    @CreateDateColumn()
    createdAt: Date

    constructor(){
        if(!this.id) this.id = uuid();
    }

}