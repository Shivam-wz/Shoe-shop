// Items.js

import { Flex, Button, Grid, GridItem } from "@chakra-ui/react";
import React, { useState } from "react";
import { useCart } from "./CartContext";
import "../App.css";

const Items = ({ name, price, desc }) => {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const buy = () => {
    addToCart({ name, price }, quantity);
    setQuantity(1);
  };

  return (
    <Flex className="Items">
      <Grid templateColumns="repeat(5, 1fr)">
        <GridItem>{name}</GridItem>
        <GridItem>{price} rs</GridItem>
        <GridItem>{desc}</GridItem>
        <Grid templateColumns="repeat(4, 1fr)" gap={5}>
          {[1, 2, 3].map((num) => (
            <GridItem key={num}>
              <Button onClick={() => setQuantity(num)}>Add {num}</Button>
            </GridItem>
          ))}
          <GridItem>
            <Button onClick={buy}>Buy</Button>
          </GridItem>
        </Grid>
      </Grid>
    </Flex>
  );
};

export default Items;
