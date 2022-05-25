import {readFile, writeFile} from "fs/promises"
import { Injectable } from "@nestjs/common"

@Injectable()
export class UsersRepository {
    async findOne(id: string) {
        const contents = await readFile('users.json', 'utf8')
        const users = JSON.parse(contents)
        return users[id]
    }

    async findAll() {
        const contents = await readFile('users.json', 'utf8')
        const users = JSON.parse(contents)
        
        return users
    }

    async create(user: string) {
        const contents = await readFile('users.json', 'utf8')
        const users = JSON.parse(contents)

        const id = Math.floor(Math.random() * 999)
        users[id] = {id, content: user} 

        await writeFile('users.json', JSON.stringify(users))
    }
}