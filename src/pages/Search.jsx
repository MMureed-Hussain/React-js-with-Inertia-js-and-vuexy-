import { Button, Menu, MenuItem } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";

const Search = () => {
  const [value, setValue] = useState("");
  const [users, setUsers] = useState([]);

  const onChange = (e) => {
    setValue(e.target.value);
  };

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

  return (
    <>
      <div className="App">
        {/* <h1>Searching Here</h1> */}
        <div className="search-container">
          <div className="search-inner">
            <input className="input" placeholder="Search…" type="text" value={value} onChange={onChange} />
            <button className="button" onClick={() => onSearch(value)}>
              {" "}
              Search
            </button>
          </div>
          <div className="dropdown">
            {users
              .filter((user) => {
                const searchTerm = value.toLowerCase();
                const email = user.email ? user.email.toLowerCase() : "";
                return searchTerm && email.startsWith(searchTerm) && email !== searchTerm;
              })
              .map((user) => (
                <div className="dropdown-row" onClick={ () => onSearch(user.email)} key={user.id} >
                  {user.email}
                </div>
              ))}
          </div>   
        </div>
      </div>
    </>
  );
};

export default Search;


