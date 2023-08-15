import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Reviews } from '../entities/reviews.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ReviewsRepository {
  constructor(
    @InjectRepository(Reviews)
    private reviewsRepository: Repository<Reviews>,
  ) {}

  async findAll(): Promise<Reviews[]> {
    return this.reviewsRepository.find({
      relations: {
        user: true,
      },
    });
  }

  async find(filter: any, hasRelations: boolean): Promise<Reviews[]> {
    return this.reviewsRepository.find({
      where: filter,
      relations: {
        user: hasRelations,
      },
    });
  }

  async findOneById(id: number): Promise<Reviews> {
    return this.reviewsRepository.findOneBy({ id: id });
  }

  async findOneBy(filter: object): Promise<Reviews> {
    return this.reviewsRepository.findOneBy(filter);
  }

  async create(data: any): Promise<Reviews | object> {
    try {
      const reviewCreate = await this.reviewsRepository.insert(data);
      const review = await this.findOneById(reviewCreate.identifiers[0]?.id);
      return {
        message: 'success',
        data: review,
      };
    } catch (error) {}
  }
}
