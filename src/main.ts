import { NestFactory } from '@nestjs/core'
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'

import { AppModule } from './app.module'

async function serve() {
    const app = await NestFactory.create(AppModule)

    const config = new DocumentBuilder()
        .setTitle('Nest Template')
        .setContact('Nest Template', '', '')
        .setDescription('Nest Template API description')
        .setVersion('1.0')
        .addTag('users')
        .build()

    const document = SwaggerModule.createDocument(app, config)
    SwaggerModule.setup('docs', app, document)

    await app.listen(3000)

    console.log(
        `\nEnv: ${
            process.env.ENV
        }\nApplication is running on ${await app.getUrl()}`
    )
}

serve()
