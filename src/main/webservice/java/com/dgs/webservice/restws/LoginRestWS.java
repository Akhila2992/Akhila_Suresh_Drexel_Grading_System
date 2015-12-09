package com.dgs.webservice.restws;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.dgs.business.service.LoginService;
import com.dgs.infra.constants.DGSCommonConstants;
import com.dgs.infra.dto.login.UserDTO;
import com.dgs.infra.exception.DGSApplicationException;



@Controller
public class LoginRestWS {
	
	@Autowired 
	private LoginService loginService;
	
	
	private static final Logger LOG = LoggerFactory.getLogger(LoginRestWS.class);
	
	
	/*
	 * authenticate the userdetails and return the status
	 */
	@RequestMapping(value = "/login/userdetails", method = RequestMethod.POST)
	public @ResponseBody
	UserDTO authenticate(@RequestBody UserDTO userDTO) {
		UserDTO returnedUserDTO = null;
		LOG.debug("authenticate() called from restWS ");
		try {
			returnedUserDTO = loginService.authenticate(userDTO.getUserName(),userDTO.getPassword());
			if(returnedUserDTO==null)
			{
				returnedUserDTO = new UserDTO();
				returnedUserDTO.setResponseMessageWrapper(DGSCommonConstants.LOGIN_FAILURE_STATUS);
			}
			else if(returnedUserDTO.getRole()==null)
			{
				returnedUserDTO.setResponseMessageWrapper(DGSCommonConstants.LOGIN_CUSTOM_MESSAGE);
			}
			else
			{
				returnedUserDTO.setResponseMessageWrapper(DGSCommonConstants.LOGIN_SUCCESS_STATUS);
			}
		    } catch (Exception e) {
			throw new DGSApplicationException(
					"Error while trying to authenticate user Error details: " + e.getMessage());
		  }
		return returnedUserDTO;
	}
	
	
	@RequestMapping(value = "/login/userdetails", method = RequestMethod.GET)
	public @ResponseBody UserDTO getUserDetails(
			@RequestParam(value = "userName", required = false) final String userName,
			@RequestParam(value = "password", required = false) final String password
			) {
		UserDTO returnedUserDTO = null;
		LOG.debug("authenticate() called from restWS ");
		
		try {
			returnedUserDTO = loginService.authenticate(userName,password);
			
		    } catch (Exception e) {
			throw new DGSApplicationException(
					"Error while trying to authenticate user Error details: " + e.getMessage());
		  }
		return returnedUserDTO;
	}
	
	
}
