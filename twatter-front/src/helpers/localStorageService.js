class localStorageService {
    // Set a key-value pair in localStorage
    static setItem(key, value) {
      localStorage.setItem(key, JSON.stringify(value));
    }
  
    // Get a value from localStorage by key
    static getItem(key) {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    }
  
    // Remove a key-value pair from localStorage
    static removeItem(key) {
      localStorage.removeItem(key);
    }
  
    // Clear all data in localStorage
    static clear() {
      localStorage.clear();
    }

    static getService(){

    }
    static getAccessToken(){
        return localStorage.getItem('AccessToken');
    }
    static setAccessToken(token){
      localStorage.setItem('AccessToken', token);
    }
    static getRefreshToken(){
      return localStorage.getItem('RefreshToken');
    }
    static setRefreshToken(token){
        localStorage.setItem('RefreshToken', token);
    }
  }
  
  export default localStorageService;