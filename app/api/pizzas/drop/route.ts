import { dropPizzas } from "@/app/db/pizza/repository";

export async function GET() {
  const result = await dropPizzas();
  return new Response(JSON.stringify(result), {
    headers: { 'Content-Type': 'application/json' },
  });
} 