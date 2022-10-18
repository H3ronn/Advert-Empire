import { items } from '../data/items';

// export const getAllItemsId = () => items.map((item) => item.id);

export const getItemsPaths = () =>
  items.map((item) => ({
    params: {
      id: item.id,
    },
  }));

export const getItemById = (id: string) => {
  const item = items.find((item) => item.id === id);
  return item;
};
