
// Import PrismaClient
import { PrismaClient } from '@prisma/client';

// Instantiate PrismaClient
const prisma = new PrismaClient();

// Define the handler function for the createCharityRoute endpoint
export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { charityName, charityDescription, charityLocation, charityWebsite } = req.body;
      const newCharity = await prisma.charity.create({
        data: {
          charityName,
          charityDescription,
          charityLocation,
          charityWebsite,
        },
      });
      res.status(201).json(newCharity);
    } catch (error) {
      console.error('Error creating charity:', error);
      res.status(500).json({ error: 'Error creating charity' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
