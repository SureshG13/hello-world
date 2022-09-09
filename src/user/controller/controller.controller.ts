import {Controller, Get, Post, Put } from '@nestjs/common';
import {UserService} from '../service/user/user.service';
import { UserDto } from '../dto/user.dto';
import {Body, Param} from '@nestjs/common/decorators/http/route-params.decorator'
import * as bcrypt from 'bcrypt';

@Controller('users')
export class UserController {
    constructor( private userService: UserService) {};
    userscreate=null;
    @Post()
    async create(@Body() user: UserDto): Promise<UserDto>{
            return this.userService.create(user);
       
    }

    @Get()
    async findAll(): Promise<UserDto[]> {
        return this.userService.findAll();
    }

    @Get(':name')
    async findOne(@Param('name') name: string){
        return this.userService.findOne(name);
    }
}
