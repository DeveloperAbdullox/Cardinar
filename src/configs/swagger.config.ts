import { INestApplication } from "@nestjs/common";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

export const configureSwagger = (app: INestApplication) => {
    let swaggerConfig = new DocumentBuilder()

    .setTitle('Cardinar')
    // .addBearerAuth()
    .setVersion('1.0.0')
    .build()

    let docs = SwaggerModule.createDocument(app, swaggerConfig);
    SwaggerModule.setup('docs', app, docs, {
        swaggerOptions: {persistAuthorization: true}
    })
}