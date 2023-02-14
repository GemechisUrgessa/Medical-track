import { clientInstance, BASE_URL } from "../config/config";

export let vaccinesListAPI = async (name) => {
  return clientInstance.get(`/api/Vaccine/search?name=${name}`);
};
export let vaccineAddAPI = async (id) => {
  return clientInstance.post(`/api/Vaccine/add/${id}`);
};
export let vaccineDeleteAPI = async (id) => {
  return clientInstance.delete(`/api/Vaccine/${id}`);
};
