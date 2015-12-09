package com.dgs.web.util;



import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.client.RestTemplate;

import com.dgs.infra.misc.wrapper.ResponseMessageWrapper;


public class RESTUtil {

	private static final Logger LOG = LoggerFactory.getLogger(RESTUtil.class);

	public static String dgsWSBaseUrl;
	
	public static String dgsAppBaseUrl;

	private RestTemplate restTemplate;

	public static void setdgsAppBaseUrl(String dgsAppBaseUrl) {
		RESTUtil.dgsAppBaseUrl = dgsAppBaseUrl;
	}
	
	public void setdgsWSBaseUrl(String dgsWSBaseURL) {
		RESTUtil.dgsWSBaseUrl = dgsWSBaseURL;
	}

	public void setRestTemplate(RestTemplate restTemplate) {
		this.restTemplate = restTemplate;
	}

	public Object getData(String contextPath, Class<?> clazz) throws Exception {

		String dgsWSURL;

		dgsWSURL = dgsWSBaseUrl + contextPath;

		LOG.debug("dgsWSURL: " + dgsWSURL);

		Object response;

		response = restTemplate.getForObject(dgsWSURL, clazz);

		return response;
	}

	public ResponseMessageWrapper putData(Object putRequest, String contextPath)
			throws Exception {

		String dgsURL;
		String responseData = "";

		dgsURL = dgsWSBaseUrl + contextPath;

		LOG.debug("dgsURL: " + dgsURL);

		HttpHeaders headers = new HttpHeaders();
		headers.setContentType(MediaType.APPLICATION_JSON);
		HttpEntity<Object> requestEntity = new HttpEntity<Object>(putRequest,
				headers);
		ResponseEntity<ResponseMessageWrapper> responseEntity = restTemplate
				.exchange(dgsURL, HttpMethod.PUT, requestEntity,
						ResponseMessageWrapper.class);
		
		ResponseMessageWrapper responseMessageWrapper = responseEntity
				.getBody();

		responseData = responseMessageWrapper.getResponseMessage();

		LOG.debug(responseData);

		return responseMessageWrapper;
	}

	public ResponseMessageWrapper postData(Object postRequest, String contextPath)
			throws Exception {

		String dgsURL;

		String responseData = "";

		dgsURL = dgsWSBaseUrl + contextPath;

		LOG.debug("dgsURL: " + dgsURL);

		HttpHeaders headers = new HttpHeaders();
		headers.setContentType(MediaType.APPLICATION_JSON);
		HttpEntity<Object> requestEntity = new HttpEntity<Object>(postRequest,
				headers);
		ResponseEntity<ResponseMessageWrapper> responseEntity = restTemplate
				.exchange(dgsURL, HttpMethod.POST, requestEntity,
						ResponseMessageWrapper.class);

		ResponseMessageWrapper responseMessageWrapper = responseEntity
				.getBody();

		responseData = responseMessageWrapper.getResponseMessage();

		LOG.debug(responseData);

		return responseMessageWrapper;
	}
	
	public <T> T postData(Object postRequest, String contextPath, Class<T> clazz)
			throws Exception {

		String dgsURL;
		dgsURL = dgsWSBaseUrl + contextPath;
		LOG.debug("dgsURL: " + dgsURL);

		HttpHeaders headers = new HttpHeaders();
		headers.setContentType(MediaType.APPLICATION_JSON);
		HttpEntity<Object> requestEntity = new HttpEntity<Object>(postRequest,
				headers);
		ResponseEntity<T> responseEntity = restTemplate.exchange(dgsURL,
				HttpMethod.POST, requestEntity, clazz);

		responseEntity.getBody();
		return responseEntity.getBody();
	}
}
