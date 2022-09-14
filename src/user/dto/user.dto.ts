import { IsNumber, IsString } from "class-validator";

export class UserDto {
    @IsNumber()
    userId: number;

    @IsString()
    username: string;
    
    @IsString()
    password: string;
}

export class AutherDto{
    @IsNumber()
    authorId: number;

    @IsString()
    authorName: string;

    @IsString()
    quote: string;
}

export class ImageDto{
    @IsNumber()
    userId: number;

    @IsString()
    userName: string;

    imageFile: Uint8Array;
}
