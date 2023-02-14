import { clientInstance, BASE_URL } from "../config/config";

export let medicinesListAPI = async (name) => {
  return clientInstance.get(`/api/Medicine/search?name=${name}`);
};

export let medicineAddAPI = async (id) => {
  return clientInstance.post(`/api/Medicine/add/${id}`);
};
export let medicineDeleteAPI = async (id) => {
  return clientInstance.delete(`/api/Medicine/${id}`);
};
