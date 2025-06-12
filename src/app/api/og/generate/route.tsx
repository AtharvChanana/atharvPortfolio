import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';
import { person } from '@/resources';

export const runtime = 'edge';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const title = searchParams.get('title') || 'Portfolio';

  return new ImageResponse(
    <div
      style={{
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#151515',
        padding: '4rem',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <h1
          style={{
            fontSize: '4rem',
            fontWeight: 700,
            color: 'white',
            maxWidth: '800px',
            textAlign: 'center',
            lineHeight: 1.2,
            margin: 0,
          }}
        >
          {title}
        </h1>
        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          <div
            style={{
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              overflow: 'hidden',
            }}
          >
            <img
              src={`https://${req.headers.get('host') || ''}${person.avatar}`}
              alt={person.name}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div>
            <p style={{ color: 'white', fontSize: '1.5rem', margin: 0 }}>
              {person.name}
            </p>
            <p style={{ color: '#999', fontSize: '1.25rem', margin: '0.25rem 0 0 0' }}>
              {person.role}
            </p>
          </div>
        </div>
      </div>
    </div>,
    {
      width: 1200,
      height: 630,
    }
  );
}
