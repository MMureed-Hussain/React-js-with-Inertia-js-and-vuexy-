import React, { useEffect } from "react";
// ** React Imports
import { useState } from "react";

// ** MUI Imports
import List from "@mui/material/List";
import Avatar from "@mui/material/Avatar";
import ListItem from "@mui/material/ListItem";
import Checkbox from "@mui/material/Checkbox";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import axios from "axios";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import Search from "./Search";
import { Skeleton } from "@mui/material";

const Profiles = () => {
  //  ** api call
  const [users, setUsers] = useState([]);
  const [clickedIcons, setClickedIcons] = useState(false);

  useEffect(() => {
    fetchUsers();
  }, []);
  const fetchUsers = async () => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => {
        console.log("responces", res);
        setUsers(res.data);
      })
      .catch((error) => console.log());
  };

  // ** State
  const [checked, setChecked] = useState([0]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  /// star filled handle
  const handleIconClick = (id) => {
    setClickedIcons((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  return (
    <>
        <List>
          {users.map((user) => (
            <ListItem key={user.id} disablePadding>
              <Checkbox
                edge="end"
                tabIndex={-1}
                disableRipple
                onChange={handleToggle(user.id)}
                checked={checked.indexOf(user.id) !== -1}
              />
              {/* <StarBorderIcon color="success" sx={{marginLeft:3}} /> */}
              {clickedIcons[user.id] ? (
                <StarIcon
                  color="primary"
                  sx={{ marginLeft: 3 }}
                  onClick={() => handleIconClick(user.id)}
                />
              ) : (
                <StarBorderIcon
                  sx={{ marginLeft: 3 }}
                  onClick={() => handleIconClick(user.id)}
                />
              )}
              <ListItemAvatar>
                <Avatar
                  src="#"
                  alt={user.name}
                  sx={{ height: 32, width: 32, left: 10 }}
                />
              </ListItemAvatar>
              <ListItemButton
                onClick={handleToggle(user.id)}
                href={`/details/${user.id}`}
              >
                <ListItemText primary={user.email} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
    </>
  );
};

export default Profiles;
