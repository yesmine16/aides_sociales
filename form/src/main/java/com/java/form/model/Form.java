package com.java.form.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.Table;

@Entity
@Table(name = "form")
public class Form {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(name = "date")
	private String date;
	
	@Column(name = "nom")
	private String name;
	@Column(name = "prenom")
	private String prenon;
	
	
	@Column(name = "date naissance")
	private String datenaiss;
	
	@Column(name = "adresse")
	private String address;
	
	@Column(name = "telephone")
	private String phone;
	
	@Column(name = "etat civile")
	private String civil;
	
	@Column(name = "santé")
	private String health;
	
	@Column(name = "enfant")
	private int kids;
	
	
	

	@Column(name ="parent")
	private String parent;

	@Column(name = "relative")

	private String siblings;
	@Column(name = "salaire")

	private String salary;

	@Column(name = "cnss")
	private String cnss;


	@Column(name = "maison")

	private String house;

	@Column(name = "evaluation")

	private String feedback;

	@Column(name = "image")

	private byte[] img;


	
	
	@Column(name = "cin")
	private long cin;

	@Column(name = "metier")
	private String job;

	@Column(name = "diplome")
	private String diplome;

	
	

	


	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDatenaiss() {
		return datenaiss;
	}

	public void setDatenaiss(String datenaiss) {
		this.datenaiss = datenaiss;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public byte[] getImg() {
		return img;
	}

	public void setImg(byte[] img) {
		this.img = img;
	}

	public String getCivil() {
		return civil;
	}

	public void setCivil(String civil) {
		this.civil = civil;
	}

	public String getHealth() {
		return health;
	}

	public void setHealth(String health) {
		this.health = health;
	}

	public int getKids() {
		return kids;
	}

	public void setKids(int kids) {
		this.kids = kids;
	}

	
	public void setPrenon(String prenon) {
		this.prenon = prenon;
	}

	public String getParent() {
		return parent;
	}

	public void setParent(String parent) {
		this.parent = parent;
	}

	public String getSiblings() {
		return siblings;
	}

	public void setSiblings(String siblings) {
		this.siblings = siblings;
	}

	public String getSalary() {
		return salary;
	}

	public void setSalary(String salary) {
		this.salary = salary;
	}

	public String getCnss() {
		return cnss;
	}

	public void setCnss(String cnss) {
		this.cnss = cnss;
	}

	public String getHouse() {
		return house;
	}

	public void setHouse(String house) {
		this.house = house;
	}

	public String getPrenon() {
		return prenon;
	}

	

	public String getFeedback() {
		return feedback;
	}

	public void setFeedback(String feedback) {
		this.feedback = feedback;
	}

	public long getId() {
		return id;
	}

	public Form(String date, String name, String datenaiss, String address, String phone, String civil, String health,
			int kids,String prenon,  String parent,String cnss,
			String siblings, String salary, 
			String house, String state, String feedback, byte[] img, 
			long cin,String job,String diplome) {
		super();
		this.date = date;																																										
		this.name = name;
		this.datenaiss = datenaiss;
		this.address = address;
		this.phone = phone;
		this.civil = civil;
		this.health = health;
		this.kids = kids;
		
		this.parent = parent;
		this.siblings = siblings;
		this.salary = salary;
		this.cnss = cnss;
		
		this.house = house;
	
		this.feedback = feedback;
		this.img = img;
		this.prenon=prenon;
		this.cin=cin;
		this.job=job;
		this.diplome=diplome;
	}

	public long getCin() {
		return cin;
	}

	public void setCin(long cin) {
		this.cin = cin;
	}

	public String getJob() {
		return job;
	}

	public void setJob(String job) {
		this.job = job;
	}

	public String getDiplome() {
		return diplome;
	}

	public void setDiplome(String diplome) {
		this.diplome = diplome;
	}

	public Form() {
	}

}



