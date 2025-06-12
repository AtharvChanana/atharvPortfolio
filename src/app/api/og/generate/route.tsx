// Simple text-based OG image generator to stay under Vercel's 1MB limit
import { ImageResponse } from '@vercel/og';

export const runtime = 'edge';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get('title') || 'Portfolio';
  const name = 'Atharv Chanana';
  const role = 'Software Developer';

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#151515',
          padding: '2rem',
          color: 'white',
        }}
      >
        <h1 style={{ fontSize: 64, marginBottom: '2rem', textAlign: 'center' }}>
          {title}
        </h1>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <div style={{
            width: 80,
            height: 80,
            borderRadius: '50%',
            backgroundColor: '#666',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            fontSize: 32,
            fontWeight: 'bold',
          }}>
            {name.charAt(0)}
          </div>
          <div>
            <p style={{ fontSize: 28, margin: 0, fontWeight: 'bold' }}>{name}</p>
            <p style={{ fontSize: 20, margin: '4px 0 0 0', color: '#aaa' }}>{role}</p>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}
