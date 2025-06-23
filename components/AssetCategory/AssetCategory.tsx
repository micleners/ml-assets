'use client';

import { IconChevronDown } from '@tabler/icons-react';
import { Box, Card, Group, Stack, Text, UnstyledButton } from '@mantine/core';
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
    <Card withBorder shadow="sm" radius="md" mb="md" padding={0}>
      <UnstyledButton onClick={toggle} w="100%" bg="gray.0" p="md">
        <Group justify="space-between">
          <Group gap="xs">
            <IconChevronDown
              size={20}
              style={{
                transform: opened ? 'rotate(0deg)' : 'rotate(-90deg)',
                transition: 'transform 200ms ease',
              }}
            />
            <Text size="lg" fw={700}>
              {category}
            </Text>
          </Group>
          <Text size="lg" fw={700}>
            ${categoryTotal.toLocaleString(undefined, { maximumFractionDigits: 2 })}
          </Text>
        </Group>
      </UnstyledButton>
      {opened && (
        <Box p="md">
          {Object.entries(groupedAssets).map(([subcategory, assets]) => (
            <Box key={subcategory} ml={24} mb="md">
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
        </Box>
      )}
    </Card>
  );
};
