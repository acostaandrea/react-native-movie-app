import { View, Text } from "react-native";
import React from "react";
import "./global.css";
import { 
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { Stack } from "expo-router";

const Layout = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Stack screenOptions={ {
        headerShown: false      
      }}/>
    </QueryClientProvider>
  );
};

export default Layout;
