import { clientInstance } from "../config/config.js";

const getFiles = () => {
  return clientInstance.get(`/api/Document`);
};

export default getFiles;
