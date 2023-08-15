import { Test, TestingModule } from '@nestjs/testing';
import { UsersReviewController } from './users-review.controller';

describe('UsersReviewController', () => {
  let controller: UsersReviewController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersReviewController],
    }).compile();

    controller = module.get<UsersReviewController>(UsersReviewController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
