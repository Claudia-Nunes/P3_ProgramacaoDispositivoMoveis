import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/screens/HomeScreen";
import BooksScreen from "./src/screens/BooksScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Buscas">
        {/* Alterando o nome da rota e o título */}
        <Stack.Screen name="Buscas" component={HomeScreen} options={{ title: "Buscas" }} />
        <Stack.Screen name="Lista de livros" component={BooksScreen} options={{ title: "Lista de livros" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
