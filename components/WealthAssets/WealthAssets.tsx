import { Stack } from '@mantine/core';
import { getSortedCategories, groupAssets } from './assetDataProcessor';
import { WealthAsset } from '@/types/Asset';
import { AssetCategory } from '../AssetCategory';

export const WealthAssets = async () => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

  const assetData = await fetch(`${baseUrl}/api/assets`);
  const assets: WealthAsset[] = await assetData.json();
  const { grouped, categoryTotals, subcategoryTotals } = groupAssets(assets);
  const sortedCategories = getSortedCategories(Object.keys(grouped));

  return (
    <Stack gap="md" w={700} mx="auto">
      {sortedCategories.map((category) => (
        <AssetCategory
          key={category}
          category={category}
          categoryTotal={categoryTotals[category]}
          subcategoryTotals={subcategoryTotals[category]}
          groupedAssets={grouped[category]}
        />
      ))}
    </Stack>
  );
};
