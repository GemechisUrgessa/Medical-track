import { clientInstance } from "../config/config";

const getFiles = () => {
  return clientInstance.get(`/api/Document`);
};

export default getFiles;
