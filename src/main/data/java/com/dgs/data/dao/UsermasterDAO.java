package com.dgs.data.dao;


// Generated Dec 6, 2015 3:57:29 PM by Hibernate Tools 3.4.0.CR1

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.hibernate.transform.Transformers;
import org.springframework.stereotype.Repository;

import com.dgs.data.domain.Usermaster;
import com.dgs.data.util.DBConnector;

/**
 * Home object for domain model class Usermaster.
 * @see .Usermaster
 * @author Hibernate Tools
 */
@Repository
public class UsermasterDAO {

	public List<Usermaster> getAllUsers() throws Exception {
		Connection connection = null;
		Statement statement = null;
		ResultSet rs =null;
		
		try {

			connection = DBConnector.getConnection();
			connection.setAutoCommit(false);
			String query = "select * from usermaster";
			PreparedStatement stmt = connection.prepareStatement(query);
			rs = stmt.executeQuery();
			List<Usermaster> userList = new ArrayList<Usermaster>();
			while(rs.next())
			{
				Usermaster user = new Usermaster();
				user.setUserId(rs.getString("userId"));
				user.setPassword(rs.getString("password"));
				user.setEmailId(rs.getString("emailId"));
				user.setRole(rs.getString("role"));
				userList.add(user);
			}
			
			return userList;
		} catch (Exception e) {
			throw e;
		}

		finally {
			DBConnector.close(rs);
			DBConnector.close(statement);
			DBConnector.close(connection);
		}
	}
	
	
	public List<Usermaster> getMyStudents(String userId) throws Exception {
		Connection connection = null;
		Statement statement = null;
		ResultSet rs =null;
		
		try {

			connection = DBConnector.getConnection();
			connection.setAutoCommit(false);
			String query = "SELECT * from usermaster where role='STUDENT'";
			PreparedStatement stmt = connection.prepareStatement(query);
			rs = stmt.executeQuery();
			List<Usermaster> myStudentList = new ArrayList<Usermaster>();
			while(rs.next())
			{
				Usermaster user = new Usermaster();
				user.setUserId(rs.getString("userId"));
				user.setFirstName(rs.getString("firstName"));
				myStudentList.add(user);
				
			}
			
			return myStudentList;
		} catch (Exception e) {
			throw e;
		}

		finally {
			DBConnector.close(rs);
			DBConnector.close(statement);
			DBConnector.close(connection);
		}

	}




}
