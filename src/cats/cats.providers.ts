import {Connection, Repository} from 'typeorm';
import {Cat} from './entities/cats.entity';

export const catsProviders = [
    {
        provide: 'CATS_REPOSITORY',
        useFactory: (connection: Connection) => connection.getRepository(Cat),
        inject: ['DATABASE_CONNECTION'],
    },
];