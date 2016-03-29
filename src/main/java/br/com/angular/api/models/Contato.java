package br.com.angular.api.models;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.ForeignKey;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonFormat;

@Entity
@Table(schema="web", name="contato")
@SequenceGenerator(name="contato_seq", sequenceName="contato_id_seq", allocationSize=1)
public class Contato {

	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO, generator="contato_seq")
	@Column(name="id", nullable=false, unique=true)
	private int id;
	
	@Column(name="nome", nullable=false)
	private String nome;
	
	@Column(name="telefone", nullable=false)
	private String telefone;
	
	@JsonFormat(pattern="yyyy-MM-dd'T'HH:mm:ss")
	@Column(name="data", nullable=false)
	private Date data;
	
	@OneToOne(fetch=FetchType.EAGER)
	@JoinColumn(name="id_operadora", foreignKey=@ForeignKey(name="fk_operadora_in_contato"))
	private Operadora operadora;

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

	public String getTelefone() {
		return telefone;
	}

	public void setTelefone(String telefone) {
		this.telefone = telefone;
	}

	public Date getData() {
		return data;
	}

	public void setData(Date data) {
		this.data = data;
	}

	public Operadora getOperadora() {
		return operadora;
	}

	public void setOperadora(Operadora operadora) {
		this.operadora = operadora;
	}
	
}
