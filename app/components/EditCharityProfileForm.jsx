"use client"
import { useState, useEffect } from 'react';
import { Textarea, Button } from '@nextui-org/react';

const EditCharityProfileForm = () => {
  const [charityData, setCharityData] = useState({
    id: '',
    charityName: '',
    charityDescription: '',
    charityLocation: '',
    charityWebsite: '',
  });

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const initialData = {
      id: params.get('id') || '',
      charityName: params.get('charityName') || '',
      charityDescription: params.get('charityDescription') || '',
      charityLocation: params.get('charityLocation') || '',
      charityWebsite: params.get('charityWebsite') || '',
    };
    setCharityData(initialData);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCharityData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleUpdateCharity = async () => {
    try {
      console.log(charityData);
      const response = await fetch('../api/updateCharityRoute', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(charityData),
      });

      if (response.ok) {
        const updatedCharity = await response.json();
        console.log('Charity updated:', updatedCharity);
        window.location.href = '/CharityHomePage';
      } else {
        console.error('Error updating charity');
      }
    } catch (error) {
      console.error('Error updating charity:', error);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center mb-4">Edit Information</h1>
        <div className="space-y-4">
          <Textarea
            label="Name"
            placeholder="Enter your Charity here"
            name="charityName"
            value={charityData.charityName}
            onChange={handleChange}
          />
          <Textarea
            label="Description"
            placeholder="Enter your description here"
            name="charityDescription"
            value={charityData.charityDescription}
            onChange={handleChange}
            rows={4}
          />
          <Textarea
            label="Location"
            placeholder="Enter charity location here"
            name="charityLocation"
            value={charityData.charityLocation}
            onChange={handleChange}
          />
          <Textarea
            label="Website"
            placeholder="Enter charity website here"
            name="charityWebsite"
            value={charityData.charityWebsite}
            onChange={handleChange}
          />
        </div>
        <Button
          color="primary"
          size="lg"
          onClick={handleUpdateCharity}
          className="w-full mt-6"
        >
          Update
        </Button>
      </div>
    </div>
  );
};

export default EditCharityProfileForm;
