import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authActions } from "../store";
import Loading from "./Loading";


const Login =() =>{

    const dispatch = useDispatch();
    const history = useNavigate();

    const [inputs,setInputs] = useState({
        email : "",
        password : ""
    });

    const handleChange = (e) => {
        setInputs((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }))

    }

    const sendRequest = async () =>{

        const res = await axios.post("http://localhost:5000/api/login",{
            
            email: inputs.email,
            password: inputs.password

        }).catch((err) => console.log(err));

        const data = await res.data;
        return data;
    };

    const handleSubmit = (e) => {

         e.preventDefault();
         sendRequest()
         .then(() => dispatch(authActions.login()))
         .then(() =>history("/user"))
         
    };

    
 

    return(
        <div>
  
        <form  onSubmit={handleSubmit} >
            <Box  width = {500} marginLeft = "auto" marginRight= "auto" display= "flex" flex flexDirection={'column'}>
                <Typography variant="h3">Login</Typography>

                <TextField type = {"email"}  name="email"  onChange={handleChange} value={inputs.email}     variant="outlined" placeholder = "Enter Email" margin="normal"/>
                <TextField type = "password"  name="password"  onChange={handleChange} value={inputs.password}  variant="outlined" placeholder = "Enter Password" margin="normal"/>
                <Button variant="contained"  type = "submit"> Login</Button>

            </Box>

        </form>
        </div>
    );
};

export default Login;