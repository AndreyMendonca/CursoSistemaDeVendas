package com.curso.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.curso.entities.Cliente;

public interface ClienteRepository extends JpaRepository<Cliente, Long>{

}
