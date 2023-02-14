import { clientInstance, BASE_URL } from "../config/config";

export let allergiesListAPI = async (name) => {
  return clientInstance.get(`/api/Allergies/search?name=${name}`);
};
export let allergyAddAPI = async (id) => {
  return clientInstance.post(`/api/Allergies/add/${id}`);
};
export let allergyDeleteAPI = async (id) => {
  return clientInstance.delete(`/api/Allergies/${id}`);
};
