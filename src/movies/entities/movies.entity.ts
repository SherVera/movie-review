import { Entity, PrimaryGeneratedColumn, Column, Unique } from 'typeorm';

@Entity()
@Unique(['tmdbId'])
export class Movies {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  tmdbId: number;

  @Column()
  title: string;

  @Column()
  releaseDate: string;

  @Column()
  poster: string;

  @Column()
  overview: string;
}
