import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient({log: ["query"]})

async function main () {
  const charity = await prisma.charity.create({data: {
    charityName: data.charityName,
    charityDescription: data.charityDescription,
    charityLocation: data.charityLocation,
    charityWebsite: data.charityWebsite
  }})
  console.log(charity)
}

main ()
.catch (e => {
  console.error(e.message)
})
.finally(async () => {
  await prisma.$disconnect()
})
export default main