import React from "react";
import { View } from "react-native";
import { NativeRouter, Route, Link } from "react-router-native";
import Home from "./Pages/Home";

const route = () => {
    return (
        <NativeRouter>
            <View style={{ padding: 10, height: '100%', }}>
            
                <Route path="/" exact component={ Home }/>
            </View>
        </NativeRouter>
    )
};

export default route;