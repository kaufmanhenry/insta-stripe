function createApiRequest(url, method, data) {
  return fetch(url, {
    method,
    body: data ? JSON.stringify(data) : null,
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.json())
  .catch((error) => {
    throw error;
  });
}

export function fetchPaymentApi() {
  return createApiRequest('/api/configuration', 'GET', null);
}

export function chargePaymentApi(token) {
  return createApiRequest('/api/charge', 'POST', { token });
}
