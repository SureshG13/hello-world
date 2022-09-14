import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {AutherDto, ImageDto, UserDto} from 'src/user/dto/user.dto';
//import { UserEntity } from '../service/user/entity/user.entity';
import { AutherEntity, ImageEntity, UserEntity } from './../../entity/user.entity';
import { IsNull, Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { Http2ServerResponse } from 'http2';
import { error } from 'console';
import { json } from 'stream/consumers';

export type User = any;
export type Author=any;
export type Image=any;
@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserEntity)
        private userRepository: Repository<UserEntity>
    ){}

    async create(user: UserDto):Promise<UserDto>{
      //console.log(user.username);
      /*const saltOrRounds=10;
        const password=user.password;
        const hash=await bcrypt.hash(password, saltOrRounds);
        user.password=hash;*/
        const users= await this.findOne(user.username);
        return this.userRepository.save(user);
        //return this.userRepository.save(user);
        /*if(users.length<1)
        {
          return this.userRepository.save(user);
        }
        else{
          throw new BadRequestException(error);
            //console.log("User Exist");

        }*/
        //return this.userRepository.save(user);
    }
    findAll(): Promise<UserDto[]> {
        return this.userRepository.find({select:["userId","username"]});
    }
      async findOne(username: string):Promise<User| undefined>{
        return this.userRepository.find({where:{username}});
      }
      async findUserId(userId: number):Promise<User|undefined>{
        return this.userRepository.find({select:["userId","username"],where:{userId}});
      }
}

@Injectable()
export class AuthorService {
  constructor(
      @InjectRepository(AutherEntity)
      private userRepository: Repository<AutherEntity>
  ){}

  async create(author: AutherDto):Promise<AutherDto>{
      //let result=this.userRepository.save(author);
      return this.userRepository.save(author);
  }

  findAll(): Promise<AutherDto[]> {

      return this.userRepository.find({select:["authorName","quote"]});
  }
    async findOne(authorName: string): Promise<Author| undefined>{
      return this.userRepository.find({select:["quote"],where:{authorName}});
    }
    /*async findOne(authorId: number): Promise<Author| undefined>{
      return this.userRepository.find({where:{authorId}});
    }*/
}

@Injectable()
export class ImageService {
  constructor(
      @InjectRepository(ImageEntity)
      private userRepository: Repository<ImageEntity>
  ){}

  async create(author: ImageDto):Promise<ImageDto>{
      //let result=this.userRepository.save(author);
      return this.userRepository.save(author);
  }
  findAll(): Promise<ImageDto[]> {
    return this.userRepository.find();
}
async findOne(userName: string): Promise<Image| undefined>{
  return this.userRepository.find({where:{userName}});
}
}