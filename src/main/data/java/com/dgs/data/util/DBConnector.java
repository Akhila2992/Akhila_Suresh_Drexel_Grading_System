package com.dgs.data.util;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import snaq.db.ConnectionPoolManager;

public class DBConnector {
	
	private static ConnectionPoolManager connectionPoolManager;
	private static final Logger LOG = LoggerFactory
			.getLogger(DBConnector.class);

	public static Connection getConnection(){
	
		try {
			Class.forName("com.mysql.jdbc.Driver");
		} catch (ClassNotFoundException e) {
			e.printStackTrace();

		}

		Connection connection = null;

		try {
			connection = DriverManager
			.getConnection("jdbc:mysql://localhost:3306/dgs","root", "root");

		} catch (SQLException e) {
			e.printStackTrace();
		
		}
		
		return connection;
  }
	
	public static void rollback(Connection connection) {
		if (null != connection) {
			try {
				connection.rollback();
			} catch (SQLException ex) {
				LOG.debug("Error in DB Connections", ex);
			}
		}
	}

	public static void close(Connection connection) {
		if (null != connection) {
			try {

				connection.close();

			} catch (SQLException ex) {
				LOG.debug("Error in DB Connections", ex);
			}
		}
	}

	public static void close(ResultSet resultSet) {
		if (null != resultSet) {
			try {
				resultSet.close();
			} catch (SQLException ex) {
				LOG.debug("Error in DB Connections", ex);
			}
		}
	}

	public static void close(Statement statement) {
		if (null != statement) {
			try {
				statement.close();
			} catch (SQLException ex) {
				LOG.debug("Error in DB Connections", ex);
			}
		}
	}

}