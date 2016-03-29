package br.com.angular.api.config;

import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.orm.jpa.EntityScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@Configuration
@EnableJpaRepositories(basePackages="br.com.angular.api.repository")
@EnableAutoConfiguration
@EntityScan(basePackages = {"br.com.angular.api.models"})
public class RepositoryConfig {

}
