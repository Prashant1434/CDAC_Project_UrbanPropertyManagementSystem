package com.upm.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.upm.dao.UsersDao;
import com.upm.dto.AddAdminDto;
import com.upm.dto.LoginDto;
import com.upm.dto.UserDto;
import com.upm.entities.Users;

@Transactional
@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private UsersDao userDao;

	@Autowired
	private ModelMapper mapper;

	@Override
	public UserDto loginUser(LoginDto loginDto) {
		Users user1 = userDao.findByEmailId(loginDto.getEmailId()).orElseThrow();
		UserDto user = mapper.map(user1,UserDto.class);
//		System.out.println("user : " + user.toString());
		if ((user.getPassword().equals(loginDto.getPassword())) && (user.getRole().name() == "ADMIN")) {
			return user;
		} else if (user.getPassword().equals(loginDto.getPassword()) && user.getRole().name() == "OWNER") {
			return user;
		} else if (user.getPassword().equals(loginDto.getPassword()) && user.getRole().name() == "TENANT") {
			return user;
		} else
			return null;
	}

	@Override
	public String updateUser(Long id, UserDto userDto) {
		Users user = userDao.findById(id).orElseThrow();
		if (user != null) {
			Users u = mapper.map(userDto, Users.class);
			u.setId(id);
			System.out.println("us : " + u.toString());
			userDao.save(u);
			return "Update Successfull !!! ";
		} else {
			return "user not exits !!! ";
		}
	}
}
