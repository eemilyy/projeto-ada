import { Entity, Column, CreateDateColumn, PrimaryColumn } from "typeorm";
import { v4 as uuid } from 'uuid';

@Entity("users")
export class User {

    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    phone_number: string;

    @Column()
    cpf_cnpj: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    user_type: string;

    @Column()
    imageURL: string;

    @Column()
    active: boolean;

    @CreateDateColumn()
    createdAt: Date

    constructor(){
        if(!this.id) this.id = uuid();
    }

}