import { Test, TestingModule } from '@nestjs/testing';
import { MoviesReviewService } from './movies-review.service';

describe('MoviesReviewService', () => {
  let service: MoviesReviewService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MoviesReviewService],
    }).compile();

    service = module.get<MoviesReviewService>(MoviesReviewService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
