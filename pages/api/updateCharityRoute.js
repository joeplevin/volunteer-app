import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'PUT') {
    const { id } = req.body; // Extract id from request body
    const { charityName, charityDescription, charityLocation, charityWebsite } = req.body;

    console.log('Received PUT request to update charity with id:', id);
    console.log('Request body:', req.body);

    try {
      const updatedCharity = await prisma.charity.update({
        where: { id }, // Use the extracted id in the where clause
        data: {
          charityName,
          charityDescription,
          charityLocation,
          charityWebsite,
        },
      });

      console.log('Updated charity:', updatedCharity);

      res.status(200).json(updatedCharity);
    } catch (error) {
      console.error('Error updating charity:', error);
      if (error.code === 'P2025') {
        res.status(404).json({ error: 'Charity not found' });
      } else {
        res.status(500).json({ error: 'Failed to update charity' });
      }
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
