package br.com.angular.api.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.function.Consumer;

import javax.inject.Inject;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import br.com.angular.api.models.Contato;
import br.com.angular.api.repository.ContatoRepository;

@RestController
@RequestMapping(value = "/contato", produces = MediaType.APPLICATION_JSON_VALUE)
public class ContatosController {
	
	
	@Inject
	ContatoRepository contatoRepository;
	

	@RequestMapping(value = "/save", method = RequestMethod.GET)
    public String sayHello(){
        return "Hello there !";
    }
	
	
	
	
	@CrossOrigin
	@RequestMapping(value = "/list", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public List<Contato> getListContatos(){
		
        final List<Contato> resultList = new ArrayList<>();
        
        final Iterable<Contato> all = contatoRepository.findAll();
        all.forEach(new Consumer<Contato>() {
            @Override
            public void accept(Contato cont) {
                resultList.add(cont);
            }
        });
        
        return resultList;
	}
	
	
	@CrossOrigin
	@RequestMapping(value = "/add", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public Contato addContato(@RequestBody Contato contato){
		return contatoRepository.save(contato);
	}
	
	
	
	
}
