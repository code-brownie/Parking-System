// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// import axios from 'axios';
// import {
//   Box,
//   Button,
//   Container,
//   Input,
//   VStack,
//   Heading,
//   useToast,
//   List,
//   ListItem,
//   ListIcon,
// } from '@chakra-ui/react';
// import { CheckCircleIcon, WarningIcon } from '@chakra-ui/icons';

// function Location() {
//   const navigate = useNavigate();
//   const [location, setLocation] = useState('');
//   const [latitude, setLatitude] = useState('');
//   const [longitude, setLongitude] = useState('');
//   const [nearbyLocations, setNearbyLocations] = useState([]);
//   const toast = useToast();

//   const handleLocationChange = (event) => {
//     setLocation(event.target.value);
//   };

//   const showSuccessToast = (message) => {
//     toast({
//       title: message,
//       status: 'success',
//       duration: 3000,
//       isClosable: true,
//       position: 'top',
//       render: () => (
//         <Box color="white" p={3} bg="green.400">
//           <CheckCircleIcon />
//           {message}
//         </Box>
//       ),
//     });
//   };

//   const [r,setR]=useState()

//   function getRandomNumber() {
//     // Generate a random number between 0 (inclusive) and 51 (exclusive)
//     let rand=Math.floor(Math.random() * 51);
//     setR(rand)
//     return rand

//   }

//   const showErrorToast = (message) => {
//     toast({
//       title: message,
//       status: 'error',
//       duration: 3000,
//       isClosable: true,
//       position: 'top',
//       render: () => (
//         <Box color="white" p={3} bg="red.400">
//           <WarningIcon />
//           {message}
//         </Box>
//       ),
//     });
//   };

//   const bookSlot = async (location) => {
//     try {
//       const data = {
//         Address: location.placeName,
//         // Generate a random number between 0 and 50
//         randomSlotNumber: Math.floor(Math.random() * 51),
//       };

//       const response = await axios.post('http://localhost:5000/getAddress', data);
//       const resData = await axios.post('http://localhost:5000/getPlace', data);

//       if (resData.status === 200) {
//         showSuccessToast(`Location sent successfully for slot booking for ${location.placeName}`);
//       } else {
//         showErrorToast("Error in sending Location")
//       }

