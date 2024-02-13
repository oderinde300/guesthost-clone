import client from "../../axios";
import { CreateAccountInterface, LoginInterface } from "../../interfaces"
export const createAccount = async (param: CreateAccountInterface) => {
    try {
        const {data} = await client.post('auth/register', param);
        return Promise.resolve(data)
    } catch (error) {
        return Promise.reject(error)
    }
}

export const Login = async (param: LoginInterface) => {
    try {
        const {data} = await client.post('auth/login', param);
        return Promise.resolve(data)
    } catch (error) {
        return Promise.reject(error)
    }
}