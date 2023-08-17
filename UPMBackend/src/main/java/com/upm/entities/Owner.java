package com.upm.entities;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.MapsId;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.springframework.format.annotation.DateTimeFormat;

@Entity
@Table(name = "owner")
public class Owner extends BaseEntity{

	@OneToOne
	@MapsId
	@JoinColumn(name = "user_id")
	private Users owner;
	
	@OneToMany(mappedBy = "owner",cascade = CascadeType.ALL,orphanRemoval = true)
	private List<Flat> flatList = new ArrayList<Flat>();
	
	
}
