import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from 'typeorm';

@Entity()
export class ProducCategory {
    
   @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn ()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;

  @Column({ default: true })
  isActive: boolean;

  @Column()
  user_id: number;
}