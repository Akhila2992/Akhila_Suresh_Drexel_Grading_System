package com.dgs.business.service;



import com.dgs.infra.dto.login.UserDTO;

public interface LoginService {
	
	public UserDTO authenticate(String userName,String password) throws Exception;

}
