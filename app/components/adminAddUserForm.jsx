"use client";
import React, { useState } from 'react';
import { Card, CardHeader, CardBody, Button, Input } from "@nextui-org/react";

const CreateAdminUser = () => {
  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    role: '',
    phone: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const createAdminUser = async (userData) => {
    try {
      console.log('User data:', userData);
      const response = await fetch('../api/createAdminUserRoute', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
  
      if (response.ok) {
        const data = await response.json();
        console.log('Admin user created:', data);
        window.location.href = '/AdminHomePage';
      } else {
        console.error('Error creating admin user');
      }
    } catch (error) {
      console.error('Error creating admin user:', error);
    }
  };
  
  return (
    <Card className="max-w-md mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
      <CardHeader>
        <h1 className="text-center text-3xl font-bold mb-6">Create Admin User</h1>
      </CardHeader>
      <CardBody>
        <Input
          type="text"
          name="firstName"
          value={userData.firstName}
          onChange={handleChange}
          label="First Name"
          placeholder="Enter first name"
          className="mb-4"
        />
        <Input
          type="text"
          name="lastName"
          value={userData.lastName}
          onChange={handleChange}
          label="Last Name"
          placeholder="Enter last name"
          className="mb-4"
        />
        <Input
          type="email"
          name="email"
          value={userData.email}
          onChange={handleChange}
          label="Email"
          placeholder="Enter email address"
          className="mb-4"
        />
        <Input
          type="password"
          name="password"
          value={userData.password}
          onChange={handleChange}
          label="Password"
          placeholder="Enter password"
          className="mb-4"
        />
        <Input
          type="text"
          name="role"
          value={userData.role}
          onChange={handleChange}
          label="Role"
          placeholder="Enter role (e.g., admin)"
          className="mb-6"
        />
        <Input
          type="text"
          name="phone"
          value={userData.phone}
          onChange={handleChange}
          label="phone"
          placeholder="Enter phone number"
          className="mb-6"
        />
        <Button
          color="primary"
          size="large"
          onClick={() => createAdminUser(userData)}
          className="w-full"
        >
          Create Admin User
        </Button>
      </CardBody>
    </Card>
  );
}

export default CreateAdminUser;
