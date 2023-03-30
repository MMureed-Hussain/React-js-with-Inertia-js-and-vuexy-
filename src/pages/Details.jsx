import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const Details = () => {
  const { id } = useParams();
  console.warn("email details based on id", id);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetchUsers();
  }, []);
  const fetchUsers = async () => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => {
        console.log("responces based on id", res);
        setUsers(res.data);
      })
      .catch((error) => console.log());
    <h3>Details of emails</h3>;
  };
  return (
    <>
      {[users] &&
        [users].map((user,index) => {
          return (
            <div key={index}>
              <h3 className="mt-3 ">Profile With info</h3>
              <Card sx={{ maxWidth: 345 ,marginLeft: 60, marginTop:5, bgcolor: 'GrayText'}}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image="https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg"
                    alt={user.name}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div" sx={{fontSize:20 , color:'whitesmoke'}}>
                      {user.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {user.email}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </div>
          );
        })}
    </>
  );
};

export default Details;
