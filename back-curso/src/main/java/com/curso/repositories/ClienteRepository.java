package com.curso.repositories;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.curso.entities.Cliente;

public interface ClienteRepository extends JpaRepository<Cliente, Long>{
	
	@Query("""
		    SELECT c FROM Cliente c
		    WHERE (:nome IS NULL OR UPPER(c.nome) LIKE CONCAT('%', UPPER(:nome), '%'))
		      AND (:cpf IS NULL OR c.cpf LIKE CONCAT('%', :cpf, '%'))
		""")
		Page<Cliente> buscarPorNomeCpf(
		    @Param("nome") String nome,
		    @Param("cpf") String cpf,
		    Pageable pageable
		);

}
