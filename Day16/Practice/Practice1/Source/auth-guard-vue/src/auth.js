const users = [
  {
    user: "user",
    key: "user",
  },
  {
    user: "admin",
    key: "admin",
  },
];

const isLoggedIn = () => {
  return !!users.find((user) => JSON.parse(localStorage.getItem("user"))?.user);
};

const login = (form) => {
  const user = users.find((user) => user.user === form.user);
  if (!user || user.key !== form.key) return false;
  localStorage.setItem("user", JSON.stringify({ user: user.user }));
  return true;
};

const logout = () => {
  localStorage.removeItem("user");
};

const user = () => {
  return JSON.parse(localStorage.getItem("user"))?.user;
};

export { isLoggedIn, login, logout, user };
