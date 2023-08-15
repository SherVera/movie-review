import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Movies } from '../entities/movies.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class MoviesRepository {
  constructor(
    @InjectRepository(Movies)
    private moviesRepository: Repository<Movies>,
  ) {}

  async findAll(): Promise<Movies[]> {
    return this.moviesRepository.find();
  }

  async find(filter: any): Promise<Movies[]> {
    return this.moviesRepository.findBy(filter);
  }

  async findOneById(id: number): Promise<Movies> {
    return this.moviesRepository.findOneBy({ id: id });
  }

  async findOneBy(filter: object): Promise<Movies> {
    return this.moviesRepository.findOneBy(filter);
  }

  async create(data: object): Promise<Movies> {
    const newMovie = await this.moviesRepository.insert(data);
    return this.findOneById(newMovie.identifiers[0]?.id);
  }
}
