package com.upm.service;

import com.upm.dto.LoginDto;
import com.upm.dto.UserDto;
import com.upm.entities.Users;

public interface UserService {
	UserDto loginUser(LoginDto loginDto);
	String updateUser(Long id, UserDto userDto);
}
