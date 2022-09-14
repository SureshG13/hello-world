import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { authorController, imageController, UserController } from './controller/controller.controller';
import { AuthorService, ImageService, UserService } from './service/user/user.service';
import { AutherEntity, ImageEntity, UserEntity } from './entity/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity]), TypeOrmModule.forFeature([AutherEntity]),TypeOrmModule.forFeature([ImageEntity])],
  controllers: [UserController, authorController, imageController],
  providers: [UserService, AuthorService, ImageService],
  exports: [UserService,AuthorService,ImageService]
})
export class UserModule {}
