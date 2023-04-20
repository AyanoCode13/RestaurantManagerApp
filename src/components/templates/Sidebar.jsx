import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Drawer,
  List,
  Divider,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import AuthMenu from "../navigation/menu/AuthMenu";
export default function Sidebar() {
    const navigate = useNavigate()
  return (
    <div className="SideBar">
      <Box sx={{ display: "flex", backgroundColor: "#000" }}>
        <AppBar
          position="fixed"
          sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
          color="info"
        >
          <Toolbar>
            <Typography variant="h4" noWrap component="div">
              Restaurant App
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          anchor="left"
          sx={{
            width: 240,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: { width: 240, boxSizing: "border-box" },
          }}
        >
          <Toolbar />
          <Box>
            <List>
              {AuthMenu.map((item) => {
                return (
                  <ListItem key={item.path}>
                    <ListItemButton onClick={()=>navigate(item.path)}>
                      <ListItemIcon>{item.icon}</ListItemIcon>
                      <ListItemText primary={item.text} />
                    </ListItemButton>
                  </ListItem>
                );
              })}
            </List>
          </Box>
          <Divider />
          <Box>
            <List></List>
          </Box>
        </Drawer>
      </Box>
    </div>
  );
}
