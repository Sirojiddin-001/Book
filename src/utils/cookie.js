export const setCookie = (name, value, days) => {
    let d = new Date();
    d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
    let expires = "expires=" + d.toGMTString();
    document.cookie = `${name}=${value};${expires};path=/;SameSite=Lax`;
  };
  
  export const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(";").shift();
  };
  
  export const deleteCookie = (name, path) => {
    getCookie(name) &&
      (document.cookie = `${name}=;path=${path};expires=Thu, 01 Jan 1970 00:00:01 GMT"`);
  };
  