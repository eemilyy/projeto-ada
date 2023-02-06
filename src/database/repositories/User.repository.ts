import { User } from "../entities/User.entity";
import { AppDataSource as database } from '../../../ormconfig';

const repository = database.getRepository(User);

export const create = async (data: any) => {
    let user = new User();

    user.name = data.name;
    user.email = data.email;
    user.password = data.password;
    user.phone_number = data.phone_number;
    user.cpf_cnpj = data.cpf_cnpj;
    user.user_type = data.user_type;
    user.imageURL = data.imageURL;

    return await repository.save(user);
};

export const getByEmail = async(email: string) => {
    return await repository.findOneBy({ email: email });
};

export const getById = async (id:string) => {
    return await repository.findOneBy({ id:id });
};

export const destroy = async (email: string) => {
    // let project = getByName(name);
    if(!!(await repository.findOneBy({email}))) throw new Error("User does not exists");
    else{
        await repository.delete(email);
    }
}