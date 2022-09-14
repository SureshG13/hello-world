import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class UserEntity {
    @PrimaryGeneratedColumn()
    userId: number;

    @Column({ nullable: true, unique:true})
    username: string;

    @Column({ nullable: true})
    password: string;
    
}

@Entity()
export class AutherEntity{
    @PrimaryGeneratedColumn()
    authorId: number;

    @Column({nullable:true})
    authorName: string;

    @Column({nullable:true})
    quote: string;
}

@Entity()
export class ImageEntity{
    @PrimaryGeneratedColumn()
    userId: number;

    @Column()
    userName:string;

    @Column({type:'bytea',nullable:true})
    imageFile: Uint8Array;
}