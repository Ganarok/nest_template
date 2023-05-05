import { ApiProperty } from "@nestjs/swagger"
import { IsString } from "class-validator"

export class CreateUserDto {
    @ApiProperty({ required: true })
    @IsString()
    readonly username: string

    @ApiProperty({ required: true })
    @IsString()
    readonly email: string

    @ApiProperty({ required: true })
    @IsString()
    readonly password: string

    @ApiProperty({ required: false })
    @IsString()
    readonly role: string

    @ApiProperty({ required: false, default: '' })
    @IsString()
    readonly avatar: string
}
