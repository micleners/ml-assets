import { db } from '../db';
import { collection, doc, getDocs, writeBatch } from 'firebase/firestore/lite';
import { Pizza } from '@/types/Pizza';
import { pizzaMenu } from './seedData';

const pizzasCollection = collection(db, 'pizzas');

export const seedPizzas = async () => {
  const pizzas = pizzaMenu;
  if (!pizzas || pizzas.length === 0) {
    return { error: 'No pizzas to seed' };
  }

  const pizzasSnapshot = await getDocs(pizzasCollection);
  const existingIds = new Set(pizzasSnapshot.docs.map(doc => doc.id));

  const alreadySeeded = pizzas.some(pizza => existingIds.has(pizza.id));
  if (alreadySeeded) {
    return { error: 'Database already seeded with seed data.' };
  }

  try {
    const batch = writeBatch(db);

    pizzas.forEach((item) => {
      const docRef = doc(pizzasCollection, item.id);
      batch.set(docRef, {
        ...item,
        id: docRef.id,
      });
    });

    await batch.commit();

    return {
      message: 'Database seeded successfully',
      documentsAdded: pizzas.length,
    };
  } catch (error) {
    return { error: 'Failed to seed database' };
  }
};

export const dropPizzas = async () => {
  const pizzasSnapshot = await getDocs(pizzasCollection);
  const batch = writeBatch(db);

  pizzasSnapshot.docs.forEach((docSnap) => {
    batch.delete(docSnap.ref);
  });

  await batch.commit();

  return { message: 'All pizzas deleted successfully', documentsDeleted: pizzasSnapshot.size };
}

export const getPizzas = async () => {
  const pizzasSnapshot = await getDocs(pizzasCollection);
  const pizzas = pizzasSnapshot.docs.map((doc) => doc.data());
  return pizzas as Pizza[];
};
