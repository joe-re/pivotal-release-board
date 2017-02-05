// @flow

import URLSearchParams from 'url-search-params';
import fetch from 'node-fetch';
import { Headers, Request, Response } from 'node-fetch';

type RequestParams = {
  url: string,
  token: string,
  parameters?: Object
};

const BASE_URL = 'https://www.pivotaltracker.com/services/v5';

type MethodType = 'GET' | 'POST' | 'DELETE' | 'PUT' | 'PATCH' ;

function createHeaders(token: string) {
  const headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('X-TrackerToken', token);
  return headers;
}

function doRequest(url: string, token: string, method: MethodType, body?: ?string): Promise<Response> {
  const request = new Request(`${BASE_URL}${url}`, {
    headers: createHeaders(token),
    method,
    body
  });
  return new Promise((resolve, reject) => {
    fetch(request).then(response => {
      if (response.status >= 200 && response.status < 400) {
        resolve(response);
        return;
      };
      reject(response);
    }).catch(error => reject(error));
  });
}

function get(params: RequestParams): Promise<*> {
  const searchParams = new URLSearchParams();
  const { parameters } = params;
  Object.keys(parameters || {}).forEach(key =>
    searchParams.append(key || '', parameters && parameters[key] || ''));
  const url = searchParams.toString() ? `${params.url}?${searchParams.toString()}` : params.url;
  return doRequest(url, params.token, 'GET');
};

function post(params: RequestParams): Promise<*> {
  const body = params.parameters ? JSON.stringify(params.parameters) : null;
  return doRequest(params.url, params.token, 'POST', body);
};

function put(params: RequestParams): Promise<*> {
  const body = params.parameters ? JSON.stringify(params.parameters) : null;
  return doRequest(params.url, params.token, 'PUT', body);
};

function patch(params: RequestParams): Promise<*> {
  const body = params.parameters ? JSON.stringify(params.parameters) : null;
  return doRequest(params.url, params.token, 'PATCH', body);
};

function destroy(params: RequestParams): Promise<*> {
  const body = params.parameters ? JSON.stringify(params.parameters) : null;
  return doRequest(params.url, params.token, 'DELETE', body);
};

export default { get, post, put, patch, delete: destroy };
