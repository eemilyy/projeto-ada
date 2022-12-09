import { DataSource } from "typeorm";


export const AppDataSource = new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'projeto-ada',
    synchronize: false,
    //entities: [User], 
    migrations: [
        __dirname + "/src/database/migrations/*.ts"
    ]
})