import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { AppConfigVariables } from './app.config';

async function bootstrap(): Promise<void> {
    const app = await NestFactory.create(AppModule);
    const config = app.get<ConfigService<AppConfigVariables>>(ConfigService<AppConfigVariables>);
    config.get('NODE_ENV');
    await app.listen(config.getOrThrow('PORT'));
}
bootstrap();
