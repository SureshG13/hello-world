import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class UserEntity {
    @PrimaryGeneratedColumn()
    userId: number;

    @Column({ nullable: true})
    username: string;

    @Column({ nullable: true})
    password: string;
}
