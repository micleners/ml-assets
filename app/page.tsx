import Link from 'next/link';
import { IconPizza } from '@tabler/icons-react';
import { Button, Container, Flex, Paper, Text, Title } from '@mantine/core';

export default function HomePage() {
  return (
    <Container size="sm" py="xl">
      <Paper shadow="md" p="xl" radius="md" withBorder>
        <Flex direction="column" align="center" gap="sm">
          <IconPizza size={48} color="#e03131" />
          <Title order={1} ta="center" mb="sm">
            Welcome to ML Pizza!
          </Title>
          <Text ta="center" c="gray.9" mb="lg">
            The best place to discover, customize, and enjoy delicious pizzas. Order now and let the pizza party begin!
          </Text>
          <Button component={Link} href="/Menu" size="md" color="red.8" radius="xl">
            See Our Menu
          </Button>
        </Flex>
      </Paper>
    </Container>
  );
}
