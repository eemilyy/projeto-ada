import { Entity, Column, CreateDateColumn, PrimaryColumn } from "typeorm";
import { v4 as uuid } from 'uuid';

@Entity("users")
export class User {

    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    user_type: string;

    @Column()
    image_URL: string;

    @Column()
    active: boolean;

    @CreateDateColumn()
    createdAt: Date

    constructor(){
        if(!this.id) this.id = uuid();
    }

}