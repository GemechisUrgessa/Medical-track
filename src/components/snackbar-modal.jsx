import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { useDispatch } from "react-redux";
import { logout } from "../state/slices/user";

const style = {
  position: "absolute",
  boxSizing: "border-box",
  bottom: "0%",
  width: "100%",
  display: "block",
  color: "white",
  bgcolor: "#273238",
  boxShadow: 24,
  borderRadius: "20px 20px 0px 0px",
  p: 4,
};

function SnackBarModal({ open, handleClose }) {
  let dispatch = useDispatch();

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Button
            onClick={null}
            sx={{ color: "white", display: "block", textTransform: "none" }}
          >
            Terms and conditions
          </Button>
          <Button
            onClick={() => dispatch(logout())}
            sx={{ color: "white", display: "block", textTransform: "none" }}
          >
            Sign out
          </Button>
        </Box>
      </Modal>
    </div>
  );
}

function RemoveSnackBar({ open, handleClose }) {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Button
            onClick={null}
            sx={{ color: "white", display: "block", textTransform: "none" }}
          >
            Remove item(s)
          </Button>
        </Box>
      </Modal>
    </div>
  );
}

export { RemoveSnackBar, SnackBarModal };
