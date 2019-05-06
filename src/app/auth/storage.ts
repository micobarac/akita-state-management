const AUTH_KEY = 'auth';

export function getAuth() {
  const auth = localStorage.getItem(AUTH_KEY);
  return auth ? JSON.parse(auth) : {};
}

export function saveAuth(auth: any) {
  localStorage.setItem(AUTH_KEY, JSON.stringify(auth));
}

export function clearAuth() {
  localStorage.removeItem(AUTH_KEY);
}
