import {UsersRepository} from "./users.repository"
import { Injectable } from "@nestjs/common"
import { User } from "./schema/user.schema"
import { CreateUserDto } from "./dtos/create-user.dto"


@Injectable()
export class UsersService {
    constructor(private readonly usersRepository: UsersRepository) {}

    async getUserByName(userName: string): Promise<User> {
        return this.usersRepository.findOne({userName})
    }

    async getUsers(): Promise<User[]> {
        return this.usersRepository.find({});
    }

    async createUser(user: CreateUserDto): Promise<User> {
        return this.usersRepository.create({
            nickname: user.nickname,
            firstname: user.firstname,
            lastname: user.lastname,
            password: user.password
        })
    }
    
}