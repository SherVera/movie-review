import { Module } from '@nestjs/common';
import { MoviesReviewController } from './controllers/movies-review.controller';
import { ReviewsModule } from '../reviews/reviews.module';
import { MoviesModule } from '../movies/movies.module';
import { UsersModule } from '../users/users.module';
import { MoviesReviewService } from './services';

@Module({
  imports: [ReviewsModule, MoviesModule, UsersModule],
  providers: [MoviesReviewService],
  controllers: [MoviesReviewController],
})
export class MoviesReviewModule {}
