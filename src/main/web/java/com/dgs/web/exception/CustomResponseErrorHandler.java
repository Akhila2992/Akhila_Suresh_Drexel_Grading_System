package com.dgs.web.exception;

import java.io.IOException;
import java.io.InputStream;

import org.apache.commons.io.IOUtils;
import org.apache.log4j.Logger;
import org.springframework.http.client.ClientHttpResponse;
import org.springframework.web.client.DefaultResponseErrorHandler;
import org.springframework.web.client.ResponseErrorHandler;
import org.springframework.web.client.RestClientException;

import com.dgs.infra.exception.DGSApplicationException;
import com.dgs.infra.misc.wrapper.ResponseMessageWrapper;
import com.google.gson.Gson;

/**
 * @author SyedU
 * The Class CustomResponseErrorHandler.
 */
public class CustomResponseErrorHandler implements ResponseErrorHandler {

	/** The Constant log. */
	private static final Logger log = Logger
			.getLogger(CustomResponseErrorHandler.class);
	
	/** The error handler. */
	private ResponseErrorHandler errorHandler = new DefaultResponseErrorHandler();

	/* (non-Javadoc)
	 * @see org.springframework.web.client.ResponseErrorHandler#handleError(org.springframework.http.client.ClientHttpResponse)
	 */
	public void handleError(ClientHttpResponse response) throws IOException {
		String exceptionMessage = null;
		Gson gson = new Gson();
		ResponseMessageWrapper responseMessageWrapper = null;
		try {

			log.info("Inside CustomResponseErrorHandler");
			InputStream inputStream = response.getBody();
			exceptionMessage = IOUtils.toString(inputStream, "UTF-8");
			responseMessageWrapper = gson.fromJson(exceptionMessage,
					ResponseMessageWrapper.class);
			log.debug("exceptionMessage>>>" + exceptionMessage);
			errorHandler.handleError(response);
		} catch (RestClientException scx) {
			log.debug("error message++" + scx.getMessage());
			throw new DGSApplicationException(
					responseMessageWrapper.getResponseMessage());
		}
	}

	/* (non-Javadoc)
	 * @see org.springframework.web.client.ResponseErrorHandler#hasError(org.springframework.http.client.ClientHttpResponse)
	 */
	public boolean hasError(ClientHttpResponse response) throws IOException {
		return errorHandler.hasError(response);
	}

}
