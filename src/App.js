import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Register from "./Pages/Register";
import Signup from './Pages/Signup'; // Ensure this import is correct
import Login from "./Pages/Login";
import Profile from "./Pages/Profile";
import Chatbot from './Components/Chatbot';
import PaymentGateway from './Components/PaymentGateway'
import Location from "./Components/Location";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/register" element={<Register />} />
          <Route path="/payment-gateway" element={<PaymentGateway />} />
          <Route path="/location" element={<Location />} />
        </Routes>
        <Chatbot />
      </ChakraProvider>
    </div>
  );
}

export default App;
