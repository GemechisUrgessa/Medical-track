import {
  Box,
  ListItem,
  ListItemText,
  Button,
  Typography,
  Divider,
  CircularProgress,
  Alert,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import EditIcon from "@mui/icons-material/Edit";
import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { getProfile, resetGetProfileStatus } from "../state/slices/user";
import { useNavigate } from "react-router-dom";
const Profile = (props) => {

  let profileState = useSelector(state => state.user.getProfile)
  let profileObj = useSelector(state => state.user.getProfile.profileObj)
  let dispatch = useDispatch()
  let navigate = useNavigate()

  React.useEffect(() => {
    resetGetProfileStatus();
    dispatch(getProfile());
  }, []);

  if (profileState.loading) {
    return (
      <Box display={'flex'} justifyContent='center' alignItems={'center'} height='100%' minWidth={{ xs: '80vw', md: '40vw' }}>
        <CircularProgress></CircularProgress>
      </Box>
    );
  } else if (profileState.errorMsg) {
    return (
      <Box display={'flex'} justifyContent='center' alignItems={'center'} height='100%' minWidth={{ xs: '80vw', md: '40vw' }}>
        <Alert severity="error">Something Went Wrong Try Again!</Alert>
      </Box>
    )
  } else if (Boolean(profileState.successMsg) && !Boolean(profileObj)) {
    return (
      <Box display={'flex'} justifyContent='center' flexDirection={'column'} alignItems={'center'} height='100%' minWidth={{ xs: '80vw', md: '40vw' }}>
        <Typography>Looks Like You Haven't Fillied Your Profile Info</Typography>
        <Button sx={{m:2}} onClick={()=>navigate('/profile')}  variant="outlined">Setup Profile Now</Button>
      </Box>
    )
  } else if (profileObj)
    console.log(profileObj, 'i am the prfile obj')
  return (
    <Box minWidth={{ xs: '80vw', md: "40vw" }}>
      <Box sx={{ margin: "1rem 2rem 0 2rem" }}>
        <ListItem>
          <Button onClick={props.toggleDrawer("right", false)}>
            <ArrowBackIcon />
          </Button>
          <ListItemText
            sx={{ marginLeft: "1rem" }}
            primary={
              <Typography style={{ fontWeight: "700" }}>My Profile</Typography>
            }
          />
        </ListItem>
        <ListItem
          sx={{ padding: "0 !important" }}
          secondaryAction={
            <Button onClick={() => navigate('/profile')} variant="outlined" edge="end" aria-label="delete">
              <EditIcon />
              Edit
            </Button>
          }
        >
          <ListItemText
            primary={
              <Typography style={{ fontWeight: "700", padding: '10px' }}>
                {profileObj.firstName + ' ' + profileObj.lastName}
              </Typography>
            }
          />
        </ListItem>
        <Divider />
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            margin: "1rem 0 0 1rem",
            marginLeft: "0 !important",
          }}
        >
          <ListItemText
            sx={{ marginLeft: "0 !important" }}
            primary={
              <Typography style={{ fontWeight: "700" }}>Birth Date</Typography>
            }
            secondary={profileObj.dateOfBirth?.substr(0, 10)}
          />
          <ListItemText
            primary={
              <Typography style={{ fontWeight: "700" }}>Gender</Typography>
            }
            secondary={profileObj.gender}
          />
          <ListItemText
            primary={
              <Typography style={{ fontWeight: "700" }}>Organ Donor</Typography>
            }
            secondary={profileObj.organDonor ? "Yes" : "No"}
          />
        </Box>
        <ListItemText
          sx={{ marginLeft: "0 !important" }}
          primary={
            <Typography style={{ fontWeight: "700" }}>
              Social Security Number
            </Typography>
          }
          secondary={profileObj.zip}
        />
        <ListItemText
          sx={{ marginLeft: "0 !important" }}
          primary={
            <Typography style={{ fontWeight: "700" }}>Nationality</Typography>
          }
          secondary={profileObj.nationality}
        />
        <ListItemText
          sx={{ marginLeft: "0 !important" }}
          primary={
            <Typography style={{ fontWeight: "700" }}>TelePhone</Typography>
          }
          secondary={profileObj.telephoneNumber}
        />
        <ListItemText
          sx={{ marginLeft: "0 !important", marginBottom: "1rem" }}
          primary={
            <Typography style={{ fontWeight: "700" }}>Post Address</Typography>
          }
          secondary={profileObj.streetAddress}
        />
        <Divider />
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            margin: "1rem 0 0 1rem",
            marginLeft: "0 !important",
          }}
        >
          <ListItemText
            sx={{ marginLeft: "0 !important" }}
            primary={
              <Typography style={{ fontWeight: "700" }}>
                {profileObj.insuranceType + ' Insurance'}
              </Typography>
            }
            secondary={profileObj.insuranceCompany}
          />
          <ListItemText
            primary={
              <Typography style={{ fontWeight: "700" }}>
                Policy Number
              </Typography>
            }
            secondary={profileObj.policyNumber}
          />
        </Box>
        <ListItemText
          sx={{ marginLeft: "0 !important", marginBottom: "1rem" }}
          primary={
            <Typography style={{ fontWeight: "700" }}>
              Emergency Phone
            </Typography>
          }
          secondary={profileObj.emergencyPhone}
        />
        <Divider />
        <ListItemText
          sx={{
            marginLeft: "0 !important",
            marginTop: "1rem",
            marginBottom: "1rem",
          }}
          primary={
            <Typography style={{ fontWeight: "700" }}>
              Contact Persons in case of Emergency
            </Typography>
          }
          secondary={
            <Typography sx={{ display: "flex", flexDirection: "column" }}>
              <Typography>{profileObj.emergencyContactName}</Typography>
              <Typography>{profileObj.emergencyContactPhoneNo}</Typography>
            </Typography>
          }
        />
        <Divider />
        <ListItemText
          sx={{
            marginLeft: "0 !important",
            marginTop: "1rem",
            marginBottom: "1rem",
          }}
          primary={
            <Typography style={{ fontWeight: "700" }}>
              Other Information
            </Typography>
          }
          secondary={
            <Typography sx={{ display: "flex", flexDirection: "column" }}>
              {profileObj.other}
            </Typography>
          }
        />
      </Box>
    </Box>
  );
};

export default Profile;