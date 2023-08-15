import { Controller, Get, Param } from '@nestjs/common';
import { UsersReviewService } from '../services';

@Controller('users')
export class UsersReviewController {
  constructor(private readonly usersReviewService: UsersReviewService) {}
  @Get(':userName/reviews')
  async getReviewsByMovie(@Param('userName') userName: string) {
    return this.usersReviewService.getReviewsByUser(userName);
  }
}
