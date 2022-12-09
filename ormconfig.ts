import { DataSource } from "typeorm";
import { User } from "./src/database/entities/User.entity";
import { Project } from "./src/database/entities/Project.entity";


export const AppDataSource = new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'projeto-ada',
    synchronize: false,
    entities: [User, Project], 
    migrations: [
        __dirname + "/src/database/migrations/*.ts"
    ]
})