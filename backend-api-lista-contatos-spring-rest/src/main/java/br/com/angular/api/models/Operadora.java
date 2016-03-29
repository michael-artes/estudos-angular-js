package br.com.angular.api.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(schema="web", name="operadora")
@SequenceGenerator(name="operadora_seq", sequenceName="operadora_id_seq", allocationSize=1)
public class Operadora {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO, generator="operadora_seq")
	@Column(name="id", nullable=false, unique=true)
	private int id;
	
	@Column(name="nome", nullable=false)
	private String nome;
	
	@Column(name="codigo", nullable=false, precision=2)
	private int codigo;
	
	@Enumerated(EnumType.STRING)
	@Column(name="categoria", nullable=false)
	private EnumCategoria categoria;
	
	@Column(name="preco", nullable=false, precision=2)
	private Double preco;

	
	public int getId() {
		return id;
	}


	public void setId(int id) {
		this.id = id;
	}


	public String getNome() {
		return nome;
	}


	public void setNome(String nome) {
		this.nome = nome;
	}


	public int getCodigo() {
		return codigo;
	}


	public void setCodigo(int codigo) {
		this.codigo = codigo;
	}


	public EnumCategoria getCategoria() {
		return categoria;
	}


	public void setCategoria(EnumCategoria categoria) {
		this.categoria = categoria;
	}


	public Double getPreco() {
		return preco;
	}


	public void setPreco(Double preco) {
		this.preco = preco;
	}

	
}
