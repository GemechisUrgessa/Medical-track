import React, { useState , useEffect} from "react";
import FileUpload from "../components/fileUpload";
import { TextField, MenuItem, Button, Box,ListItem,ListItemText,Typography } from "@mui/material";
import {resetStatus} from '../state/slices/new-document'
import { useDispatch, useSelector } from 'react-redux';
import { useSnackbar } from 'notistack';
import { editFileById } from "../state/slices/edit-document";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { getUserData } from "../state/slices/user";

const DocumentType = [
  'Certificate',
  "Discharge Summary",
  "Insurance",
  "Living Will",
  "Passport",
  "Prescription",
  "Travel Document",
  "X-ray",
  "Other",
];

const EditDocumentPage = (props) => {

  const [formData, setFormData] = useState(props.item);
  const [documentId, setDocumentId] = useState(formData.documentId)
  const [document, setDocument] = useState();
  const [documentTitle, setDocumentTitle] = useState(formData.title);

  const [documentType, setDocumentType] = useState(formData.catagory);
  const [description, setDescription] = useState(formData.description);
  const [documentError, setDocumentError] = useState({
    documentErrorMessage: false,
    documentTitleErrorMessage: false,
  });

  const dispatch = useDispatch();
  const data = useSelector(state => state.editDocument);
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    setFormData(props.item);
    setDescription(formData.description)
    setDocumentTitle(formData.title)
    setDocumentType(formData.catagory)
    setDocumentId(formData.documentId)
  }, [props.item, formData]);


  const handleDescription = (e) => {
    setDescription(e.target.value);
  };
  const handleDocumentType = (e) => {
    setDocumentType(e.target.value);
  };
  const handleDocumentTitle = (e) => {
    if (e.target.value.length <= 5) {
      setDocumentError({ ...documentError, documentTitleErrorMessage: true });
    } else if (e.target.value.length >= 6) {
      setDocumentError({ ...documentError, documentTitleErrorMessage: false });
    }
    setDocumentTitle(e.target.value);
  };
  const updateFileCb = (file) => {
    if (file === undefined) {
      setDocumentError(true);
      setDocumentError({ ...documentError, documentErrorMessage: true });
    }
    if (file !== undefined) {
      setDocumentError({ ...documentError, documentErrorMessage: false });
    }
    setDocument(file);
  };
  const handleUpdateDocument = (e) => {
    e.preventDefault();
    if (documentTitle.length === 0) {
      documentError.documentTitleErrorMessage = true;
      setDocumentError({ ...documentError, documentTitleErrorMessage: true });
    }
    if (document === undefined) {
      documentError.documentErrorMessage = true;
      setDocumentError({ ...documentError, documentErrorMessage: true });
    } else if (
      documentError.documentErrorMessage === false &&
      documentError.documentTitleErrorMessage === false
    ) {
      dispatch(editFileById({document, documentTitle, documentType, description, documentId, enqueueSnackbar, dispatch}));
      if (data.isEdited){
        // dispatch(getUserData());
        dispatch(resetStatus());
        
      }
      else if (data.errorMessage.length !== 0) {
        const variant = 'error'
        enqueueSnackbar('Failed to upload document !', {variant} );
      }
      props.toggleDrawer("right", false)(e);
      
    }
  };
  return (
    <Box component="form" onSubmit={handleUpdateDocument} sx={{ width: '36em !important',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: '100vh',
  margin: '0 auto',
  padding: '2em',
  }}>
      <Box sx={{display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  gap: '1em',
  width: '100%'}}>
        <ListItem>
          <Button 
          onClick={props.toggleDrawer("right",false)}
          >
            <ArrowBackIcon />
          </Button>
          <ListItemText
            sx={{ marginLeft: "1rem" }}
            primary={
              <Typography style={{ fontWeight: "700" }}>Edit Your Document</Typography>
            }
          />
        </ListItem>
        <FileUpload 
        name = {''}
          updateFileCb={updateFileCb}
          maxFileSizeInBytes={9000000000}
          isProvided={documentError.documentErrorMessage}
        />
        <TextField
          value={documentTitle}
          onChange={handleDocumentTitle}
          error={documentError.documentTitleErrorMessage}
          fullWidth
          variant="outlined"
          placeholder="Document Title"
          helperText={
            documentError.documentTitleErrorMessage &&
            "Please Provide Document Title or is too short!"
          }
        />
        <TextField
          fullWidth
          select
          label="Document Type"
          value={documentType}
          onChange={handleDocumentType}
        >
          {DocumentType.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>

        <TextField
        value={description}
          onChange={(e) => handleDescription(e)}
          multiline
          maxRows={9}
          fullWidth
          variant="outlined"
          placeholder="Description(Optional)"
        />
      </Box>
      <Button type="submit" variant="contained" sx={{ marginBottom: '2em !important',
  width: '100%',
  height: '4em',
  borderRadius: '6px'}}>
        {" "}
        UPDATE DOCUMENT
      </Button>
    </Box>
  );
};

export default EditDocumentPage;
