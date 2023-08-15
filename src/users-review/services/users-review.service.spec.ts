import { Test, TestingModule } from '@nestjs/testing';
import { UsersReviewService } from './users-review.service';

describe('UsersReviewService', () => {
  let service: UsersReviewService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersReviewService],
    }).compile();

    service = module.get<UsersReviewService>(UsersReviewService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
