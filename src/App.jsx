// App.js

import React from "react";
import {
  Button,
  Center,
  Flex,
  Grid,
  GridItem,
  Heading,
} from "@chakra-ui/react";
import "./App.css";
import Cart from "./components/Cart";
import Items from "./components/Items";
import { useCart } from "./components/CartContext";
import AddCandy from "./components/AddCandy";
const App = () => {
  const candies = [
    {
      name: "Puma",
      price: 10,
      desc: "Sport",
    },
    {
      name: "Nike",
      price: 5,
      desc: "Running",
    },
    {
      name: "Adidas",
      price: 50,
      desc: "Trek",
    },
  ];

  const { cartItems, addToCart } = useCart();

  const handleAddToCart = (item, quantity) => {
    addToCart(item, quantity);
  };

  return (
    <>
      <Center>
        <Heading className="Heading" m={"10"}>
          Shoe Shop
        </Heading>
      </Center>
      <Flex justify="center" align="center" m={10}>
        <Grid
          templateColumns="repeat(4, 1fr)"
          gap={6}
          textAlign="center"
          width="80%"
        >
          <GridItem>Candy Name</GridItem>
          <GridItem>Price</GridItem>
          <GridItem>Desc</GridItem>
          <GridItem>ADD</GridItem>
        </Grid>
      </Flex>
      {candies.map((i) => (
        <Items
          key={i.name}
          name={i.name}
          price={i.price}
          desc={i.desc}
          addToCart={handleAddToCart}
        />
      ))}
      <Cart cartItems={cartItems} />
      <AddCandy />
    </>
  );
};

export default App;
