package com.curso.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.curso.entities.Produto;
import com.curso.repositories.ProdutoRepository;

@Service
public class ProdutoService {
	@Autowired
	private ProdutoRepository repository;
	
	public Produto save(Produto produto) {
		return repository.save(produto);
	}
	
	public List<Produto> findAll() {
		return repository.findAll();
	}

	public Produto findById(Long id) {
		return repository.findById(id).orElseThrow(()-> new RuntimeException());
	}
	
	public void update(Long id, Produto produto) {
		Produto produtoExistente = this.findById(id);
		produto.setId(produtoExistente.getId());
		produto.setDataCadastro(produtoExistente.getDataCadastro());
		repository.save(produto);
	}
	
	public void delete(Long id) {
		this.findById(id);
		repository.deleteById(id);
	}
}
