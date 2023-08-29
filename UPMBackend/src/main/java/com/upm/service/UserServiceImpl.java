package com.upm.service;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.upm.dao.AdminDao;
import com.upm.dao.SuperAdminDao;
import com.upm.dao.UsersDao;
import com.upm.dto.UpdateProfileDto;
import com.upm.entities.Admin;
import com.upm.entities.Builder;
import com.upm.entities.Owner;
import com.upm.entities.SuperAdmin;
import com.upm.entities.Tenant;
import com.upm.entities.Users;
import com.upm.dto.AddAdminDto;
import com.upm.dto.ApiResponse;
import com.upm.dto.LoginDto;
import com.upm.dto.UserDto;

@Transactional
@Service
public class UserServiceImpl implements UserService{

	@Autowired
	private UsersDao userDao;
	
	@Autowired
	private ModelMapper mapper;
	
	@Autowired
	private AdminDao adminDao;
	
	@Autowired
	private SuperAdminDao superAdminDao;
	
	@Override
	public ApiResponse editProfile(UserDto updateProfileDto,Long userId) {
		// TODO Auto-generated method stub
		Users user=userDao.findById(userId).orElseThrow();
		Admin admin = user.getAdmin();
		Builder builder = user.getBuilder();
		Owner owner = user.getOwner();
		Tenant tenat = user.getTenant();
		Users u=mapper.map(updateProfileDto, Users.class);
		u.setAdmin(admin);
		u.setBuilder(builder);
		u.setOwner(owner);
		u.setTenant(tenat);
		//Admin admin=adminDao.findByAdmin(user);
		userDao.save(u);
		return new ApiResponse("profile updated successfully");
	}
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
		} else if (user.getPassword().equals(loginDto.getPassword()) && user.getRole().name() == "BUILDER") {
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
	@Override
	public SuperAdmin superAdminLoginService(SuperAdmin superAdmin) {
		// TODO Auto-generated method stub
		SuperAdmin superadmin =superAdminDao.findByEmailId(superAdmin.getEmailId()).orElseThrow();
		System.out.println(superadmin.getEmailId());

		if(superadmin.getPassword().equals(superadmin.getPassword()))
		    return superadmin;
		else
			return null;
	}
	@Override
	public UserDto getLoggedInUser(Long userId) {
		Users user = userDao.findById(userId).orElseThrow();
		UserDto userDto = mapper.map(user, UserDto.class);
		System.out.println(userDto.getEmailId());
		return userDto;
	}
	
}
