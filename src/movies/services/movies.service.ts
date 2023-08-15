import { Injectable } from '@nestjs/common';
import { MoviesRepository } from './movies.repository';
import { Movies } from '../entities/movies.entity';
import { HttpService } from '../../common/http.service';

@Injectable()
export class MoviesService {
  constructor(
    private readonly moviesRepository: MoviesRepository,
    private httpService: HttpService,
  ) {}

  async saveMovieIfNotExists(tmdbId: number) {
    // Find movie located
    const localMovie = await this.findOneBy({ tmdbId });
    if (!localMovie) {
      const movie = await this.httpService.get(`/movie/${tmdbId}`);
      if (movie) {
        await this.create({
          tmdbId,
          title: movie.title,
          releaseDate: movie.release_date,
          poster: movie.poster_path,
          overview: movie.overview,
        });
      }
    }
  }

  async findAll(): Promise<Movies[]> {
    return this.moviesRepository.findAll();
  }

  async find(filter: any): Promise<Movies[]> {
    return this.moviesRepository.find(filter);
  }

  async findOneById(id: number): Promise<Movies | null> {
    return this.moviesRepository.findOneBy({ id: id });
  }

  async findOneBy(filter: object): Promise<Movies> {
    return this.moviesRepository.findOneBy(filter);
  }

  async create(data: object): Promise<Movies> {
    return await this.moviesRepository.create(data);
  }
}
