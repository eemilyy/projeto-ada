import { NextFunction, Request, Response } from 'express';
import * as projectRepository from '../database/repositories/Project.repository';

export const create = async (req: Request, res: Response, next: NextFunction) => {
    try {
        if (!!(await projectRepository.getByName(req.body.name))) throw new Error("Project already exists");
        else {
            const project = await projectRepository.create({
                ...req.body
            });
            res.status(201).send({ message: req.body });
        }
        
    } catch (error: any) {
        res.status(400).send({ message: 'The request has failed: ' + error });
    }
}

export const show = async (req: Request, res: Response, next: NextFunction) => {
    try {
        
        const project = await projectRepository.getById(req.params.id)

        if (!!!(project)) throw new Error("Project does not exist");
        else {
            res.status(200).send(project);
        }
    } catch (error: any) {
        res.status(400).send({ message: 'The request has failed: ' + error });
    }
}

export const destroy = async (req:Request, res: Response, next: NextFunction) => {
    try {
        const project = await projectRepository.getById(req.params.id)
        if (!!!(project)) throw new Error("Project does not exist");
        else {
            projectRepository.destroy(req.params.id);
            res.status(200).send({ message: "project successfully destroyed"});
        }
     
    } catch (error: any) {
        res.status(400).send({ message: 'The request has failed: ' + error });
    }
}

// export const addStudent = async (req:Request, res: Response, next: NextFunction) => { //verificar porque não está indo
//     try {
//         if (!!!(await projectRepository.getById(req.params.id))) throw new Error("Project does not exist");
//         else {
//             const project = await projectRepository.addStudent(req.params.id, req.body.students_id);
//             res.status(201).send(project);
//         }
        
//     } catch (error: any) {
//         res.status(400).send({ message: 'The request has failed: ' + error });
//     }
// }

export const index = async (req: Request, res: Response, next: NextFunction) => {
    try{
        const allProjects = await projectRepository.getAll();
        res.status(200).send(allProjects);
    } catch (error: any) {
        res.status(400).send({ message: 'The request has failed: ' + error });
    } 
}