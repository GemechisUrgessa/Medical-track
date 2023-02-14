import React, { useState, useEffect } from "react";
import FileUpload from "../components/fileUpload";
import { TextField, MenuItem, Button, Box, CircularProgress, ListItem, ListItemText, Typography } from "@mui/material";
import {resetStatus, uploadData} from '../state/slices/new-document'
import { useDispatch, useSelector } from 'react-redux';
import { useSnackbar } from 'notistack';
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { getUserData } from "../state/slices/user";


const DocumentType = [
  "Certificate",
  "Discharge Summary",
  "Insurance",
  "Living Will",
  "Passport",
  "Prescription",
  "Travel Document",
  "X-ray",
  "Other",
];

const AddDocumentPage = (props) => {
  const [document, setDocument] = useState();
  const [documentTitle, setDocumentTitle] = useState('');
  const [documentType, setDocumentType] = useState("Certificate");
  const [description, setDescription] = useState('');
  const [documentError, setDocumentError] = useState({
    documentErrorMessage: false,
    documentTitleErrorMessage: false,
  });
  let [loading , setLoading] = useState(false);
  const dispatch = useDispatch();
  const data = useSelector(state => state.addDocument);
  const { enqueueSnackbar } = useSnackbar();

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
  const handleAddNewDocument = (e) => {
    e.preventDefault();
    console.log(document.length,'data');
    if (documentTitle.length === 0) {
      documentError.documentTitleErrorMessage = true;
      setDocumentError({ ...documentError, documentTitleErrorMessage: true });
    }
    if (document === undefined || document.length === 0) {
      documentError.documentErrorMessage = true;
      setDocumentError({ ...documentError, documentErrorMessage: true });
    } else if (
      documentError.documentErrorMessage === false &&
      documentError.documentTitleErrorMessage === false
      ) {
        dispatch(uploadData({document, documentTitle, documentType, description, enqueueSnackbar, dispatch}));
        
        if (data.uploadData.errorMessage.length !== 0) {
          const variant = 'error'
          enqueueSnackbar('Failed to upload document !', {variant} );
        }
        else if (data.uploadData.successUploads) {

          loading = true;
          setLoading(true);
          dispatch(resetStatus());
          // dispatch(getUserData());
        }
        props.handleAdd(false)(e);
        setDocument();
        setDocumentTitle('');
        setDocumentType("Certificate");
        setDescription('');
        setDocumentError({ documentErrorMessage: false, documentTitleErrorMessage: false });
        
    }
  };
  useEffect(() => {
    let timeId;
      timeId = setTimeout(() => {
      setLoading(false);
      }, 2000);
      return () => {
        clearTimeout(timeId);
      };

    },[loading])
  return (
    <Box component="form" onSubmit={handleAddNewDocument} sx={{ width: '36em !important',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: '100vh',
  margin: '0 auto',
  padding:'2rem'}}>
      <Box sx={{display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  gap: '1em',
  width: '100%'}} >
    <ListItem>
          <Button onClick={props.handleAdd(false)}>
            <ArrowBackIcon />
          </Button>
          <ListItemText
            sx={{ marginLeft: "1rem" }}
            primary={
              <Typography style={{ fontWeight: "700" }}>Add New Document</Typography>
            }
          />
        </ListItem>
        
        <FileUpload
          updateFileCb={updateFileCb}
          maxFileSizeInBytes={9000000000}
          isProvided={documentError.documentErrorMessage}
          name={document? document.name : undefined}

        />
        <TextField
          onChange={handleDocumentTitle}
          error={documentError.documentTitleErrorMessage}
          fullWidth
          value={documentTitle}
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
          value={documentType}
          label="Document Type"
          defaultValue="Certificate"
          onChange={handleDocumentType}
        >
          {DocumentType.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          onChange={(e) => handleDescription(e)}
          multiline
          maxRows={9}
          fullWidth
          value={description}
          variant="outlined"
          placeholder="Description(Optional)"
        />
      </Box>
       <Box sx={{ m: 1, position: 'relative' }}>
      <Button disabled={loading} 
      type="submit" variant="contained" sx={{ marginBottom: '2em !important',
  width: '100%',
  height: '4em',
  borderRadius: '6px'}}>
        {" "}
        UPLOAD NEW DOCUMENT
      </Button>
      {loading && (
          <CircularProgress
            size={27}
            sx={{
              color: 'green[500]',
              position: 'absolute',
              top: '25%',
              left: '50%',
              marginTop: '-4px',
              marginLeft: '-12px',
            }}
          />)}
          </Box>
    </Box>
  );
};

export default AddDocumentPage;
