/* eslint-disable import/prefer-default-export */
/* eslint-disable camelcase */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
} from 'typeorm';

  @Entity()
export class Answer {
    @PrimaryGeneratedColumn()
    id:number;

    // Context questions
    @Column()
    age_interval:string;

    @Column()
    visual_impairment:string;

    @Column()
    education_level:string;

    @Column()
    sex:string;

    @Column()
    background_color:string;

    @Column()
    color_scheme:string;

    // Accuracy questions
    @Column()
    aq1:string;

    @Column()
    aq2:string;

    @Column()
    aq3:string;

    @Column()
    aq4:string;

    @Column()
    aq5:string;

    @Column()
    aq6:string;

    @Column()
    aq7:string;

    @Column()
    aq8:string;

    @Column()
    aq9:string;

    @Column()
    aq10:string;

    @Column()
    aq11:string;

    @Column()
    aq12:string;

    @Column()
    aq13:string;

    @Column()
    aq14:string;

    @Column()
    aq15:string;

    @Column()
    aq16:string;

    @Column()
    qq1a:string;

    @Column()
    qq1b:string;

    @Column()
    qq1c:string;

    @Column()
    qq2a:string;

    @Column()
    qq2b:string;

    @Column()
    qq2c:string;

    @Column()
    qq3a:string;

    @Column()
    qq3b:string;

    @Column()
    qq3c:string;

    @Column()
    qq4a:string;

    @Column()
    qq4b:string;

    @Column()
    qq4c:string;
}
