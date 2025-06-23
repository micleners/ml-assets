import { dropAssets } from '@/app/db/assets/repository';

export async function GET() {
  if (process.env.NODE_ENV !== 'development') {
    return new Response(
      JSON.stringify({ error: 'Dropping assets is only allowed in development environment.' }),
      {
        status: 403,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }

  const result = await dropAssets();
  return new Response(JSON.stringify(result), {
    headers: { 'Content-Type': 'application/json' },
  });
}
