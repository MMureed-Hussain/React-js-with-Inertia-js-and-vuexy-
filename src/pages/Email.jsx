// ** React Imports
// ** MUI Imports
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useState } from "react";
import { Box,Button} from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";
import SendIcon from "@mui/icons-material/Send";
import SpamIcon from "@mui/icons-material/Report";
import InboxIcon from "@mui/icons-material/Inbox";
import StarredIcon from "@mui/icons-material/Star";
import DraftsIcon from "@mui/icons-material/Drafts";
import SnoozedIcon from "@mui/icons-material/Snooze";
import { makeStyles } from "@material-ui/core/styles";
import ListItemButton from "@mui/material/ListItemButton";

// ** Icon Imports
// import Icon from 'src/@core/components/icon'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing(1),
  },
  paper: {
    padding: theme.spacing(1),
  },
  button: {
    margin: theme.spacing(1),
  },
}));

const Email = () => {
  const [showComposeForm, setShowComposeForm] = useState(false);

  const classes = useStyles();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add code to handle submitting the email form data
  };

  return (
    <>
     <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <List component="nav" aria-label="main mailbox" sx={{ flexGrow: 1 }}>
        <ListItemButton>
          <Button
            variant="contained"
            size="large"
            sx={{
              width: "100%",
              mb: 1,
              [`@media (min-width:600px)`]: {
                width: "200px",
              },
            }}
            onClick={() => setShowComposeForm(true)}
          >
            COMPOSE
          </Button>
        </ListItemButton>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Inbox" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <DraftsIcon />
            </ListItemIcon>
            <ListItemText primary="Drafts" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <SendIcon />
            </ListItemIcon>
            <ListItemText primary="Sent" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <StarredIcon />
            </ListItemIcon>
            <ListItemText primary="Starred" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <ChatIcon />
            </ListItemIcon>
            <ListItemText primary="Chat" />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider sx={{ m: "0 !important" }} />
      <List component="nav" aria-label="secondary mailbox">
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <SnoozedIcon />
            </ListItemIcon>
            <ListItemText primary="Snoozed" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a">
            <ListItemIcon>
              <SpamIcon />
            </ListItemIcon>
            <ListItemText primary="Spam" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
    </>
  );
};

export default Email;