//       if (response.status === 201) {
//         showSuccessToast(`Redirecting for slot booking for ${location.placeName}`);
//         navigate('/register');
//       } else {
//         showErrorToast("Error in slot booking please try again")
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const submitHandler = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.get('http://localhost:5000/location', {
//         params: { location },
//       });

//       if (response.status === 200) {
//         setLatitude(response.data.lat);
//         setLongitude(response.data.lon);
//         showSuccessToast('Location fetched successfully.');
//       } else {
//         console.error('Error:', response.data);
//         showErrorToast('Error fetching location.');
//       }
//     } catch (err) {
//       console.log(err.message);
//       showErrorToast('Error fetching location.');
//     }
//   };

//   const handleGetNearbyLocations = async () => {
//     const apiUrl = `https://atlas.mappls.com/api/places/nearby/json?keywords=vehicle parking&refLocation=${latitude},${longitude}&region=IND&sortBy=dist:asc`;
//     const bearerToken = '456da11a-2adc-4f7d-8318-f4a59bf00201'; // Replace with your actual Bearer token

//     try {
//       const response = await fetch('http://localhost:5000/nearby', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: `Bearer ${bearerToken}`,
//         },
//         body: JSON.stringify({ apiUrl }),
//       });

//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }

//       const data = await response.json();
//       setNearbyLocations(data.suggestedLocations);
//       showSuccessToast('Nearby locations fetched successfully.');
//     } catch (error) {
//       console.error('Error:', error);
//       showErrorToast('Error fetching nearby locations.');
//     }
//   };
//   return (
//     <div className=''>
//       <Container maxW="container.sm">
//         <Box p={4}>
//           <VStack spacing={4}>
//             <Heading>Parking Lot Locator</Heading>
//             <Input
//               type="text"
//               placeholder="Enter Location"
//               value={location}
//               onChange={handleLocationChange}
//             />
//             <Button colorScheme="teal" onClick={submitHandler}>
//               Fetch Location
//             </Button>
//             <Button colorScheme="blue" onClick={handleGetNearbyLocations}>
//               Get Nearby Street Parking
//             </Button>

//             {/* Display nearby locations */}
//             <List spacing={3}>
//               {nearbyLocations.map((location, index) => (
//                 <ListItem key={index}>
//                   <ListIcon as={CheckCircleIcon} color="green.500" />
//                   <strong>Name:</strong> {location.placeName}
//                   <br />
//                   <strong>Address:</strong> {location.placeAddress}
//                   <br />
//                   {/* Display the random slot number */}
                  
//                   <strong>{`Slots Available: ${getRandomNumber()}`}</strong>
//                   <Button
//                     colorScheme="teal"
//                     size="sm"
//                     onClick={() => bookSlot(location)}
//                     // Disable the button if the randomSlotNumber is zero
//                     isDisabled={r === 0}     
//                   >
//                     Book Slot
//                   </Button>
//                 </ListItem>
//               ))}
//             </List>
//           </VStack>
//         </Box>
//       </Container>
//     </div>
//   );
// }

// export default Location;



import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';
import {
  Box,
  Button,
  Container,
  Input,
  VStack,
  Heading,
  useToast,
  List,
  ListItem,
  ListIcon,
} from '@chakra-ui/react';
import { CheckCircleIcon, WarningIcon } from '@chakra-ui/icons';

function Location() {
  const navigate = useNavigate();
  const [location, setLocation] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [nearbyLocations, setNearbyLocations] = useState([]);
  const toast = useToast();

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const showSuccessToast = (message) => {
    toast({
      title: message,
      status: 'success',
      duration: 3000,
      isClosable: true,
      position: 'top',
      render: () => (
        <Box color="white" p={3} bg="green.400">
          <CheckCircleIcon />
          {message}
        </Box>
      ),
    });
  };

  function getRandomNumber() {
    // Generate a random number between 0 (inclusive) and 51 (exclusive)
    return Math.floor(Math.random() * 51);
    // return 0
  }

  const showErrorToast = (message) => {
    toast({
      title: message,
      status: 'error',
      duration: 3000,
      isClosable: true,
      position: 'top',
      render: () => (
        <Box color="white" p={3} bg="red.400">
          <WarningIcon />
          {message}
        </Box>
      ),
    });
  };

  const bookSlot = async (location) => {
    try {
      const data = {
        Address: location.placeName,
        // Generate a random number between 0 and 50
        randomSlotNumber: Math.floor(Math.random() * 51),
      };

      const response = await axios.post('http://localhost:5000/getAddress', data);
      const resData = await axios.post('http://localhost:5000/getPlace', data);

      if (resData.status === 200) {
        showSuccessToast(`Location sent successfully for slot booking for ${location.placeName}`);
      } else {
        showErrorToast("Error in sending Location")
      }

      if (response.status === 201) {
        showSuccessToast(`Redirecting for slot booking for ${location.placeName}`);
        navigate('/register');
      } else {
        showErrorToast("Error in slot booking please try again")
      }
    } catch (error) {
      console.error(error);
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get('http://localhost:5000/location', {
        params: { location },
      });

      if (response.status === 200) {
        setLatitude(response.data.lat);
        setLongitude(response.data.lon);
        showSuccessToast('Location fetched successfully.');
      } else {
        console.error('Error:', response.data);
        showErrorToast('Error fetching location.');
      }
    } catch (err) {
      console.log(err.message);
      showErrorToast('Error fetching location.');
    }
  };

  const handleGetNearbyLocations = async () => {
    const apiUrl = `https://atlas.mappls.com/api/places/nearby/json?keywords=vehicle parking&refLocation=${latitude},${longitude}&region=IND&sortBy=dist:asc`;
    const bearerToken = '1e359681-083c-408b-859c-c7709b99a43d'; // Replace with your actual Bearer token

    try {
      const response = await fetch('http://localhost:5000/nearby', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${bearerToken}`,
        },
        body: JSON.stringify({ apiUrl }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setNearbyLocations(data.suggestedLocations);
      showSuccessToast('Nearby locations fetched successfully.');
    } catch (error) {
      console.error('Error:', error);
      showErrorToast('Error fetching nearby locations.');
    }
  };
  return (
    <div className=''>
      <Container maxW="container.sm">
        <Box p={4}>
          <VStack spacing={4}>
            <Heading>Parking Lot Locator</Heading>
            <Input
              type="text"
              placeholder="Enter Location"
              value={location}
              onChange={handleLocationChange}
            />
            <Button colorScheme="teal" onClick={submitHandler}>
              Fetch Location
            </Button>
            <Button colorScheme="blue" onClick={handleGetNearbyLocations}>
              Get Nearby Street Parking
            </Button>

            {/* Display nearby locations */}
            <List spacing={3}>
              {nearbyLocations.map((location, index) => (
                <ListItem key={index}>
                  <ListIcon as={CheckCircleIcon} color="green.500" />
                  <strong>Name:</strong> {location.placeName}
                  <br />
                  <strong>Address:</strong> {location.placeAddress}
                  <br />
                  {/* Display the random slot number */}
                  {Number(`${getRandomNumber()}`)?
                  <Button
                    colorScheme="teal"
                    size="sm"
                    onClick={() => bookSlot(location)}
                    // Disable the button if the randomSlotNumber is zero
                    // isDisabled={getRandomNumber() === 0}     
                  >
                    Book Slot
                  </Button>:<Button
                    colorScheme="red"
                    size="sm"
                    onClick={() => console.log("dont book")}
                    // Disable the button if the randomSlotNumber is zero
                    // isDisabled={getRandomNumber() === 0}     
                  >
                    Not Available
                  </Button>}
                </ListItem>
              ))}
            </List>
          </VStack>
        </Box>
      </Container>
    </div>
  );
}

export default Location;
