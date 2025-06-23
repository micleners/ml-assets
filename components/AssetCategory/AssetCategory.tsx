"use client"
import { Box, Group, Stack, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { WealthAsset } from '@/types/Asset';

interface AssetCategoryProps {
  category: string;
  categoryTotal: number;
  subcategoryTotals: Record<string, number>;
  groupedAssets: Record<string, WealthAsset[]>;
}

export const AssetCategory = ({
  category,
  categoryTotal,
  subcategoryTotals,
  groupedAssets,
}: AssetCategoryProps) => {
  const [opened, { toggle }] = useDisclosure(true);

  return (
    <Box mb="md">
      <Group justify="space-between" style={{ cursor: 'pointer' }} onClick={toggle}>
        <Text size="lg" fw={700}>
          {category}
        </Text>
        <Text size="lg" fw={700}>
          ${categoryTotal.toLocaleString(undefined, { maximumFractionDigits: 2 })}
        </Text>
      </Group>
      {opened && (
        <>
          {Object.entries(groupedAssets).map(([subcategory, assets]) => (
            <Box key={subcategory} ml={24}>
              <Group justify="space-between">
                <Text size="lg" fw={500}>
                  {subcategory}
                </Text>
                <Text size="lg" fw={500}>
                  $
                  {subcategoryTotals[subcategory].toLocaleString(undefined, {
                    maximumFractionDigits: 2,
                  })}
                </Text>
              </Group>
              <Stack gap={4} ml={24}>
                {assets.map((asset) => (
                  <Group key={asset.assetId} justify="space-between">
                    <Text size="md">{asset.nickname || asset.assetName || 'Unnamed Asset'}</Text>
                    <Text>
                      $
                      {asset.balanceCurrent.toLocaleString(undefined, { maximumFractionDigits: 2 })}
                    </Text>
                  </Group>
                ))}
              </Stack>
            </Box>
          ))}
        </>
      )}
    </Box>
  );
}; 