"use client"
import React, { useState, useEffect } from 'react';

const AdminHome = () => {
  const [currentUsers, setCurrentUsers] = useState([]);

  useEffect(() => {
    // Fetch users from your backend API
    const fetchUsers = async () => {
      try {
        const response = await fetch('../api/getUsers');
        if (response.ok) {
          const data = await response.json();
          setCurrentUsers(data); // Update state with fetched users
        } else {
          console.error('Failed to fetch users');
        }
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers(); // Call the fetchUsers function when component mounts
  }, []); // Empty dependency array ensures useEffect only runs once after initial render

  // Function to handle navigation to add user page
  const navigateToAddUser = () => {
    window.location.href = '/CreateAdmin';
  };

  // Function to handle navigation to edit user page
  const navigateToEditUser = (userId, userData) => {
    if (!userData) {
      console.error('User data not available');
      return;
    }
    const queryString = Object.keys(userData).map(key => `${key}=${encodeURIComponent(userData[key])}`).join('&');
    window.location.href = `/EditAdminProfile?id=${userId}&${queryString}`;
  };
  

  // Function to handle deletion of a user
  const deleteUser = async (userId) => {
    try {
      const response = await fetch(`../api/deleteUserRoute?id=${userId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setCurrentUsers(prevUsers =>
          prevUsers.filter(user => user.id !== userId)
        );
        console.log('User deleted');
      } else {
        console.error('Error deleting user');
      }
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-semibold mb-4">Current Users</h1>
      
      <div className="overflow-x-auto">
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="border px-4 py-2">ID</th>
              <th className="border px-4 py-2">First Name</th>
              <th className="border px-4 py-2">Last Name</th>
              <th className="border px-4 py-2">Email</th>
              <th className="border px-4 py-2">Role</th>
              <th className="border px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentUsers.map(user => (
              <tr key={user.id}>
                <td className="border px-4 py-2">{user.id}</td>
                <td className="border px-4 py-2">{user.firstName}</td>
                <td className="border px-4 py-2">{user.lastName}</td>
                <td className="border px-4 py-2">{user.email}</td>
                <td className="border px-4 py-2">{user.role}</td>
                <td className="border px-4 py-2">
                  <button onClick={() => navigateToEditUser(user.id, user)} className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md mr-2">
                    Edit
                  </button>
                  <button onClick={() => deleteUser(user.id)} className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-8">
        <button onClick={navigateToAddUser} className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md">
          Add New User
        </button>
      </div>
    </div>
  );
};

export default AdminHome;
