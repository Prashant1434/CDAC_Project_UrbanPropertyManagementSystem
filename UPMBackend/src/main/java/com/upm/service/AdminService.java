package com.upm.service;

import com.upm.dto.AddAdminDto;
import com.upm.entities.Flat;
import com.upm.entities.Users;

public interface AdminService {

	public String addOwner(AddAdminDto adminDto);
	public String addFaltToOwner(Flat flat,Long id);
}
