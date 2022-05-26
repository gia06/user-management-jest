import { Controller, Get, Post, Body, Param, NotFoundException} from '@nestjs/common';
import {CreateUserDto} from "./dtos/create-user.dto"
import {UsersService} from "./users.service"

@Controller('users')
export class UsersController {

    constructor( public usersService: UsersService) {}

    @Get()
    listUsers() {
        return this.usersService.getUsers()
    }

    @Post()
    createUsers(@Body() body: CreateUserDto) {
        return this.usersService.createUser(body)
    }

    // @Get("/:id")
    // async getUser(@Param('id') id: string) {
    //     const user = await this.usersService.findOne(id)
    //     if(!user) {
    //         throw new NotFoundException('user not found')
    //     }

    //     return user
    // }
}
