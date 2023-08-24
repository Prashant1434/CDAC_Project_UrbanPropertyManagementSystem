package com.upm.service;

import com.upm.dto.UpdateProfileDto;

public interface UserService {

	String editProfile(UpdateProfileDto updateProfileDto,Long userId);

}
