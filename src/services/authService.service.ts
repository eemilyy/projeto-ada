import crypto from 'crypto'
import { CryptResponse } from '../interfaces/CryptPasswordResponse.interface';
import jwt from 'jsonwebtoken';
import { JWTPayloadResetPasswordResponse } from '../interfaces/JWTPayloadResponse.interface';

export const cryptPassword = (password: string) => {
    return new Promise<CryptResponse>((resolve, reject) => {
        const salt = crypto.randomBytes(8).toString('hex');
        crypto.scrypt(password, salt, 64, (error, hash) => {
            if (error) reject(error);
            const response = { cryptResponse: (`${salt}:${hash.toString('hex')}`) };
            resolve(response);
        })
    })
}

export const descryptPassword = (password: string, cryptPassword: string) => {
    return new Promise<Boolean>((resolve, reject) => {
        const [salt, hash] = cryptPassword.split(":");
        crypto.scrypt(password, salt, 64, (error, hashVerification) => {
            if (error) reject(error);
            resolve(hash === hashVerification.toString('hex'));
        })
    })
}

export const createLoginToken = (payload: any) => {
    return jwt.sign(payload, process.env.JWT_SECRET as string, { expiresIn: "1d" });
}

export const decodeLoginToken = async (token: any) => {
    return <JWTPayloadResetPasswordResponse>jwt.verify(token, process.env.JWT_SECRET);
}