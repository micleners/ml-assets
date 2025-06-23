import { db } from '../db';
import { collection, doc, getDocs, writeBatch } from 'firebase/firestore/lite';
import { Asset } from '@/types/Asset';
import assets from './assets.json';

const assetsCollection = collection(db, 'assets');

export const seedAssets = async () => {
  if (!assets || assets.length === 0) {
    return { error: 'No assets to seed' };
  }

  const assetsSnapshot = await getDocs(assetsCollection);
  const existingIds = new Set(assetsSnapshot.docs.map(doc => doc.id));

  const alreadySeeded = assets.some(asset => existingIds.has(asset.assetId));
  if (alreadySeeded) {
    return { error: 'Database already seeded with seed data.' };
  }

  try {
    const batch = writeBatch(db);

    assets.forEach((item) => {
      const docRef = doc(assetsCollection, item.assetId);
      batch.set(docRef, {
        ...item,
        assetId: docRef.id,
      });
    });

    await batch.commit();

    return {
      message: 'Database seeded successfully',
      documentsAdded: assets.length,
    };
  } catch (error) {
    return { error: 'Failed to seed database' };
  }
};

export const dropAssets = async () => {
  const assetsSnapshot = await getDocs(assetsCollection);
  const batch = writeBatch(db);

  assetsSnapshot.docs.forEach((docSnap) => {
    batch.delete(docSnap.ref);
  });

  await batch.commit();

  return { message: 'All assets deleted successfully', documentsDeleted: assetsSnapshot.size };
}

export const getAssets = async () => {
  const assetsSnapshot = await getDocs(assetsCollection);
  const assets = assetsSnapshot.docs.map((doc) => doc.data());
  return assets as Asset[];
};
