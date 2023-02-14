import { clientInstance } from "../config/config";



  const upload = (document, documentTitle, documentType, description) =>{
    let formData = new FormData();
    console.log("upload")
    formData.append("File", document);
    formData.append("Title", documentTitle);
    formData.append("Catagory", documentType);
    formData.append("Description", description);

    return clientInstance.post(`/api/Document/add`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }


export default upload
