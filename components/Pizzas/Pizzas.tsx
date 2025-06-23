import { Pizza } from '@/types/Pizza';
import { Card, Group, Text, Badge, Stack, Title, Box } from '@mantine/core';

export const Pizzas = async () => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
  const response = await fetch(`${baseUrl}/api/pizzas`);
  const pizzas: Pizza[] = await response.json();

  return (
    <Stack gap="lg">
      {pizzas.map((pizza) => (
        <Card key={pizza.id} shadow="md" w={600} mx="auto" padding="lg" radius="md" withBorder>
          <Group justify="space-between" align="flex-start" mb="xs">
            <Title order={3}>{pizza.name}</Title>
            <Badge color="red.8" size="md">${pizza.price.toFixed(2)}</Badge>
          </Group>
          <Text c="gray.9" size="sm" mb="sm">
            {pizza.description}
          </Text>
          <Box mb="xs">
            <Text size="xs" fw={700}>Sauce:</Text>
            <Badge color="red" variant="light" size="sm">{pizza.sauce.name}</Badge>
          </Box>
          <Box>
            <Text size="xs" fw={700}>Toppings:</Text>
            <Group gap={4} wrap="wrap">
              {pizza.toppings.map((topping, idx) => (
                <Badge key={idx} color="gray.9" variant="light" size="sm">
                  {topping.name}
                </Badge>
              ))}
            </Group>
          </Box>
        </Card>
      ))}
    </Stack>
  );
}; 