import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../state/slices/user";

const drawerWidth = 240;
const navItems = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Business",
    path: "/business",
  },
  {
    name: "Professionals",
    path: "/professionals",
  },
  {
    name: "About",
    path: "/about",
  },

  {
    name: "FAQ",
    path: "/faq",
  },
];

function NavBar(props) {
  let location = useLocation();
  let dispatch = useDispatch();
  let userState = useSelector((state) => state.user);
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        World Medicine
      </Typography>
      <Divider />
      <Box>
        {navItems.map((item,index) => (
          
           <Button
            key={item.name}
            onClick={(e) => {
              navigate(item.path);
            }}
            sx={{
              display: "block",
              fontSize: "13px",
              color: location.pathname === item.path ? "#13bff2" : "black",
            }}
          >
            {item.name}
          </Button>
        ))}
      </Box>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
  const navigate = useNavigate();

  return (
    <Box
      sx={{ display: "flex" }}
      justifyContent="center"
      overflow={"hidden"}
      boxShadow={"1px 1px 6px 5px lightgray"}
    >
      <CssBaseline />
      <Box
        display={"flex"}
        justifyContent="center"
        my={"auto"}
        alignContent={"center"}
      >
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ ml: 2, fontSize: "20px", display: { sm: "none" } }}
        >
          <MenuIcon sx={{ color: "#13bff2" }} />
        </IconButton>
        <Box mr="40px">
          <img src="./images/icon.jpg" alt="icon" />
        </Box>
        <Box sx={{ flexGrow: 1 }}></Box>
        <Box sx={{ display: { xs: "none", sm: "flex" } }}>
          {navItems.map((item) => (
            <Button
              key={item.name}
              onClick={(e) => {
                navigate(item.path);
              }}
              sx={{
                marginRight: "29px",
                fontSize: "13px",
                fontWeight: "600",
                color: location.pathname === item.path ? "#13bff2" : "gray",
              }}
            >
              {item.name}
            </Button>
          ))}
        </Box>
        <Box my={"auto"}>
          {!userState.token && (
            <Link
              to={"/login"}
              style={{
                textDecoration: "none",
                backgroundColor: "black",
                color: "white",
                padding: "8px",
                paddingRight: "24px",
                paddingLeft: "24px",
              }}
            >
              Login
            </Link>
          )}

          {userState.token && <Button onClick={()=>navigate('/home')} style={{ textDecoration: 'none', backgroundColor: "black", color: "white", padding: "8px", paddingRight: "24px", paddingLeft: "24px" }} > Profile </Button>}
        </Box>
      </Box>

      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}

NavBar.propTypes = {
  window: PropTypes.func,
};

export default NavBar;