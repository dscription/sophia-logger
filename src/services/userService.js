const BASE_URL = '/api/users/';

export function getCurrentUser() {
  return fetch(`${BASE_URL}getMe`, {}).then((res) => res.json());
}


