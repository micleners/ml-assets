import { getAssets } from "@/app/db/assets/repository";

export async function GET() {
  const assets = await getAssets();
  return new Response(JSON.stringify(assets), {
    headers: { 'Content-Type': 'application/json' },
  });
} 