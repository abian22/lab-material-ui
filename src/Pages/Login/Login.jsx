import { Email, Lock, Visibility, VisibilityOff } from "@mui/icons-material";
import { Button,Card,CardActions,CardContent,CardHeader,Divider,IconButton,TextField} from "@mui/material";
import { blue, yellow } from "@mui/material/colors";
import React, { useState } from "react";
import './Login.css'
import { Link } from "react-router-dom";

const Login = () => {
  const [isPassVisible, setIsPassVisible] = useState(false);

  function handleClick() {
    setIsPassVisible(!isPassVisible);
  }
  return (
    <Card
      sx={{
        width: "700px",
        backgroundColor: blue[200],
        alignContent: "center",
      }}
      raised={true}
    >
      <CardHeader title="Login"></CardHeader>
      <CardContent>
        <TextField
          sx={{ backgroundColor: yellow[100] }}
          label="Email"
          variant="outlined"
          fullWidth={true}
          margin="dense"
          InputProps={{
            startAdornment: <Email />,
          }}
        ></TextField>
        <TextField
          sx={{ backgroundColor: yellow[100] }}
          label="Password"
          variant="outlined"
          fullWidth={true}
          margin="dense"
          type={isPassVisible ? "text" : "password"}
          InputProps={{
            startAdornment: <Lock />,
            endAdornment: (
              <IconButton onClick={handleClick}>
                {isPassVisible ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            ),
          }}
        ></TextField>
      </CardContent>
      <Divider />
      <CardActions sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button
          sx={{ backgroundColor: yellow[200], color: "black", m:1}}
          size="small"
          variant="contained"
        >
          Register
        </Button>
        <Link to="/home">
        <Button
          className="button"
          sx={{ backgroundColor: blue[250], color: "black" }}
          size="small"
          variant="contained"
    
        > 
            LOGIN
        </Button>
          </Link>
      </CardActions>
    </Card>
  );
};

export default Login;
