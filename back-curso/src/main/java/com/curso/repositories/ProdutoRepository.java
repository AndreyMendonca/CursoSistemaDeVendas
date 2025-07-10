package com.curso.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.curso.entities.Produto;

public interface ProdutoRepository extends JpaRepository<Produto, Long>{

}
