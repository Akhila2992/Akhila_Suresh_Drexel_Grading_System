package com.dgs.data.dao;


// Generated Dec 6, 2015 3:57:29 PM by Hibernate Tools 3.4.0.CR1

import com.dgs.data.domain.Coursemaster;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

/**
 * Home object for domain model class Coursemaster.
 * @see .Coursemaster
 * @author Hibernate Tools
 */
@Stateless
public class CoursemasterDAO {

	private static final Log log = LogFactory.getLog(CoursemasterDAO.class);

	@PersistenceContext
	private EntityManager entityManager;

	public void persist(Coursemaster transientInstance) {
		log.debug("persisting Coursemaster instance");
		try {
			entityManager.persist(transientInstance);
			log.debug("persist successful");
		} catch (RuntimeException re) {
			log.error("persist failed", re);
			throw re;
		}
	}

	public void remove(Coursemaster persistentInstance) {
		log.debug("removing Coursemaster instance");
		try {
			entityManager.remove(persistentInstance);
			log.debug("remove successful");
		} catch (RuntimeException re) {
			log.error("remove failed", re);
			throw re;
		}
	}

	public Coursemaster merge(Coursemaster detachedInstance) {
		log.debug("merging Coursemaster instance");
		try {
			Coursemaster result = entityManager.merge(detachedInstance);
			log.debug("merge successful");
			return result;
		} catch (RuntimeException re) {
			log.error("merge failed", re);
			throw re;
		}
	}

	public Coursemaster findById(String id) {
		log.debug("getting Coursemaster instance with id: " + id);
		try {
			Coursemaster instance = entityManager.find(Coursemaster.class, id);
			log.debug("get successful");
			return instance;
		} catch (RuntimeException re) {
			log.error("get failed", re);
			throw re;
		}
	}
}
