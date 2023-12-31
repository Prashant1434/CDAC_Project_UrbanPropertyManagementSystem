package com.upm.controller;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import static org.springframework.http.MediaType.*;

import com.upm.dao.BuilderDao;
import com.upm.dto.LoginDto;
import com.upm.entities.Builder;
import com.upm.entities.Users;
import com.upm.service.BuilderService;
import com.upm.service.ImageHandlingService;
import com.upm.service.ImageHandlingServiceImpl;
import com.upm.service.UserService;

@RestController
@RequestMapping("/users")
public class UserController {

	@Autowired
	private BuilderService builderService;
	
	@Autowired
	private UserService userService;
	
	@Autowired
	private ImageHandlingService imageHandlingService;
	
	@PostMapping("/builderLogin")
	public String builderLogin(@RequestBody LoginDto loginDto)
	{
		return builderService.findByEmailAndPasswordService(loginDto.getEmailId());
	}
	
	@PostMapping(value = "/images/{usersId}", consumes = "multipart/form-data")
	public String uploadImage(@PathVariable Long usersId,@RequestParam MultipartFile imageFile) throws IOException
	{
		return imageHandlingService.uploadImage(usersId, imageFile);
	}
	
	@GetMapping(value = "/images/{usersId}", produces = {IMAGE_GIF_VALUE,IMAGE_JPEG_VALUE,IMAGE_PNG_VALUE})
	public byte[] downloadImage(@PathVariable Long usersId) throws IOException
	{
		return imageHandlingService.downloadImage(usersId);
	}
}
