package com.upm.service;

import java.util.List;

import com.upm.dto.AddBuilderDto;
import com.upm.entities.SuperAdmin;

public interface SuperAdminService {

	AddBuilderDto addBuilder(AddBuilderDto addBuilderDto);

	List<SuperAdmin> getAllSuperAdminList();

}
