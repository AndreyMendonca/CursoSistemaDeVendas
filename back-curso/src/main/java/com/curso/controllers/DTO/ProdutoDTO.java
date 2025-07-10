package com.curso.controllers.DTO;

import java.math.BigDecimal;

public class ProdutoDTO {
	private String nome;
	private String descricao;
	private BigDecimal preco;
	private String sku;
	
	public ProdutoDTO(String nome, String descricao, BigDecimal preco, String sku) {
		super();
		this.nome = nome;
		this.descricao = descricao;
		this.preco = preco;
		this.sku = sku;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}

	public BigDecimal getPreco() {
		return preco;
	}

	public void setPreco(BigDecimal preco) {
		this.preco = preco;
	}

	public String getSku() {
		return sku;
	}

	public void setSku(String sku) {
		this.sku = sku;
	}
	
	
}
