import React, { useState, useEffect } from 'react';
import ChatBot from 'react-simple-chatbot';
import { Button, Segment } from 'semantic-ui-react';
import "../Styles/button.css";

function App() {
  const [showChatBot, setShowChatBot] = useState(false);

  const toggleChatBot = () => {
    setShowChatBot(!showChatBot);
  };

  useEffect(() => {
    setShowChatBot(false);
  }, []);

  const steps = [
    {
      id: 'Greet',
      message: 'Hello, Welcome to Parknxt',
      trigger: 'Ask Name'
    },
    {
      id: 'Ask Name',
      message: 'Please enter your name',
      trigger: 'waiting1'
    },
    {
      id: 'waiting1',
      user: true,
      trigger: 'Name'
    },
    {
      id: 'Name',
      message: 'Hello {previousValue}, may I know your issue?',
      trigger: 'issues'
    },
    {
      id: 'issues',
      options: [
        {
          value: 'Sign up',
          label: 'Sign up',
          trigger: 'Sign up'
        },
        {
          value: 'Login',
          label: 'Login',
          trigger: 'Login'
        },
        {
          value: 'Motive',
          label: 'Motive',
          trigger: 'Motive'
        },
        {
          value: 'Desired Parking spot',
          label: 'Desired Parking spot',
          trigger: 'Desired Parking spot'
        },
        {
          value: 'Payment failed',
          label: 'Payment failed',
          trigger: 'Payment failed'
        },
        {
          value: 'Dynamic Pricing',
          label: 'Dynamic Pricing',
          trigger: 'Dynamic Pricing'
        },
        {
          value: 'None',
          label: 'None',
          trigger: 'None'
        },
      ]
    },
    {
      id: 'Sign up',
      message: "The sign-up option at the top-right corner of your homepage is a common and effective design choice.",
      trigger: 'Name'
    },
    {
      id: 'Login',
      message: "1) You can click on the Sign up then, it will click on the login Click on it to login    2)Second way you can directly click on the login button present on our home page",
      trigger: 'Name'
    },
    {
      id: 'Motive',
      message: "The motive of Parknxt is to provide a smart and effective real-time management solution for street parking. Their aim is to make parking more convenient and efficient for users by offering features such as easy initiation of parking requests, a user-friendly map interface to find available parking spots, dynamic pricing policies based on arrival time and duration, and efficient allocation of parking spaces in real-time. Parknxt's goal is to streamline the parking experience, enhance user convenience, and improve overall street parking management.",
      trigger: 'Name'
    },
    {
      id: 'Desired Parking spot',
      message: "Users should start by creating an account on the Parknxt platform or logging in if they already have an account.Ensure a straightforward registration process with minimal required information to encourage users to sign up quickly. Provide a user-friendly map interface that displays available parking spots in real-time. Allow users to enter their destination address or use GPS to pinpoint their location.Display parking spots with relevant details such as location, availability, pricing, and user reviews.",
      trigger: 'Name'
    },
    {
      id: 'Payment failed',
      message: "You try again , if the amount deducted from your side then it will get refunded to you within a span of 2-3 days",
      trigger: 'Name'
    },
    {
      id: 'Dynamic Pricing',
      message: '-The code defines a JavaScript function called calculatePrice that takes an inputHours parameter.- It obtains the current time and hour using new Date() and getHours(). - It then checks the current hour to determine the pricing: - If the current hour is between 7 AM and 3 PM (school hours), it sets the price as inputHours * 5 and the reason as School hours - Higher demand. If the current hour is between 3 PM and 7 PM (office hours), it sets the price as inputHours * 8 and the reason as "Office hours - Peak demand. If the current hour is between 10 PM and 7 AM (night hours), it sets the price as inputHours * 6 and the reason as "Night hours - Limited availability.  If its a weekend (Saturday or Sunday), it sets the price as inputHours * 7 and the reason as Weekend Increased pricing.  For any other time, it sets the price as inputHours *4 and the reason as Regular hours.',
      trigger: 'Name'
    },
    {
      id: 'None',
      message: "Thank you , if you have any issue other than those which are mentioned above than you can contact Email:team.morph.group@gmail.com and Contact no.8957600166",
      end: true
    },
  ];

  return (
    <>
      <div>
        {showChatBot && (
          <Segment
            style={{
              position: 'fixed',
              bottom: '28px',
              left: '150px',
              zIndex: '1000',
            }}
          >
            <ChatBot steps={steps} />
          </Segment>

        )}

        <Button
          onClick={toggleChatBot}
          className="custom-button"
          style={{
            position: 'fixed',
            bottom: '10px', // Adjust the distance from the bottom as needed
            left: '10px',
            zIndex: '1000',
          }}
        >
          {showChatBot ? 'Close' : 'Help?'}
        </Button>
      </div>
    </>
  );
}

export default function AppWithChatBot() {
  return <App />;
}
