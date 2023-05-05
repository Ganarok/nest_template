import { InjectConnection, InjectModel } from '@nestjs/mongoose'
import { Injectable } from '@nestjs/common'
import { Connection, Model } from 'mongoose'

import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'
import { Users } from './users.schema'

@Injectable()
export class UsersService {
    constructor(@InjectModel(Users.name) private usersModel: Model<Users>,) {}

    async create(createUserDto: CreateUserDto) {
        const newUser = new this.usersModel(createUserDto)
        return newUser.save()
    }

    findAll(): Promise<Users[]> {
        return this.usersModel.find().exec()
    }

    findOne(id: number): Promise<Users> {
        return this.usersModel.findById(id)
    }

    update(id: number, updateUserDto: UpdateUserDto): Promise<Users> {
        return this.usersModel.findByIdAndUpdate(id, updateUserDto)
    }

    remove(id: number) {
        return this.usersModel.findByIdAndDelete(id)
    }
}
