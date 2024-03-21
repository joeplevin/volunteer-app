"use client"
import React, { useState } from 'react';
import { Card, CardHeader, CardBody, Button, Textarea } from "@nextui-org/react";

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
      const response = await fetch('../api/Create/route', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(charityData),
      });
  
      if (response.ok) {
        const data = await response.json();
        console.log('Charity created:', data);
      } else {
        console.error('Error creating charity');
      }
    } catch (error) {
      console.error('Error creating charity:', error);
    }
  };
  
  // Call createCharity function with charity data from form input
  

  return (
    <Card className="flex flex-col gap-2 p-2 m-5 border rounded-md">
      <CardHeader className="justify-center">
        <CardBody>
          <h1><center>Create Charity</center></h1>
          <br />
          <Textarea
            className="flex w-full flex-wrap md:flex-nowrap gap-4 p-2 m-5 max-w-xl"
            name="charityName"
            value={charityData.charityName}
            onChange={handleChange}
            label="Name"
            placeholder="Enter your Charity here"
          />
          <br />
          <Textarea
            className="flex flex-col gap-2 p-2 m-5 max-w-xl"
            name="charityDescription"
            value={charityData.charityDescription}
            onChange={handleChange}
            label="Description"
            placeholder="Enter your description here"
          />
          <br />
          <Textarea
            className="flex flex-col gap-2 p-2 m-5 max-w-xl mb-6"
            name="charityLocation"
            value={charityData.charityLocation}
            onChange={handleChange}
            label="Location"
            placeholder="Enter charity location here"
          />
          <br />
          <Textarea
            className="flex flex-col gap-2 p-2 m-5 max-w-xl"
            name="charityWebsite"
            value={charityData.charityWebsite}
            onChange={handleChange}
            label="Website"
            placeholder="Enter website URL here"
          />
          <br />
          <br />
          <Button
            className={"flex flex-col gap-2 p-2 m-5 max-w-x text-foreground border-default-300"}
            color="primary"
            size="md"
            onClick={() => createCharity (charityData)}
          >
            Create Opportunity
          </Button>
        </CardBody>
      </CardHeader>
    </Card>
  );
}

export default CreateCharity;
