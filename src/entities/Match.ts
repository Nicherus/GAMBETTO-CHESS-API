import {Entity, PrimaryGeneratedColumn, Column, BaseEntity, Generated, OneToMany} from 'typeorm';
import { Piece } from './Piece';

@Entity()
export class Match extends BaseEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Generated('uuid')
    secret_key: string;

    @Column()
    status: string;

    @OneToMany(() => Piece, piece => piece.match)
    pieces: Piece[];

}
