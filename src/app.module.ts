import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

import { AppController } from './app.controller'
import { AppService } from './app.service'
import { UsersModule } from './users/users.module'

@Module({
    imports: [
        UsersModule,
        MongooseModule.forRoot(
            process.env.ENV === 'local'
                ? 'mongodb://db/db'
                : `${process.env.MONGODB_URI}`
        )
    ],
    controllers: [AppController],
    providers: [AppService]
})
export class AppModule {}
