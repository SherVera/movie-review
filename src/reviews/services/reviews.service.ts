import { MoviesService } from '../../movies/services';
import { UsersService } from '../../users/services';
import { Reviews } from '../entities/reviews.entity';
import { ReviewsRepository } from './reviews.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ReviewsService {
  constructor(
    private readonly reviewsRepository: ReviewsRepository,
    private readonly moviesService: MoviesService,
    private readonly usersService: UsersService,
  ) {}

  async create(data: any): Promise<Reviews | object> {
    // Find User
    let user = await this.usersService.findOneBy({
      userNameUnique: data.userName.toLowerCase().trim().split(' ').join(''),
    });

    // Create if user not exists
    if (!user) {
      user = await this.usersService.create({
        userNameUnique: data.userName.toLowerCase().trim().split(' ').join(''),
        userName: data.userName,
      });
    }

    await this.moviesService.saveMovieIfNotExists(data.tmdbId);

    // Verify if movie was reviewed by the user
    if (
      await this.reviewsRepository.findOneBy({
        user: user,
        tmdbId: data.tmdbId,
      })
    ) {
      return {
        message: 'Review exists',
      };
    }

    // Create a new Review
    return this.reviewsRepository.create({
      user: user,
      tmdbId: data.tmdbId,
      rating: data.rating,
    });
  }

  async findAll(): Promise<Reviews[]> {
    return this.reviewsRepository.findAll();
  }

  async find(filter: any, hasRelations: boolean = true): Promise<Reviews[]> {
    return this.reviewsRepository.find(filter, hasRelations);
  }
}
