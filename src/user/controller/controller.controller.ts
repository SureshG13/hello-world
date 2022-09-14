import {Controller, Get, HttpException, HttpStatus, Post, Put } from '@nestjs/common';
import {AuthorService, ImageService, UserService} from '../service/user/user.service';
import { ImageDto, UserDto } from '../dto/user.dto';
import { AutherDto } from '../dto/user.dto';
import {Body, Param} from '@nestjs/common/decorators/http/route-params.decorator'
import * as bcrypt from 'bcrypt';


function isNumber(str: string): boolean {
    if (typeof str !== 'string') {
      return false;
    }
  
    if (str.trim() === '') {
      return false;
    }
  
    return !Number.isNaN(Number(str));
  }

@Controller('users')
export class UserController {    
    constructor( private userService: UserService) {};
    userscreate=null;
    @Post()
    async create(@Body() user: UserDto): Promise<any>{
        let resu= this.userService.create(user);
        return {
            "message":"Data Inserted Successfully",
        }
    }

    @Get()
    async findAll(): Promise<UserDto[]> {
        return this.userService.findAll();
    }

    @Get(':name')
    async findOne(@Param('name') name:string){
        if(isNumber(name)){
            return this.userService.findUserId(Number(name));
        }
        return this.userService.findOne(name);
    }
/*
    @Get(':userId')
    async findUserId(@Param('id') id:number){
        return this.userService.findUserId(id);
    }*/
}

@Controller('authors')
export class authorController{
    constructor( private authorService: AuthorService) {};
    userscreate=null;
    @Post()
    async create(@Body() author: AutherDto): Promise<AutherDto>{
        return this.authorService.create(author);
    }

    @Get()
    async findAll(): Promise<AutherDto[]> {
        return this.authorService.findAll();
    }

    @Get(':authorName')
    async findOne(@Param('authorName') name: string){
        return this.authorService.findOne(name);
    }
    /*@Get(':authorId')
    async findOne(@Param('authorId') authorName: number){
        return this.authorService.findOne(authorName);
    }*/
}

@Controller('images')
export class imageController{
    constructor( private imageService: ImageService) {};
    userscreate=null;
    @Post()
    async create(@Body() author: ImageDto): Promise<ImageDto>{
        return this.imageService.create(author);
    }
    @Get()
    async findAll(): Promise<ImageDto[]> {
        return this.imageService.findAll();
    }
    @Get(':userName')
    async findOne(@Param('userName') name: string){
        return this.imageService.findOne(name);
    }
}