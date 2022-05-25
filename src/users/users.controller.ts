import { Controller, Get, Post, Body, Param, NotFoundException} from '@nestjs/common';
import {CreateUserDto} from "./dtos/create-user.dto"
import {UsersService} from "./users.service"

@Controller('users')
export class UsersController {

    constructor( public usersService: UsersService) {}

    @Get()
    listUsers() {
        return this.usersService.findAll()
    }

    @Post()
    createUsers(@Body() body: CreateUserDto) {
        return this.usersService.create(body.content)
    }

    @Get("/:id")
    async getUser(@Param('id') id: string) {
        const user = await this.usersService.findOne(id)
        if(!user) {
            throw new NotFoundException('user not found')
        }

        return user
    }
}
