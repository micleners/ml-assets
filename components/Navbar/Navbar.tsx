'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { IconHome, IconPizza } from '@tabler/icons-react';
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
          color="red.8"
          radius="xl"
          size="md"
          fw={700}
        >
          Home
        </Button>
        <Button
          component={Link}
          href="/Menu"
          variant={pathname === '/Menu' ? 'filled' : 'light'}
          leftSection={<IconPizza size={24} />}
          color="red.8"
          radius="xl"
          size="md"
          fw={700}
        >
          Menu
        </Button>
      </Flex>
    </Paper>
  );
} 