import { Button } from "@mui/material";
import React, { useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import axios from "axios";

const Topbar = () => {
  const [value, setValue] = useState("");
  const [users, setUsers] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  //   const onSearch = (searchTerm) => {
  const onSearch = (searchTerm) => {
    //api call actions here
    setValue(searchTerm);
    console.log("searching value", searchTerm);
    axios
      .get(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => {
        console.log("responces of Searching", res);
        setUsers(res.data);
      })
      .catch((error) => console.log());
  };

  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.black, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.black, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(5),
      width: "100%",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(0.5em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "60ch",
        },
      },
    },
  }));
  /////handle dropdown

  return (
    <>
      {/* <Toolbar>
          <Search>
          <SearchIconWrapper>
          <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
          />
          </Search>
        </Toolbar> */}
      <div
        className="demo-space-x"
        style={{ display: "flex", flexWrap: "wrap" }}
      >
        <Button
          variant="text"
          size="large"
          sx={{
            width: "100%",
            maxWidth: "150px",
            fontSize: "15px",
            marginBottom: "8px",
          }}
        >
          Primary
        </Button>
        <Button
          variant="text"
          size="large"
          sx={{
            width: "100%",
            maxWidth: "150px",
            fontSize: "15px",
            marginBottom: "8px",
          }}
        >
          Promotion
        </Button>
        <Button
          variant="text"
          size="large"
          sx={{
            width: "100%",
            maxWidth: "150px",
            fontSize: "15px",
            marginBottom: "8px",
          }}
        >
          Social
        </Button>
        <Button
          variant="text"
          size="large"
          sx={{
            width: "100%",
            maxWidth: "150px",
            fontSize: "15px",
            marginBottom: "8px",
          }}
        >
          Update
        </Button>
      </div>
    </>
  );
};

export default Topbar;
