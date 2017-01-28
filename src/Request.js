// @flow

import URLSearchParams from 'url-search-params';
import fetch from 'node-fetch';
import { Headers, Request, Response } from 'node-fetch';

type RequestParams = {
  url: string,
  parameters?: Object
};

type MethodType = 'GET' | 'POST' | 'DELETE' | 'PUT' | 'PATCH' ;

function createHeaders() {
  const headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('X-TrackerToken', 'yourtoken');
  return headers;
}

function doRequest(url: string, method: MethodType, body?: ?string): Promise<Response> {
  console.log(method);
  const request = new Request(url, {
    headers: createHeaders(),
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
  console.log(url);
  return doRequest(url, 'GET');
};

function post(params: RequestParams): Promise<*> {
  const body = params.parameters ? JSON.stringify(params.parameters) : null;
  return doRequest(params.url, 'POST', body);
};

function put(params: RequestParams): Promise<*> {
  const body = params.parameters ? JSON.stringify(params.parameters) : null;
  return doRequest(params.url, 'PUT', body);
};

function patch(params: RequestParams): Promise<*> {
  const body = params.parameters ? JSON.stringify(params.parameters) : null;
  return doRequest(params.url, 'PATCH', body);
};

function destroy(params: RequestParams): Promise<*> {
  const body = params.parameters ? JSON.stringify(params.parameters) : null;
  return doRequest(params.url, 'DELETE', body);
};

export default { get, post, put, patch, delete: destroy };
