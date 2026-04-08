/* eslint-disable prettier/prettier */

import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Produto } from "../../produto/entities/produto.entity";

@Entity({ name: "tb_categorias" })
export class Categoria {

@PrimaryGeneratedColumn()
id!: number;

@Column({ length: 255, nullable: false })
descricao!: string;

@OneToMany(() => Produto, (produto) => produto.categoria)
produto!: Produto[] | undefined;
}
