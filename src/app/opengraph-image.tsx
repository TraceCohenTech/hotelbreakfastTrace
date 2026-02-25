import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Hotel Breakfast - Because Champagne is a Morning Drink';
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
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #334FB4 0%, #4A6BD4 50%, #334FB4 100%)',
          position: 'relative',
        }}
      >
        {/* Decorative circles */}
        <div
          style={{
            position: 'absolute',
            top: -100,
            left: -100,
            width: 400,
            height: 400,
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.1)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: -150,
            right: -100,
            width: 500,
            height: 500,
            borderRadius: '50%',
            background: 'rgba(164, 35, 37, 0.3)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: 100,
            right: 200,
            width: 200,
            height: 200,
            borderRadius: '50%',
            background: 'rgba(122, 158, 126, 0.3)',
          }}
        />

        {/* Main content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: '60px',
            zIndex: 10,
          }}
        >
          {/* Champagne emoji */}
          <div style={{ fontSize: 80, marginBottom: 20 }}>🥂</div>

          {/* Brand name */}
          <div
            style={{
              fontSize: 72,
              fontWeight: 900,
              color: 'white',
              letterSpacing: '-2px',
              marginBottom: 16,
              textShadow: '0 4px 30px rgba(0,0,0,0.3)',
            }}
          >
            HOTEL BREAKFAST
          </div>

          {/* Tagline */}
          <div
            style={{
              fontSize: 32,
              color: '#FFF6E1',
              fontWeight: 600,
              marginBottom: 40,
              opacity: 0.95,
            }}
          >
            Because Champagne is a Morning Drink
          </div>

          {/* Description */}
          <div
            style={{
              fontSize: 24,
              color: 'rgba(255,255,255,0.8)',
              maxWidth: 700,
              lineHeight: 1.5,
            }}
          >
            Luxury lifestyle essentials for those who believe every morning should feel like vacation
          </div>

          {/* CTA pill */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              marginTop: 40,
              padding: '16px 32px',
              background: 'white',
              borderRadius: 50,
              color: '#334FB4',
              fontSize: 20,
              fontWeight: 700,
            }}
          >
            <span>Shop Now</span>
            <span style={{ fontSize: 24 }}>→</span>
          </div>
        </div>

        {/* Bottom accent bar */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: 8,
            background: 'linear-gradient(90deg, #A42325, #E85D4C, #7A9E7E, #334FB4)',
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  );
}
