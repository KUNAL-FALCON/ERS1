import { Stack, Text } from "@fluentui/react";
import React, { useEffect , useContext } from "react";
import { EthContext } from "../../contexts/EthContext";

export const UserMainScreen = () => {


    const [state, dispatch] = useContext(EthContext);

    const [balance, setBalance] = React.useState();
    const [Inventory, setInventory] = React.useState();

    const getInventoryOfUser = async() => {
        //Get the Current User's Inventory Details
    };

    const getBalanceOfUser = async() => {
        //Get the Current User's Balance
    };

    //Runs when the Pages loads
    useEffect(() => {
        
    } , []);

    return(
        <React.Fragment>
            <Stack
                style={{ border: "1px solid black"}}
                horizontalAlign = "center"
                verticalAlign = "center"
                verticalFill
            >
                <Text variant="xxLarge"> User Inventory {state.networkID} </Text>
                <Text variant="xxLarge"> User Balance {state.balance}</Text>
                {/* <Text variant="xxLarge"> User Balance {balance} </Text> */}
            </Stack>
        </React.Fragment>
    )
}