import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();


//create function
async function createCharity(charityData) {
    try {
        console.log('Charity data:', charityData);
      const newCharity = await prisma.charity.create({
        data: charityData,
      });
      console.log('New charity created:', newCharity);
      return newCharity;
    } catch (error) {
      console.error('Error creating charity:', error);
      throw error;
    }
  }
  

//update function
async function updateCharity(charityId, updatedData) {
    try {
      const updatedCharity = await prisma.charity.update({
        where: { id: charityId },
        data: updatedData,
      });
      console.log('Charity updated:', updatedCharity);
      return updatedCharity;
    } catch (error) {
      console.error('Error updating charity:', error);
      throw error;
    }
}
  

//delete function
async function deleteCharity(charityId) {
    try {
      await prisma.charity.delete({
        where: { id: charityId },
      });
      console.log('Charity deleted');
    } catch (error) {
      console.error('Error deleting charity:', error);
      throw error;
    }
  }
