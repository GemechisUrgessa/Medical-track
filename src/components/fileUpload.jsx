import { useEffect } from 'react';
import { Button, Box , Input} from '@mui/material';
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import React, { useState} from 'react';
const DEFAULT_MAX_FILE_SIZE_IN_BYTES = 500000;
 const FileUpload = ({updateFileCb,
  maxFileSizeInBytes = DEFAULT_MAX_FILE_SIZE_IN_BYTES, isProvided , name}) => {
  // const [file, setFile] = useState();
  let [Name, setName] = useState(name);
  console.log(name);
  const [error, setError] = useState(false);
  const handleNewFileUpload = (e) => {
    const newFile= e.target.files[0];
    if (newFile.size > maxFileSizeInBytes) {
      setError(true);
    }


    else{
      Name = newFile;
      setName(newFile.name);
      updateFileCb(newFile)
    }
    
  };
  useEffect(() => {
  }, [Name]);
  //

    return (<>
      <Box sx={{position: 'relative',
  width: '100%',
  height: '3em',
  border: '2px solid lightgray',
  borderRadius: '6px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: 'white'}}
       className={(error || isProvided) && 'error-msg'}>
        { Name? <span style={{margin: 'auto auto'}}>{Name}</span>: <Button variant='contained' sx={{margin: '.2em !important'}}> <DriveFolderUploadIcon /> Add</Button> }
        <Input
        sx={{fontSize: '18px',
  display: 'block',
  width: '100%',
  border: 'none',
  textTransform: 'none',
  position: 'absolute',
  top: '0',
  left: '0',
  right: '0',
  bottom: '0',
  opacity: '0',':focus': {
        outline: 'none',
      }}}
          type="file"
          onChange={handleNewFileUpload}
          title=""
          value=""
          multiple={false}
        />
      </Box>
      {error && <span style={{color: '#d32f2f',
    fontSize: '13px',
    fontWeight: '400',
    marginRight: '24em', width: '10rem'}}>File size should be less than {maxFileSizeInBytes/1000} KB</span>}
            {isProvided && <span style={{color: '#d32f2f',
    fontSize: '14px',
    fontWeight: '400',
    marginRight: '24em', width: '10rem'}}>Please Upload some file</span>}
      </>
    )
 }

 export default FileUpload;