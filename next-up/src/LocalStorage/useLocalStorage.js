export function getUserFromStorage() {
  // Get from local storage by key
  const item = window.localStorage.getItem('username');
  // Parse stored json or if none return initialValue
  return item;
}

export function storeUser(user) {
  try {
    window.localStorage.setItem('username', user);
  } catch (error) {
    console.log(error);
  }
}
