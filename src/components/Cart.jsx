// Cart.js

import { Flex, Button, useDisclosure, List, ListItem } from "@chakra-ui/react";
import React from "react";
import { MdShoppingCart } from "react-icons/md";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { useCart } from "./CartContext";

const Cart = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const { cartItems, addToCart } = useCart();

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const increaseQuantity = (item) => {
    addToCart(item, 1);
  };

  const decreaseQuantity = (item) => {
    if (item.quantity > 1) {
      addToCart(item, -1);
    }
  };

  const removeAllItems = () => {
    // Set the quantity to 0 for each item in the cart
    cartItems.forEach((item) => addToCart(item, -item.quantity));
  };

  return (
    <>
      <Flex className="Cart">
        <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
          <MdShoppingCart style={{ fontSize: "2em" }} />
          <sup>{cartItems.length}</sup>
        </Button>
      </Flex>

      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Your Cart</DrawerHeader>
          <DrawerBody className="dbody">
            <List m={"10"} margin={"10"}>
              {cartItems.map((item, index) => (
                <ListItem
                  justifyContent={"flex-start"}
                  justifyItems={"flex-start"}
                  m={"10"}
                  key={index}
                >
                  {item.name} - {item.quantity} x {item.price} rs
                  <Button ml={4} onClick={() => increaseQuantity(item)}>
                    +
                  </Button>
                  <Button ml={2} onClick={() => decreaseQuantity(item)}>
                    -
                  </Button>
                </ListItem>
              ))}
            </List>
            Total: {calculateTotal()} rs
          </DrawerBody>
          <DrawerFooter>
            <Button colorScheme="red" onClick={removeAllItems}>
              Remove All
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Cart;
