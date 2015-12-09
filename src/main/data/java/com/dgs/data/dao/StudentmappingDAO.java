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

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.stereotype.Repository;

import com.dgs.data.domain.Coursemaster;
import com.dgs.data.domain.Grademaster;
import com.dgs.data.domain.Professorcoursemapping;
import com.dgs.data.domain.StudentGradeDTO;
import com.dgs.data.domain.Studentmapping;
import com.dgs.data.domain.Usermaster;
import com.dgs.data.util.DBConnector;
import com.dgs.infra.constants.DGSCommonConstants;

/**
 * Home object for domain model class Studentmapping.
 * @see .Studentmapping
 * @author Hibernate Tools
 */
@Repository
public class StudentmappingDAO {

	public List<Studentmapping> getGradeCourseDetails(String userId) throws Exception {
		Connection connection = null;
		Statement statement = null;
		ResultSet rs =null;
		
		try {

			connection = DBConnector.getConnection();
			connection.setAutoCommit(false);
			String query = "SELECT coursemaster.courseId, coursemaster.courseName, studentmapping.gradeId FROM coursemaster INNER JOIN studentmapping ON coursemaster.courseId=studentmapping.courseId WHERE userId='"+userId+"'";
			PreparedStatement stmt = connection.prepareStatement(query);
			rs = stmt.executeQuery();
			List<Studentmapping> gradeCourseList = new ArrayList<Studentmapping>();
			while(rs.next())
			{
				Studentmapping stuMap = new Studentmapping();
				Coursemaster course = new Coursemaster();
				course.setCourseId(rs.getString("courseId"));
				course.setCourseName(rs.getString("courseName"));
				stuMap.setCoursemaster(course);
				Grademaster grade = new Grademaster();
				grade.setGradeId(rs.getString("gradeId"));
				stuMap.setGrademaster(grade);
				gradeCourseList.add(stuMap);
				
			}
			
			return gradeCourseList;
		} catch (Exception e) {
			throw e;
		}

		finally {
			DBConnector.close(rs);
			DBConnector.close(statement);
			DBConnector.close(connection);
		}
	}

	public String saveGrade(StudentGradeDTO studentMapping) throws Exception {
		Connection connection = null;
		Statement statement = null;
		PreparedStatement prepStatement = null;
		ResultSet rs =null;
		String status = null;
		
		try {

			connection = DBConnector.getConnection();
			connection.setAutoCommit(false);
			String query = "INSERT INTO studentmapping (userId, courseId, gradeId) "
					+ " VALUES (?, ?, ?) ";
			prepStatement = connection.prepareStatement(query);
			prepStatement.setString(1, studentMapping.getUserId());
			prepStatement.setString(2, studentMapping.getCourseId());
			prepStatement.setString(3, studentMapping.getGradeId());
			prepStatement.executeUpdate();
			connection.commit();
			status = DGSCommonConstants.GRADE_ASSIGN_SUCCESS;
			
		} catch (Exception e) {
			status = DGSCommonConstants.GRADE_ASSIGN_FAILURE;
			throw e;
			
		}
			
		

		finally {
			DBConnector.close(rs);
			DBConnector.close(statement);
			DBConnector.close(connection);
		}
		
		return status;
	}


	
	}
