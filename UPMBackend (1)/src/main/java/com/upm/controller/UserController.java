package com.upm.controller;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import static org.springframework.http.MediaType.*;

import com.upm.dto.SigninResponse;
import com.upm.dao.BuilderDao;
import com.upm.dto.LoginDto;
import com.upm.dto.UserDto;
import com.upm.entities.Builder;
import com.upm.entities.SuperAdmin;
import com.upm.entities.Users;
import com.upm.jwt_utils.JwtUtils;
import com.upm.service.BuilderService;
import com.upm.service.ImageHandlingService;
import com.upm.service.ImageHandlingServiceImpl;
import com.upm.service.UserService;

@RestController
@RequestMapping("/users")
@CrossOrigin( methods = {RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE}, 
allowedHeaders = {"Authorization", "Content-Type"})
public class UserController {

	@Autowired
	private BuilderService builderService;
	
	@Autowired
	private UserService userService;
	
	@Autowired
	private ImageHandlingService imageHandlingService;
	
	@Autowired
	private AuthenticationManager mgr;
	
	@Autowired
	private JwtUtils utils;
	
	
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
	
	@PostMapping("/login")
	public ResponseEntity<?>  loginUsers(@RequestBody LoginDto loginDto) {
		System.out.println("login Dto : " + loginDto.toString());
		Authentication principal = mgr
				.authenticate(new UsernamePasswordAuthenticationToken(loginDto.getEmailId(), loginDto.getPassword()));
		String jwtToken = utils.generateJwtToken(principal);
		System.out.println(jwtToken);
		return ResponseEntity.ok(
				new SigninResponse(jwtToken, "User authentication success!!!"));
	}
	
	@PostMapping("/super_admin_login")
	public SuperAdmin superAdminLogin(@RequestBody SuperAdmin superAdmin)
	{
	   return userService.superAdminLoginService(superAdmin);
	}
	
   // ResponseEntity<String> changeCustomerPassword(String email, String oldPassword, String newPassword);

//	@GetMapping("/getuser/{userId}")
//	public UserDto getUser(@PathVariable Long userId)
//	{
//		return userService.getLoggedInUser(userId);
//	}
	

}
