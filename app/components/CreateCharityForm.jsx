"use client"
import React, { useState } from 'react';
import { Card, CardHeader, CardBody, Button, Textarea, Input } from "@nextui-org/react";

const CreateCharity = () => {
  const [charityData, setCharityData] = useState({
    charityName: '',
    charityDescription: '',
    charityLocation: '',
    charityWebsite: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCharityData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const createCharity = async (charityData) => {
    try {
      console.log('Charity data:', charityData);
      const response = await fetch('../api/createCharityRoute', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(charityData),
      });
  
      if (response.ok) {
        const data = await response.json();
        console.log('Charity created:', data);
        window.location.href = '/CharityHomePage';
      } else {
        console.error('Error creating charity');
      }
    } catch (error) {
      console.error('Error creating charity:', error);
    }
  };
  
  return (
    <Card className="max-w-md mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
      <CardHeader>
        <h1 className="text-center text-3xl font-bold mb-6">Create Charity</h1>
      </CardHeader>
      <CardBody>
        <Input
          type="text"
          name="charityName"
          value={charityData.charityName}
          onChange={handleChange}
          label="Name"
          placeholder="Enter your Charity name"
          className="mb-4"
        />
        <Textarea
          name="charityDescription"
          value={charityData.charityDescription}
          onChange={handleChange}
          label="Description"
          placeholder="Enter your description here"
          className="mb-4"
          rows={4}
        />
        <Input
          type="text"
          name="charityLocation"
          value={charityData.charityLocation}
          onChange={handleChange}
          label="Location"
          placeholder="Enter charity location here"
          className="mb-4"
        />
        <Input
          type="url"
          name="charityWebsite"
          value={charityData.charityWebsite}
          onChange={handleChange}
          label="Website"
          placeholder="Enter website URL here"
          className="mb-6"
        />
        <Button
          color="primary"
          size="large"
          onClick={() => createCharity(charityData)}
          className="w-full"
        >
          Create Charity
        </Button>
      </CardBody>
    </Card>
  );
}

export default CreateCharity;
