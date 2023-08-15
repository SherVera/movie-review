import { Module } from '@nestjs/common';
import { UsersReviewController } from './controllers/users-review.controller';
import { UsersReviewService, UsersReviewRepository } from './services';
import { UsersModule } from '../users/users.module';
import { ReviewsModule } from '../reviews/reviews.module';

@Module({
  imports: [UsersModule, ReviewsModule],
  controllers: [UsersReviewController],
  providers: [UsersReviewService, UsersReviewRepository],
})
export class UsersReviewModule {}
