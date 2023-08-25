package com.upm.dto;

import java.time.LocalDate;

import javax.persistence.Column;

import org.springframework.format.annotation.DateTimeFormat;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class AddBuildingDto {
	private Long id;
	
	private String name;
	
	private String address;
	
	private String phone;
	
	private LocalDate madeYear;
	
	private LocalDate addedDate;
	
	private Long floorCount;
	
	private Long builderId;
}
