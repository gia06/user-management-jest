import {IsString} from 'class-validator'

export class CreateUserDto {
    @IsString()
    nickname: string;
    firstname: string;
    lastname: string;
    password: string;
    
}