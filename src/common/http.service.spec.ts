import {
  HttpModule as HttpModuleAxios,
  HttpService as HttpServiceAxios,
} from '@nestjs/axios';
import { Test, TestingModule } from '@nestjs/testing';
import { ConfigModule } from '@nestjs/config';
import { HttpModule } from './http.module';
import { HttpService } from './http.service';

describe('HttpService', () => {
  let service: HttpService;
  // const resolve = { data: {} };
  const mockUp = {
    post: jest.fn().mockImplementation(() => Promise.resolve({})),
  };
  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule, HttpModuleAxios, ConfigModule],
      providers: [HttpServiceAxios],
    })
      .overrideProvider(HttpServiceAxios)
      .useValue(mockUp)
      .compile();

    service = module.get<HttpService>(HttpService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
