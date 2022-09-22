import { IStackStyles, IStackTokens, Stack, Text, TextField, PrimaryButton } from "@fluentui/react";
import React from "react";

import { useNavigate } from 'react-router-dom';


const token = { childrenGap: 20 }

const LoginComponentStyle = {
    root: {
        border: "1px solid black",
        height: "500px",
        width: "500px"
    }
};

export const LoginComponent = () => {


    const navigate = useNavigate();

    const [alias, setAlias] = React.useState("");
    const [password, setPassWord] = React.useState("");


    const handleOnChangeAlias = (newText) => setAlias(newText);


    const handleOnChangePass = (newText) => setPassWord(newText);

    const onClickLoginButton = (event) => {
        event.preventDefault();

        if (alias === "admin" && password === "admin") {
            navigate("/_layout/Sceeen");
        } else {
            console.log("Wrong Credentials");
        }
    };


    return(
        <Stack
          tokens = {token}  
          styles = {LoginComponentStyle}
          verticalAlign = "center"
          horizontalAlign = "center"   
        >
            <Stack
                verticalAlign = "center"
                horizontalAlign = "center"
                style = {{ padding: "10px",  width: "100%" }}
                tokens = { token }
            >
                <Text style = {{ textAlign: "left" , width: "100%"}} variant="xxLarge"> Welcome to Microsoft! </Text>   
                {/* <Text style = {{ textAlign: "left", width: "100%"}}>Sign up with your alias@microsoft.com</Text> */}
                <TextField style = {{ width: "400px" }} placeholder="someone@microsoft.com" underlined label="Alias"
                    onChange={(event, newValue) => handleOnChangeAlias(newValue)}/>
                <TextField style = {{ width: "400px" }} placeholder="abc123" underlined label="Passw"
                    onChange={(event, newValue) => handleOnChangePass(newValue)}/>
                <div style={{ width: "100%" , marginLeft: "20px"}}>
                    <PrimaryButton text="Log In" allowDisabledFocus onClick={(event) => onClickLoginButton(event)} />
                </div>
            </Stack>
        </Stack>
    );
}