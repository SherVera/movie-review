import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Users } from '../entities/users.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersRepository {
  constructor(
    @InjectRepository(Users)
    private usersRepository: Repository<Users>,
  ) {}

  async findAll(): Promise<Users[]> {
    return this.usersRepository.find();
  }

  async findOneById(id: number): Promise<Users> {
    return this.usersRepository.findOneBy({ id: id });
  }

  async findOneBy(filter: object): Promise<Users> {
    return this.usersRepository.findOneBy(filter);
  }

  async create(data: object): Promise<Users> {
    const newUser = await this.usersRepository.insert(data);
    return this.findOneById(newUser.identifiers[0]?.id);
  }
}
