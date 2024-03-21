"use client"
import React, { useState } from 'react';

const Home = () => {
  // Dummy data for current charities (replace with actual data)
  const [currentCharities, setCurrentCharities] = useState([
    { id: 1, name: "Charity 1" },
    { id: 2, name: "Charity 2" },
    { id: 3, name: "Charity 3" }
  ]);

  // Function to handle navigation to create charity page
  const navigateToCreateCharity = () => {
    // Redirect to the create charity page
    window.location.href = '/CreateCharity';
  };

  // Function to handle navigation to edit charity profile page
  const navigateToEditCharityProfile = (charityId) => {
    // Redirect to the edit charity profile page for the specified charity
    window.location.href = `/EditCharityProfile?id=${charityId}`;
  };

  // Function to handle deletion of a charity
  const deleteCharity = async (charityId) => {
    try {
      const response = await fetch(`/api/deleteCharity?id=${charityId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        // Remove the deleted charity from the list
        setCurrentCharities(prevCharities =>
          prevCharities.filter(charity => charity.id !== charityId)
        );
        console.log('Charity deleted');
      } else {
        console.error('Error deleting charity');
      }
    } catch (error) {
      console.error('Error deleting charity:', error);
    }
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-semibold mb-4">Current Charities</h1>
      
      {/* List of current charities */}
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {currentCharities.map(charity => (
          <li key={charity.id} className="bg-gray-100 p-4 rounded-md">
            <p>{charity.name}</p>
            {/* Edit and delete buttons */}
            <div className="mt-2 flex justify-between">
              <button onClick={() => navigateToEditCharityProfile(charity.id)} className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md mr-2">
                Edit
              </button>
              <button onClick={() => deleteCharity(charity.id)} className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md">
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>

      {/* Add new charity button */}
      <div className="mt-8">
        <button onClick={navigateToCreateCharity} className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md">
          Add New Charity
        </button>
      </div>
    </div>
  );
};

export default Home;
