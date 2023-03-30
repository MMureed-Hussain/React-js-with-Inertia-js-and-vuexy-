import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Button, Grid, Paper, Typography } from "@material-ui/core";
import { Box, Card } from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";

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

function Compose() {
  const [showComposeForm, setShowComposeForm] = useState(false);
  const classes = useStyles();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add code to handle submitting the email form data
  };

  return (
    <>
      {/* <Box className="d-flex justify-content-end align-items-end"> */}
      <div style={{ position: "fixed", bottom: "20px", right: "20px" }}>
        <ChatIcon onClick={() => setShowComposeForm(!showComposeForm)} />
        {showComposeForm && (
          <Card
            style={{ maxWidth: "100%", width: "100%", margin: "10px auto" }}
          >
            <div
              className={classes.root}
              style={{
                maxWidth: 345,
                marginTop: 10,
                bgcolor: "GrayText",
              }}
            >
              <form onSubmit={handleSubmit}>
                <Paper className={classes.paper}>
                  <Grid container justifyContent="flex-end">
                    <Typography variant="h6" gutterBottom>
                      Compose Email
                    </Typography>
                  </Grid>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <TextField
                        required
                        id="to"
                        name="to"
                        label="To"
                        fullWidth={true}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        id="subject"
                        name="subject"
                        label="Subject"
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        id="message"
                        name="message"
                        label="Message"
                        multiline
                        minRows={10}
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        className={classes.button}
                      >
                        Send
                      </Button>
                    </Grid>
                  </Grid>
                </Paper>
              </form>
            </div>
          </Card>
        )}
      </div>
    </>
  );
}

export default Compose;
