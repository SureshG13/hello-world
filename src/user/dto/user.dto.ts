import { IsNumber, IsString } from "class-validator";

export class UserDto {
    @IsNumber()
    userId: number;

    @IsString()
    username: string;
    
    @IsString()
    password: string;
}
