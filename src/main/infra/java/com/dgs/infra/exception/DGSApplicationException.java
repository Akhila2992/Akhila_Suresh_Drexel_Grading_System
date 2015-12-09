package com.dgs.infra.exception;

/**
 * @author SyedU
 * The Class WMSApplicationException.
 */
public class DGSApplicationException extends RuntimeException {

	/** The Constant serialVersionUID. */
	private static final long serialVersionUID = -1189983485508475923L;

	/**
	 * Instantiates a new WMS application exception.
	 *
	 * @param msg the msg
	 */
	public DGSApplicationException(String msg) {
		super(msg);
	}

	/**
	 * Instantiates a new WMS application exception.
	 *
	 * @param t the t
	 */
	public DGSApplicationException(Throwable t) {
		super(t);
	}

	/**
	 * Instantiates a new WMS application exception.
	 *
	 * @param msg the msg
	 * @param t the t
	 */
	public DGSApplicationException(String msg, Throwable t) {
		super(msg, t);
	}

}
