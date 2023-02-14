import { clientInstance, BASE_URL } from "../config/config";

export let diagnosesListAPI = async (name) => {
  return clientInstance.get(`/api/Diagnoses/search?name=${name}`);
};
export let diagnosesAddAPI = async (id) => {
  return clientInstance.post(`/api/Diagnoses/add/${id}`);
};
export let diagnosesDeleteAPI = async (id) => {
  return clientInstance.delete(`/api/Diagnoses/${id}`);
};
