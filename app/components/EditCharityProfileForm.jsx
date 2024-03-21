"use client"
import { useState } from 'react';
import { Textarea, Button } from '@nextui-org/react';

const EditCharityProfileForm = () => {
  const [charityData, setCharityData] = useState({
    charityName: '',
    charityDescription: '',
    charityLocation: '',
    charityWebsite: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCharityData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleUpdateCharity = async () => {
    try {
      const response = await fetch('@/api/updateCharityRoute', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(charityData),
      });

      if (response.ok) {
        const updatedCharity = await response.json();
        console.log('Charity updated:', updatedCharity);
      } else {
        console.error('Error updating charity');
      }
    } catch (error) {
      console.error('Error updating charity:', error);
    }
  };

  return (
    <>
      <div className="flex flex-col gap-2 p-2 m-5 border rounded-md">
        <div className="justify-center">
          <h1>
            <center>Edit Information</center>
          </h1>
          <br />
          <Textarea
            className="flex w-full flex-wrap md:flex-nowrap gap-4 p-2 m-5 max-w-xl"
            label="Name"
            placeholder="Enter your Charity here"
            name="charityName"
            value={charityData.charityName}
            onChange={handleChange}
          />
          <br />
          <Textarea
            className="flex flex-col gap-2 p-2 m-5 max-w-xl"
            label="Description"
            placeholder="Enter your description here"
            name="charityDescription"
            value={charityData.charityDescription}
            onChange={handleChange}
          />
          <br />
          <Textarea
            className="flex flex-col gap-2 p-2 m-5 max-w-xl mb-6"
            label="Location"
            placeholder="Enter charity location here"
            name="charityLocation"
            value={charityData.charityLocation}
            onChange={handleChange}
          />
          <br />
          <Textarea
            className="flex flex-col gap-2 p-2 m-5 max-w-xl"
            label="Website"
            placeholder="Enter charity website here"
            name="charityWebsite"
            value={charityData.charityWebsite}
            onChange={handleChange}
          />
          <br />
          <Button
            className="flex flex-col gap-2 p-2 m-5 max-w-x text-foreground border-default-300"
            color="primary"
            size="md"
            onClick={handleUpdateCharity}
          >
            Update
          </Button>
        </div>
      </div>
    </>
  );
};

export default EditCharityProfileForm;
