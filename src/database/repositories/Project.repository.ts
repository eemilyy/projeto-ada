import { Project } from "../entities/Project.entity";
import { AppDataSource as database } from '../../../ormconfig';

const repository = database.getRepository(Project);

export const create = async (data: any) => {
    let project = new Project();

    project.name = data.name;
    project.description = data.description;
    project.phone_number = data.phone_number;
    project.user_id = data.user_id;

    return await repository.save(project);
};

export const getByName = async (name:string) => {
    return await repository.findOneBy({ name:name });
};

export const getById = async (id:string) => {
    return await repository.findOneBy({ id:id });
};

export const destroy = async (name: string) => {
    // let project = getByName(name);
    if(!!(await repository.findOneBy({name}))) throw new Error("Project does not exists");
    else{
        await repository.delete(name);
    }
}

// export const addStudent = async (projetc_id:string, student_id:string) => {
//     return await repository.save(
//         {id: projetc_id,
//         students_id: student_id }
//     );
// }

export const getAll = async() => {
    return await database.query(`SELECT * FROM projects`)
}