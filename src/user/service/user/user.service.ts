import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {UserDto} from 'src/user/dto/user.dto';
//import { UserEntity } from '../service/user/entity/user.entity';
import { UserEntity } from './../../entity/user.entity';
import { IsNull, Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

export type User = any;

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserEntity)
        private userRepository: Repository<UserEntity>
    ){}

    async create(user: UserDto):Promise<UserDto>{
      console.log(user.username);
      const saltOrRounds=10;
        const password=user.password;
        const hash=await bcrypt.hash(password, saltOrRounds);
        user.password=hash;
        const users= await this.findOne(user.username);
        if(users.length<1)
        {
          return this.userRepository.save(user);
        }
        else{
            console.log("User Exist");
        }
        //return this.userRepository.save(user);
    }

    findAll(): Promise<UserDto[]> {

        return this.userRepository.find();
    }

    private readonly users = [
        {
          userId: 1,
          username: 'user1',
          password: 'password1',
        },
        {
          userId: 2,
          username: 'user2',
          password: 'password2',
        },
      ];
      async findOne(username: string): Promise<User| undefined>{
        return this.userRepository.find({where:{username}});
      }
}
