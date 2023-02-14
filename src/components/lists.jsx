import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { styled, alpha } from "@mui/material/styles";
import {Menu, Button} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { deleteFileById } from "../state/slices/delete-document";
import { useSnackbar } from 'notistack';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import EditDocumentPage from "../pages/edit-document-page";
import DownloadIcon from '@mui/icons-material/Download';
import { getUserData } from "../state/slices/user";

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

const DocumentLists = (props) => {
  const [file, setFile] = useState([]);
  const [title, setTitle] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const dispatch = useDispatch();
  const isDeleted = useSelector( state => state.deleteDocument.isDeleted);
  const { enqueueSnackbar } = useSnackbar();
  const [drawerState, setDrawerState] = useState(false);
  let [item, setItem] = useState({});

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const toggleDrawer = (anchor, open, eachFile) => (event) => {
    handleClose();
    if (open){
      item = eachFile;
      setItem(eachFile);
    }
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setDrawerState(open);
  };
  const checkClose =(e) => {
  toggleDrawer("right",false)(e)
  console.log("me1")
  // dispatch(getUserData());
}
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleDownload = (path, title) => {
    console.log(path);
   const link = document.createElement("a");
  link.href = path;
  link.download = title;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  }

  const handleDelete = (Id) => {
    dispatch(deleteFileById({Id, enqueueSnackbar, dispatch}))
    
   
  };

  useEffect(() => {
    setFile(props.data);
    setTitle(props.title);
  }, [props.data, props.title, isDeleted]);

  return (
    <>
    <List
      sx={{ width: "100%", bgcolor: "background.paper" }}
      subheader={<ListSubheader sx={{fontWeight:'1000'}}>{title}</ListSubheader>}
    >
      {file ? file.map((eachFile, index) => { return (
        <ListItem key={eachFile.documentId}>
          <ListItemIcon>
            <FileCopyIcon />
          </ListItemIcon>
          <ListItemText id={eachFile.title} primary={eachFile.title} />
          <Button
          sx={{float: 'right'}}
        id="demo-customized-button"
        aria-controls={open ? 'demo-customized-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        disableElevation
        onClick={handleClick}
      >
        <MoreVertIcon />
      </Button>
          <StyledMenu
            id="customized-menu"
            MenuListProps={{
              "aria-labelledby": "customized-button",
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
          >
            <MenuItem onClick={toggleDrawer('right', true, eachFile)} >
              <EditIcon />
              Edit
            </MenuItem>
            <MenuItem onClick={() => handleDelete(eachFile.documentId)} >
              <DeleteForeverIcon />
              Delete
            </MenuItem>
            <MenuItem onClick={() => handleDownload(eachFile.filePath, eachFile.title)} >
              <DownloadIcon />
              Download
            </MenuItem> 
            </StyledMenu>
        </ListItem>);
      }) : null}
    </List>
      <SwipeableDrawer
        anchor={"right"}
        open={drawerState}
        onClose={(e)=> checkClose(e)}
        onOpen={toggleDrawer("right", true)}
      >
            {<EditDocumentPage item={item} toggleDrawer={toggleDrawer}/>}
          </SwipeableDrawer>
    </>
  );
};

export default DocumentLists;
