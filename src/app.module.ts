import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { MoviesModule } from './movies/movies.module';
import { ReviewsModule } from './reviews/reviews.module';
import config from './config/config';
import configSchema from './config/config.schema';
import { HttpModule } from './common/http.module';
import { MoviesReviewModule } from './movies-review/movies-review.module';
import { UsersReviewModule } from './users-review/users-review.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      load: [config],
      isGlobal: true,
      validationSchema: configSchema,
    }),
    TypeOrmModule.forRoot({
      type: process.env.DATABASE_TYPE as any,
      host: process.env.DATABASE_HOST,
      port: parseInt(process.env.DATABASE_PORT),
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_DB,
      entities: [],
      synchronize: false,
      autoLoadEntities: true,
    }),
    UsersModule,
    MoviesModule,
    ReviewsModule,
    HttpModule,
    MoviesReviewModule,
    UsersReviewModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
