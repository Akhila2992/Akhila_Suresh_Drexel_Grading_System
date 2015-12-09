package com.dgs.infra.dto.login;

import java.io.Serializable;

public class UserDTO implements Serializable {

	private static final long serialVersionUID = 1L;
	private String userName;
	private String password;
	private String sessionIP;
	private String userFullName;
	private String userMailID;
	private boolean userAdmin;
	private String nameinMail;
	private String role;
	private String responseMessageWrapper;
	

	public String getResponseMessageWrapper() {
		return responseMessageWrapper;
	}

	public void setResponseMessageWrapper(String responseMessageWrapper) {
		this.responseMessageWrapper = responseMessageWrapper;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public String getSessionIP() {
		return sessionIP;
	}

	public void setSessionIP(String sessionIP) {
		this.sessionIP = sessionIP;
	}

	public String getUserFullName() {
		return userFullName;
	}

	public void setUserFullName(String userFullName) {
		this.userFullName = userFullName;
	}

	public String getUserMailID() {
		return userMailID;
	}

	public void setUserMailID(String userMailID) {
		this.userMailID = userMailID;
	}

	public boolean isUserAdmin() {
		return userAdmin;
	}

	public void setUserAdmin(boolean userAdmin) {
		this.userAdmin = userAdmin;
	}

	public String getNameinMail() {
		return nameinMail;
	}

	public void setNameinMail(String nameinMail) {
		this.nameinMail = nameinMail;
	}
	
	

}
