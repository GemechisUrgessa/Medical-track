import { clientInstance } from "../config/config";

export const loginAPI = async (email, password) => {
  return clientInstance.post("/api/user/Auth/login", {
    email,
    password,
  });
};
export const SignupAPI = async (firstName, lastName, email, password) => {
  return clientInstance.post("/api/user/Auth/register", {
    firstName,
    lastName,
    email,
    password,
  });
};

export const profileUpdateAPI = async (profileInformation) => {
  return clientInstance.put("/api/Profile/update", {
    ...profileInformation,
  });
};

export const getProfileAPI = async () => {
  return clientInstance.get("/api/Profile/get");
};

export const getUserDataAPI = async () => {
  return clientInstance.get("/api/Profile/userData");
};
