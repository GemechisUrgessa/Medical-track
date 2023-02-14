import { clientInstance } from "../config/config";

const deleteFile = (id) => {
  return clientInstance.delete(`/api/Document/${id}`);
};

export default deleteFile;
