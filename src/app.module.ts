import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { validateEnvs } from './app.config';

@Module({
    imports: [ConfigModule.forRoot({
        isGlobal: true,
        cache: true,
        validate: validateEnvs,
    })],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
