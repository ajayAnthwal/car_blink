const storagePrefix = 'carBlink_';

const getSharedCookieToken = (): string | null => {
  if (typeof document === 'undefined') return null;
  const match = document.cookie.match(/(?:^|;\s*)(?:car_blink_access_token|accessToken)=([^;]+)/);
  return match && match[1] ? decodeURIComponent(match[1]) : null;
};

const storage = {
  getToken: (): string | null => {
    if (typeof window !== 'undefined') {
      const local = window.localStorage.getItem(`${storagePrefix}token`) || window.localStorage.getItem('car_blink_access_token');
      if (local) return local;

      const cookieToken = getSharedCookieToken();
      if (cookieToken) {
        try {
          window.localStorage.setItem(`${storagePrefix}token`, cookieToken);
          window.localStorage.setItem('car_blink_access_token', cookieToken);
        } catch (e) {}
        return cookieToken;
      }
    }
    return null;
  },
  setToken: (token: string) => {
    if (typeof window !== 'undefined') {
      try {
        window.localStorage.setItem(`${storagePrefix}token`, token);
        window.localStorage.setItem('car_blink_access_token', token);
      } catch (e) {}
    }
  },
  clearToken: () => {
    if (typeof window !== 'undefined') {
      try {
        window.localStorage.removeItem(`${storagePrefix}token`);
        window.localStorage.removeItem('car_blink_access_token');
      } catch (e) {}
    }
  }
};
export default storage;
