package br.com.angular.api.repository;

import org.springframework.data.repository.CrudRepository;

import br.com.angular.api.models.Contato;

public interface ContatoRepository extends CrudRepository<Contato, Integer>{

}
