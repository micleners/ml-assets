import { seedAssets } from "@/app/db/assets/repository";

export async function GET() {
  if (process.env.NODE_ENV !== "development") {
    return new Response(
      JSON.stringify({ error: "Seeding is only allowed in development environment." }),
      {
        status: 403,
        headers: { "Content-Type": "application/json" },
      }
    );
  }

  const response = await seedAssets();

  if (response.error) {
    return new Response(JSON.stringify(response), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  return new Response(JSON.stringify(response), {
    headers: { 'Content-Type': 'application/json' },
  });
} 