import { Injectable } from '@nestjs/common';
import { MoviesService } from '../../movies/services';
import { ReviewsService } from '../../reviews/services';

@Injectable()
export class MoviesReviewService {
  constructor(
    private readonly moviesService: MoviesService,
    private readonly reviewsService: ReviewsService,
  ) {}

  async getReviewsByMovie(tmdbId: number) {
    const movie = await this.moviesService.findOneBy({ tmdbId });

    if (!movie) {
      return {
        message: 'Movie Not Found',
      };
    }

    const reviews = await this.reviewsService.find({ tmdbId });
    if (reviews) {
      return {
        message: 'Movie with all Reviews',
        data: {
          ...movie,
          reviews,
        },
      };
    }
    return {
      data: movie,
      message: 'Movie with empty Reviews',
    };
  }
}
