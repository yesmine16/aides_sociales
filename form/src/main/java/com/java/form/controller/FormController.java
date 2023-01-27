package com.java.form.controller;

import java.io.IOException;
import java.security.Principal;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.catalina.connector.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.java.form.model.Address;
import com.java.form.model.Form;
import com.java.form.repository.FormResp;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api")

public class FormController {

	@Autowired
	private FormResp formresp;
	
	// get all forms
	@GetMapping("/form")
	public List<Form> getAll() {
		return formresp.findAll();
	}

	// create form rest api
	@PostMapping("/form")
	
	public Form saveform(@RequestBody Form form) {
	
			return formresp.save(form);
}
	
	// create form rest api
	
	


}