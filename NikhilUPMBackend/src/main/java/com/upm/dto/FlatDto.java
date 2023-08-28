package com.upm.dto;

import javax.persistence.Column;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class FlatDto {

	private Long flatId;
	
	private Long floorNo;
	
	private Long flatNo;
	
	private boolean fullEmptyStatus;
	
	private String flatType;
}
