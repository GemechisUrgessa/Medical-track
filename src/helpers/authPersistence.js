export let persistAuth = (authData) => {
  localStorage.setItem("token", authData.token);
  localStorage.setItem("userId", authData.userId);
  localStorage.setItem("fullName", authData.fullName);
  localStorage.setItem("email", authData.email);
};

export let removeAuth = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("userId");
  localStorage.removeItem("fullName");
  localStorage.removeItem("email");
};
