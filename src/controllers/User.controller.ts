import { NextFunction, Request, Response } from 'express';
import * as userRepository from '../database/repositories/User.repository';
import { createLoginToken, cryptPassword, descryptPassword } from '../services/authService.service';

export const create = async (req: Request, res: Response, next: NextFunction) => {
    try {
        if (!!(await userRepository.getByEmail(req.body.email))) throw new Error("User already signed up");
        else {
            const user = await userRepository.create({
                ...req.body,
                password: (await cryptPassword(req.body.password)).cryptResponse
            });

            const token = createLoginToken({ id: user.id, email: user.email });
            res.status(200).send({ token, id: user.id });
        }
    } catch (error: any) {
        res.status(400).send({ message: 'The request has failed: ' + error });
    }
};

export const login = async (req: Request, res: Response, next: NextFunction) => {
    const user = await userRepository.getByEmail(req.body.email);
    try {
        if (!!!user) res.status(400).send({ message: 'The request has failed: User is not signed up' });
        else {
            const validPassword = await descryptPassword(req.body.password, user.password);
            
            if (user.email == req.body.email && validPassword) {
                const token = createLoginToken({ id: user.id, email: user.email });
                res.status(200).send({ token, id: user.id });
            } else res.status(400).send({ message: 'The request has failed: The login information does not match' });
        }
    } catch (error: any) {
        res.status(400).send({ message: 'The request has failed: ' + error });
    }
};

export const destroy = async (req:Request, res: Response, next: NextFunction) => {
    try {
        const user = await userRepository.getById(req.params.id)
        if (!!!(user)) throw new Error("User does not exist");
        else {
            userRepository.destroy(req.params.id);
            res.status(200).send({ message: "Account successfully destroyed"});
        }
     
    } catch (error: any) {
        res.status(400).send({ message: 'The request has failed: ' + error });
    }
}

export const show = async (req: Request, res: Response, next: NextFunction) => {
    try {
        
        const user = await userRepository.getById(req.params.id)

        if (!!!(user)) throw new Error("User does not exist");
        else {
            res.status(200).send(user);
        }
    } catch (error: any) {
        res.status(400).send({ message: 'The request has failed: ' + error });
    }
}



