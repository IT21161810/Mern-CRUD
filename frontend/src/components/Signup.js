import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Signup =() =>{

    const history = useNavigate();

    const [inputs,setInputs] = useState({
        name :"",
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

        const res = await axios.post("http://localhost:5000/api/signup",{
            name: inputs.name,
            email: inputs.email,
            password: inputs.password

        }).catch((err) => console.log(err));

        const data = await res.data;
        return data;
    };

    const handleSubmit = (e) => {

         e.preventDefault();
         sendRequest().then(() =>history("/login"));
    };

    return(
        <div>
            
        <form  onSubmit={handleSubmit} >
            <Box  width = {500} marginLeft = "auto" marginRight= "auto" display= "flex" flex flexDirection={'column'}>
                <Typography variant="h3">SignUp</Typography>

                <TextField name ="name"    onChange={handleChange} value={inputs.name}   variant="outlined" placeholder = "Enter Name" margin="normal"/>
                <TextField type = {"email"}  name="email"  onChange={handleChange} value={inputs.email}     variant="outlined" placeholder = "Enter Email" margin="normal"/>
                <TextField type = "password"  name="password"  onChange={handleChange} value={inputs.password}  variant="outlined" placeholder = "Enter Password" margin="normal"/>
                <Button variant="contained"  type = "submit">Sign Up</Button>

            </Box>

        </form>
        </div>
    );
};

export default Signup;