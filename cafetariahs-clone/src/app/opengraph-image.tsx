import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Cafetaria Hollands Spoor - Den Haag';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 48,
          background: 'linear-gradient(to bottom, #ffffff, #f4f4f8)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 48,
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundImage: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.9))',
            padding: 48,
            borderRadius: 24,
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            width: '90%',
            maxWidth: 900,
          }}
        >
          <div
            style={{
              fontSize: 64,
              fontWeight: 'bold',
              background: 'linear-gradient(to right, #995a3b, #bc8f5c)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              marginBottom: 24,
              textAlign: 'center',
            }}
          >
            Cafetaria Hollands Spoor
          </div>
          <div
            style={{
              fontSize: 36,
              marginBottom: 48,
              color: '#403a34',
              textAlign: 'center',
            }}
          >
            Bestel gemakkelijk en snel online!
          </div>
          <div
            style={{
              display: 'flex',
              gap: 32,
              color: '#403a34',
              fontSize: 28,
              fontWeight: 'bold',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              🍔 Burgers
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              🍟 Friet
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              🥙 Kapsalon
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
