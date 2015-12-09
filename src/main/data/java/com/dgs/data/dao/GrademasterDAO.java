package com.dgs.data.dao;


// Generated Dec 6, 2015 3:57:29 PM by Hibernate Tools 3.4.0.CR1
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import com.dgs.data.domain.Grademaster;
import com.dgs.data.domain.Usermaster;
import com.dgs.data.util.DBConnector;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.stereotype.Repository;

/**
 * Home object for domain model class Grademaster.
 * @see .Grademaster
 * @author Hibernate Tools
 */
@Repository
public class GrademasterDAO {
	
	public List<Grademaster> getGrades() throws Exception {
		Connection connection = null;
		Statement statement = null;
		ResultSet rs =null;
		
		try {

			connection = DBConnector.getConnection();
			connection.setAutoCommit(false);
			String query = "SELECT * from grademaster";
			PreparedStatement stmt = connection.prepareStatement(query);
			rs = stmt.executeQuery();
			List<Grademaster> gradeList = new ArrayList<Grademaster>();
			while(rs.next())
			{
				Grademaster grade = new Grademaster(); 
				grade.setGradeId(rs.getString("gradeId"));
				gradeList.add(grade);
			}
			
			return gradeList;
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
