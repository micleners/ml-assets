'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { IconHome, IconBuildingBank } from '@tabler/icons-react';
import { Button, Flex, Paper } from '@mantine/core';

export function Navbar() {
  const pathname = usePathname();

  return (
    <Paper shadow="md" p="md" radius="xl" withBorder mb="xl">
      <Flex gap="md" justify="center" align="center">
        <Button
          component={Link}
          href="/"
          variant={pathname === '/' ? 'filled' : 'light'}
          leftSection={<IconHome size={24} />}
          color="teal"
          radius="xl"
          size="md"
          fw={700}
        >
          Home
        </Button>
        <Button
          component={Link}
          href="/Assets"
          variant={pathname === '/Assets' ? 'filled' : 'light'}
          leftSection={<IconBuildingBank size={24} />}
          color="teal"
          radius="xl"
          size="md"
          fw={700}
        >
          Assets
        </Button>
      </Flex>
    </Paper>
  );
} 