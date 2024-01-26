// AddCandy.js

import React, { useState } from "react";
import { Flex, Input, Button, FormControl, FormLabel } from "@chakra-ui/react";
import { useCart } from "./CartContext";
import "../App.css";

const AddCandy = () => {
  const [newCandy, setNewCandy] = useState({
    name: "",
    price: 0,
    desc: "",
  });

  const { addToCart } = useCart();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCandy((prevCandy) => ({
      ...prevCandy,
      [name]: value,
    }));
  };

  const addNewCandy = () => {
    // Validate that the candy has a name and a positive price before adding
    if (newCandy.name.trim() !== "" && newCandy.price > 0) {
      addToCart(newCandy, 1);
      // Reset the form after adding the candy
      setNewCandy({
        name: "",
        price: 0,
        desc: "",
      });
    } else {
      // Handle validation error
      alert("Please enter valid candy details.");
    }
  };

  return (
    <Flex className="AddCandy" alignContent={"center"} alignItems={"center"}>
      <FormControl>
        <FormLabel>Name</FormLabel>
        <Input
          type="text"
          name="name"
          value={newCandy.name}
          onChange={handleInputChange}
        />
      </FormControl>

      <FormControl>
        <FormLabel>Price</FormLabel>
        <Input
          type="number"
          name="price"
          value={newCandy.price}
          onChange={handleInputChange}
        />
      </FormControl>

      <FormControl>
        <FormLabel>Description</FormLabel>
        <Input
          type="text"
          name="desc"
          value={newCandy.desc}
          onChange={handleInputChange}
        />
      </FormControl>

      <Button mt={4} width={"80"} colorScheme="teal" onClick={addNewCandy}>
        Add Candy
      </Button>
    </Flex>
  );
};

export default AddCandy;
