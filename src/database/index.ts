import {AppDataSource as database } from "../../ormconfig";

export default async (): Promise<void> => {
    return database.initialize()
    .then( () => console.log("Banco de dados incializado") )
    .catch(error => console.log(`Ocorreu um erro durante a inicialização do banco de dados: ${error}`));
}   