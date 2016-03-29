package br.com.angular.api.init;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.context.annotation.Configuration;

import br.com.angular.api.config.AppConfig;

@Configuration
@EnableAutoConfiguration
public class Application {

	public static void main(String[] args) {
		SpringApplication.run(AppConfig.class, args);
	}
}
