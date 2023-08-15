import { Body, Controller, Get, Post } from '@nestjs/common';
import { ReviewsService } from '../services';
import { Reviews } from '../entities/reviews.entity';

@Controller('reviews')
export class ReviewsController {
  constructor(private readonly reviewsService: ReviewsService) {}

  @Post()
  async create(@Body() data: any): Promise<Reviews | object> {
    return this.reviewsService.create(data);
  }

  @Get()
  async findAll(): Promise<Reviews[]> {
    return this.reviewsService.findAll();
  }
}
