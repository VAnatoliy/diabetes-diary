import { plainToInstance } from 'class-transformer';
import { IsEnum, IsNumber, validateSync } from 'class-validator';

enum Environment {
    Development = 'dev',
    Production = 'prod',
    Local = 'local',
}

export class AppConfigVariables {
    @IsNumber()
    PORT: number;

    @IsEnum(Environment)
    NODE_ENV: Environment;
}

export function validateEnvs(config: Record<string, unknown>): AppConfigVariables {
    const validatedConfig = plainToInstance(
      AppConfigVariables,
      config,
      { enableImplicitConversion: true },
    );
    const errors = validateSync(validatedConfig, { skipMissingProperties: false });

    if (errors.length > 0) {
        throw new Error(errors.toString());
    }
    return validatedConfig;
}
