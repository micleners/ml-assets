import { getPizzas } from "@/app/db/pizza/repository";

export async function GET() {
  const pizzas = await getPizzas();
  return new Response(JSON.stringify(pizzas), {
    headers: { 'Content-Type': 'application/json' },
  });
} 