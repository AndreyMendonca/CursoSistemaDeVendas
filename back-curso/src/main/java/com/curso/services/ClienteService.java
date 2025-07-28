package com.curso.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.curso.entities.Cliente;
import com.curso.repositories.ClienteRepository;

@Service
public class ClienteService {
	@Autowired
	private ClienteRepository repository;
	
	public Cliente save(Cliente cliente) {
		return repository.save(cliente);
	}
	
	public List<Cliente> findAll() {
		return repository.findAll();
	}

	public Cliente findById(Long id) {
		return repository.findById(id).orElseThrow(()-> new RuntimeException());
	}
	
	public void update(Long id, Cliente cliente) {
		Cliente clienteExistente = this.findById(id);
		cliente.setId(clienteExistente.getId());
		cliente.setDataCadastro(clienteExistente.getDataCadastro());
		repository.save(cliente);
	}
	
	public void delete(Long id) {
		this.findById(id);
		repository.deleteById(id);
	}
	
	public Page<Cliente> findByNomeOrCpf(String nome, String cpf, Pageable pageable ) {		
		return repository.buscarPorNomeCpf(nome,cpf, pageable);
	}
}
