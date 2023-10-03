import React, { useState } from 'react';
import { useToast } from "@chakra-ui/react";
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import { Button } from "@chakra-ui/react"; // Import Chakra UI Button

export default function Form() {
  const navigate = useNavigate();
  const toast = useToast();
  const [formData, setFormData] = useState({
    vehicleNumber: '',
    email: '',
  });

  const [isLoading, setIsLoading] = useState(false); // Define isLoading state

  const handleSubmit = async () => {
    try {
      console.log('Submitting form...');
      setIsLoading(true); // Set isLoading to true when submitting

      const res = await axios.post('http://localhost:5000/allocate-slot', formData);
      console.log('Response:', res);

      // Send a POST request to your backend endpoint
      const response = await axios.post('http://localhost:5000/slot-booking', formData);

      // Handle the response if needed
      if (response.status === 201) {
        // Success: Show a Chakra UI toast with a success message
        toast({
          title: "Success!",
          description: "Form data saved successfully.",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
        navigate('/payment-gateway');
      } else {
        // Handle any other response status codes or errors
        toast({
          title: "Error",
          description: "An error occurred while saving the data.",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      }
    } catch (error) {
      // Handle any network or request-related errors
      console.error(error);

      // Show an error message to the user if needed
      toast({
        title: "Error",
        description: "An error occurred while making the request.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setIsLoading(false); // Set isLoading to false when the operation is done
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className='bg-blue-200 w-screen h-screen flex items-center justify-center'>
      <div className='w-[400px] h-[630px] flex items-center justify-center rounded-xl'>
        <div className='flex flex-col mb-8 gap-9 mt-9'>
          <div className='text-center'>
            <h1 className="text-3xl block text-blue-600 font-bold">Registration</h1>
          </div>
          <div className='flex gap-2 mt-1 bg-white rounded-xl h-12 p-2'>
            <img src="https://img.icons8.com/?size=40&id=41632&format=png" alt="name" className="w-8 h-8 rounded-xl" />
            <input
              type="text"
              name="vehicleNumber"
              placeholder='Vehicle number'
              value={formData.vehicleNumber}
              onChange={handleInputChange}
              required
              className='w-80 h-4 rounded-xl  p-4 border-none outline-none'
            />
          </div>
          <div className='flex gap-2 mt-1 bg-white rounded-xl h-12 p-2'>
            <img src="https://img.icons8.com/email" alt="name" className="w-8 h-8 rounded-xl" />
            <input
              type="email"
              name="email"
              placeholder='Email'
              value={formData.email}
              onChange={handleInputChange}
              required
              className='w-80 h-4 rounded-xl  p-4 border-none outline-none'
            />
          </div>
          <Button
            onClick={handleSubmit}
            colorScheme="blue"
            isLoading={isLoading}
            loadingText="Allocating..."
            className="relative cursor-pointer px-6 py-1 text-xl font-semibold text-white border-2 border-blue-800 bg-blue-800 rounded-full transition-transform duration-300 ease-in-out overflow-hidden group w-60 h-12"
          >
            Allocate Parking Spot
          </Button>
        </div>
      </div>
    </div>
  );
}
