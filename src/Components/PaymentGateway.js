import React, { useState } from 'react';
import {
  Box,
  Heading,
  Text,
  Stack,
  Button,
  Input,
  FormControl,
  FormLabel,
  ChakraProvider,
  CSSReset,
  extendTheme,
} from "@chakra-ui/react";
import Paypal from './Paypal';

const theme = extendTheme({
  // Add your custom theme configurations here
});

const PaymentGateway = () => {
  const [checkout, setCheckOut] = useState(false);
  const [hours, setHours] = useState();
  const [price, setPrice] = useState(0);
  const [reason, setReason] = useState('');

  const calculatePrice = (inputHours) => {
    const currentTime = new Date();
    const currentHour = currentTime.getHours();

    if (currentHour >= 7 && currentHour < 15) {
      setPrice(inputHours * 5); // Price per hour during school hours
      setReason('School hours - Higher demand');
    } else if (currentHour >= 15 && currentHour < 19) {
      setPrice(inputHours * 8); // Price per hour during office hours
      setReason('Office hours - Peak demand');
    } else if (currentHour >= 22 || (currentHour >= 0 && currentHour < 7)) {
      setPrice(inputHours * 6); // Price per hour during night hours
      setReason('Night hours - Limited availability');
    } else if (currentTime.getDay() === 0 || currentTime.getDay() === 6) {
      setPrice(inputHours * 7); // Price per hour during weekends
      setReason('Weekend - Increased pricing');
    } else {
      setPrice(inputHours * 4); // Default price per hour
      setReason('Regular hours');
    }
  };

  const handleInputChange = (e) => {
    const { value } = e.target;
    setHours(value);
    calculatePrice(value);
  };

  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <Box p={8}>
        <Heading as="h2" size="lg" mb={4}>
          Payment Gateway
        </Heading>
        <form>
          <FormControl>
            <FormLabel>Enter Parking Hours:</FormLabel>
            <Input
              type="number"
              value={hours}
              onChange={handleInputChange}
              min="0"
              placeholder="Enter hours"
            />
          </FormControl>
        </form>
        <Stack spacing={4} mt={4}>
          <Text>Dynamic Price: ₹{price}</Text>
          <Text>Reason for Price Surge: {reason}</Text>

          <Button colorScheme="blue" onClick={() => setCheckOut(true)}>
            Pay Now
          </Button>
          {checkout && <h2>Payment Options</h2>}
          {checkout && <Paypal />}
        </Stack>
      </Box>
    </ChakraProvider>
  );
};

export default PaymentGateway;




