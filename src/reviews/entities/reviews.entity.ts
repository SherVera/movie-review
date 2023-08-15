import { Users } from '../../users/entities/users.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity()
export class Reviews {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  tmdbId: number;

  @ManyToOne(() => Users)
  user: Users;

  @Column()
  rating: number;
}
