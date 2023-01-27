package com.java.form.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name = "address")
public class Address {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(name = "num")
	private int num;
	
	@Column(name = "rue")
	private String rue;
	
	@Column(name = "region")
	private String region;
	
	@Column(name = "gov")
	private String gov;
	
	public Address() {}

	public int getNum() {
		return num;
	}

	public void setNum(int num) {
		this.num = num;
	}

	public String getRue() {
		return rue;
	}

	public void setRue(String rue) {
		this.rue = rue;
	}

	public String getRegion() {
		return region;
	}

	public void setRegion(String region) {
		this.region = region;
	}

	public String getGov() {
		return gov;
	}

	public void setGov(String gov) {
		this.gov = gov;
	}

	public Address(long id, int num, String rue, String region, String gov) {
		super();
		this.id = id;
		this.num = num;
		this.rue = rue;
		this.region = region;
		this.gov = gov;
	}
	
}