//This custom function is used for simplifying getting and setting cookies in the cookie storage

const cookies: {
  getCookie: (key: string) => any;
  setCookie: (key: string, value: string, expires: Date) => void;
} = {
  // function to get a cookie value
  getCookie: (key: string) => {
    if (typeof document !== 'undefined') {
      const cookie = document.cookie.match('(^|;)\\s*' + key + '\\s*=\\s*([^;]+)');
      return cookie ? cookie.pop() : '';
    }
  },
  // function to set a cookie
  setCookie: (key: string, value: string, expires: Date) => {
    if (typeof document !== 'undefined') {
      document.cookie = `${key}=${value}; expires=${expires}`;
    }
  },
};

export default cookies;
