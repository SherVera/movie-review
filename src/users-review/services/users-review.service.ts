import { ReviewsService } from './../../reviews/services/reviews.service';
import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/services';

@Injectable()
export class UsersReviewService {
  constructor(
    private readonly usersService: UsersService,
    private readonly reviewsService: ReviewsService,
  ) {}

  async getReviewsByUser(userName: string) {
    const userNameUnique = userName.toLowerCase().trim().split(' ').join('');
    const user = await this.usersService.findOneBy({ userNameUnique });

    if (!user) {
      return {
        message: 'User Not Found',
      };
    }

    const reviews = await this.reviewsService.find({ user }, false);
    if (reviews) {
      return {
        message: 'User with all Reviews',
        data: {
          ...user,
          reviews,
        },
      };
    }
    return {
      data: user,
      message: 'User with empty Reviews',
    };
  }
}
