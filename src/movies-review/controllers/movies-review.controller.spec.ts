import { Test, TestingModule } from '@nestjs/testing';
import { MoviesReviewController } from './movies-review.controller';

describe('MoviesReviewController', () => {
  let controller: MoviesReviewController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MoviesReviewController],
    }).compile();

    controller = module.get<MoviesReviewController>(MoviesReviewController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
