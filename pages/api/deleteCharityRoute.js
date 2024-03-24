// Import PrismaClient
import { PrismaClient } from '@prisma/client';

// Instantiate PrismaClient
const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'DELETE') {
    const { id } = req.query; // Charity ID from URL query parameters

    try {
      await prisma.charity.delete({
        where: { id },
      });

      res.status(200).json({ message: 'Charity deleted successfully' });
    } catch (error) {
      console.error('Error deleting charity:', error);
      res.status(500).json({ error: 'Failed to delete charity' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
