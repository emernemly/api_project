import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Searchname from "./Search";
import { Link } from "react-router-dom";

function Navbar({ setText }) {
  return (
    <Box sx={{ flexGrow: 1, backgroundColor: "#23180e" }}>
      <AppBar position="static" style={{ backgroundColor: "brown" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            <Link to="/" style={{ color: "white", textDecoration: "none" }}>
              Home
            </Link>
          </Typography>
          <Searchname setText={setText} />
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
