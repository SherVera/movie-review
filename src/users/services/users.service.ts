import { Injectable } from '@nestjs/common';
import { Users } from '../entities/users.entity';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async create(data: object): Promise<Users> {
    return await this.usersRepository.create(data);
  }

  async findOneBy(filter: object): Promise<Users> {
    return this.usersRepository.findOneBy(filter);
  }
}
