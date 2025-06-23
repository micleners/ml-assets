import { dropAssets } from "@/app/db/assets/repository";

export async function GET() {
  const result = await dropAssets();
  return new Response(JSON.stringify(result), {
    headers: { 'Content-Type': 'application/json' },
  });
} 