import { Badge, Box, Group, Stack, Text, Title } from '@mantine/core';
import { Asset } from '@/types/Asset';

function groupAssets(assets: Asset[]) {
  const grouped: Record<string, Record<string, Asset[]>> = {};
  for (const asset of assets) {
    const category = asset.primaryAssetCategory || 'Uncategorized';
    const subcategory = asset.wealthAssetType || 'Unspecified';
    if (!grouped[category]) {
      grouped[category] = {};
    }
    if (!grouped[category][subcategory]) {
      grouped[category][subcategory] = [];
    }
    grouped[category][subcategory].push(asset);
  }
  return grouped;
}

export const WealthAssets = async () => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
  const response = await fetch(`${baseUrl}/api/assets`);
  const assets: Asset[] = await response.json();
  const grouped = groupAssets(assets);

  return (
    <Stack gap="md" w={700} mx="auto">
      {Object.entries(grouped).map(([category, subcategories]) => (
        <Box key={category}>
          <Title order={2} mb="xs">
            {category}
          </Title>
          {Object.entries(subcategories).map(([subcategory, assets]) => (
            <Box key={subcategory} ml={24}>
              <Title order={4} mb="xs" c="gray.7">
                {subcategory}
              </Title>
              <Stack gap={4} ml={24}>
                {assets.map((asset) => (
                  <Group key={asset.assetId} justify="space-between">
                    <Text size="md">{asset.nickname || asset.assetName || 'Unnamed Asset'}</Text>
                    <Badge color="teal" size="md">
                      $
                      {asset.balanceCurrent.toLocaleString(undefined, { maximumFractionDigits: 2 })}
                    </Badge>
                  </Group>
                ))}
              </Stack>
            </Box>
          ))}
        </Box>
      ))}
    </Stack>
  );
};
