package com.java.form.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.java.form.model.Form;

@Repository
public interface FormResp extends JpaRepository<Form, Long> {

}