package com.upm.service;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.upm.dao.UsersDao;
import com.upm.dto.UpdateProfileDto;
import com.upm.entities.Users;

@Transactional
@Service
public class UserServiceImpl implements UserService{

	@Autowired
	private UsersDao userDao;
	
	@Autowired
	private ModelMapper mapper;
	
	@Override
	public String editProfile(UpdateProfileDto updateProfileDto,Long userId) {
		// TODO Auto-generated method stub
		Users user=userDao.findById(userId).orElseThrow();
		Users u=mapper.map(updateProfileDto, Users.class);
		u.setId(userId);
		userDao.save(u);
		return "profile updated sijbd";
	}
	
}
