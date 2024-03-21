

import prisma from '../../lib/prisma'; // Import Prisma client

export default async function handler(req, res) {
  if (req.method === 'PUT') {
    const { id } = req.query; // Charity ID from URL query parameters
    const { charityName, charityDescription, charityLocation, charityWebsite } = req.body;

    try {
      const updatedCharity = await prisma.charity.update({
        where: { id },
        data: {
          charityName,
          charityDescription,
          charityLocation,
          charityWebsite,
        },
      });

      res.status(200).json(updatedCharity);
    } catch (error) {
      console.error('Error updating charity:', error);
      res.status(500).json({ error: 'Failed to update charity' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
