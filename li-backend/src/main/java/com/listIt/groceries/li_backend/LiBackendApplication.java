package com.listIt.groceries.li_backend;

import io.github.cdimascio.dotenv.Dotenv;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class LiBackendApplication {

	public static void main(String[] args) {
		Dotenv.load();
		SpringApplication.run(LiBackendApplication.class, args);
	}

}
