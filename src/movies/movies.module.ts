import { Module } from '@nestjs/common';
import { MoviesController } from './controllers/movies.controller';
import { MoviesRepository, MoviesService } from './services';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Movies } from './entities/movies.entity';
import { HttpModule } from '../common/http.module';
import { Reviews } from '../reviews/entities/reviews.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Movies, Reviews]), HttpModule],
  controllers: [MoviesController],
  providers: [MoviesService, MoviesRepository],
  exports: [MoviesService],
})
export class MoviesModule {}
