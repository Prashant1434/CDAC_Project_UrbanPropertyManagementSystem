package com.upm.service;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.upm.dao.BuilderDao;
import com.upm.dao.UsersDao;
import com.upm.dto.AddBuilderDto;
import com.upm.dto.AddOwnerDto;
import com.upm.entities.Builder;
import com.upm.entities.Owner;
import com.upm.entities.Users;

@Service
@Transactional
public class SuperAdminServiceImpl implements SuperAdminService{

	@Autowired
	private BuilderDao builderDao;
	
	@Autowired
	private ModelMapper mapper;
	
	@Autowired
	private UsersDao userDao;
	
	public AddBuilderDto addBuilder(AddBuilderDto addBuilderDto) {
		
		Users user = mapper.map(addBuilderDto, Users.class);
		Builder builder = new Builder();
		builder.setUserBuilder(user);
		user.setBuilder(builder);
		Users newUser=userDao.save(user);
		Builder newBuider=builderDao.findByUserBuilder(newUser);
		return mapper.map(newBuider, AddBuilderDto.class); 
		
	}

}
