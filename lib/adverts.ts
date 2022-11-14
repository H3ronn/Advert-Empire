import { PrismaClient } from '@prisma/client';
import { items } from '../data/items';

// export const getAllItemsId = () => items.map((item) => item.id);
const prisma = new PrismaClient();

export const getAdvertsPaths = async () => {
  const adverts = await prisma.advert.findMany();

  return adverts.map((item) => ({
    params: {
      id: item.id,
    },
  }));
};

export const getAdvertById = async (id: string) => {
  const advert = await prisma.advert.findUnique({
    where: {
      id,
    },
  });

  // const item = items.find((item) => item.id === id);
  return advert;
};
