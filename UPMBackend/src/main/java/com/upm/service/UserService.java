package com.upm.service;

import com.upm.dto.LoginDto;
import com.upm.dto.UserDto;

public interface UserService {
	String loginUser(LoginDto loginDto);
	String updateUser(Long id, UserDto userDto);
}
