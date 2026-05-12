import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    url: process.env.DB_URL,
    entities: ['dist/**/*.entity{.ts,.js}'],
    synchronize: true
}