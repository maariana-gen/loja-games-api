/* eslint-disable prettier/prettier */

import { IsNotEmpty, IsNumber } from "class-validator";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Categoria } from "./../../categoria/entities/categoria.entity";

@Entity({ name: "tb_produtos" })
export class Produto {

    @PrimaryGeneratedColumn()
    id!: number;

    @IsNotEmpty()
    @Column({ length: 255, nullable: false })
    nome!: string;

    @IsNotEmpty()
    @Column({ length: 500, nullable: false })
    descricao!: string;

    @IsNumber()
    @Column("decimal", { precision: 10, scale: 2, nullable: false })
    preco!: number;

    @ManyToOne(() => Categoria, (categoria) => categoria.produto, { eager: true })
    categoria!: Categoria;
}
