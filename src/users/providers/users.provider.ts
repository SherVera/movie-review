import { DataSource } from 'typeorm';
import { Users } from '../entities/users.entity';

export const userProviders = [
  {
    provide: 'USERS_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Users),
    inject: ['DATA_SOURCE'],
  },
];
