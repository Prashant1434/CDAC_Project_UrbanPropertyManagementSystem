package com.upm.service;

import com.upm.dto.UpdateProfileDto;
import com.upm.dto.ApiResponse;
import com.upm.dto.LoginDto;
import com.upm.dto.UserDto;
import com.upm.entities.SuperAdmin;
import com.upm.entities.Users;

public interface UserService {
	UserDto loginUser(LoginDto loginDto);
	String updateUser(Long id, UserDto userDto);
	ApiResponse editProfile(UserDto updateProfileDto,Long userId);
	SuperAdmin superAdminLoginService(SuperAdmin superAdmin);
	UserDto getLoggedInUser(Long userId);
}
