import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { CartProvider } from "./components/CartContext.jsx";
import { ChakraProvider, theme } from "@chakra-ui/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <CartProvider>
        <App />
      </CartProvider>
    </ChakraProvider>
  </React.StrictMode>
);
