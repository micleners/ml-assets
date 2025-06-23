import Link from 'next/link';
import { IconBuildingBank } from '@tabler/icons-react';
import { Button, Container, Flex, Paper, Text, Title } from '@mantine/core';

export default function HomePage() {
  return (
    <Container size="sm" py="xl">
      <Paper shadow="md" p="xl" radius="md" withBorder>
        <Flex direction="column" align="center" gap="sm">
          <IconBuildingBank size={48} color="#12b886" />
          <Title
            style={{ fontFamily: 'Cambria, Times New Roman, Times, serif' }}
            order={1}
            ta="center"
            mb="sm"
          >
            Welcome to Your Asset Manager!
          </Title>
          <Text ta="center" c="gray.9" mb="lg">
            Find information about your assets: cash, investments, property, and real estate.
            Organize and track your wealth in one place.
          </Text>
          <Button component={Link} href="/Assets" size="md" color="teal" radius="xl">
            See Asset Overview
          </Button>
        </Flex>
      </Paper>
    </Container>
  );
}
