import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { MoviesReviewService } from '../services';

@Controller('movies')
export class MoviesReviewController {
  constructor(private readonly moviesReviewService: MoviesReviewService) {}
  @Get(':tmdbId/reviews')
  async getReviewsByMovie(@Param('tmdbId', ParseIntPipe) tmdbId: number) {
    return this.moviesReviewService.getReviewsByMovie(tmdbId);
  }
}
