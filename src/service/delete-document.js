import { clientInstance } from "../config/config.js";

const deleteFile = (id) => {
  return clientInstance.delete(`/api/Document/${id}`);
};

export default deleteFile;
