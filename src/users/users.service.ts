import {UsersRepository} from "./users.repository"
import { Injectable } from "@nestjs/common"

@Injectable()
export class UsersService {

    constructor (public usersRepo : UsersRepository) {}

    findOne(id: string) {
        return this.usersRepo.findOne(id)
    }

    findAll() {
        return this.usersRepo.findAll()
    }

    create(content: string) {
        this.usersRepo.create(content)
    }
}