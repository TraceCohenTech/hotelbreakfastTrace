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
          position: 'relative',
          overflow: 'hidden',
          background: '#1a1a1a',
        }}
      >
        {/* Left product image — large, full-bleed */}
        <div
          style={{
            display: 'flex',
            width: '45%',
            height: '100%',
            position: 'relative',
          }}
        >
          <img
            src="https://cdn.shopify.com/s/files/1/0751/4456/0894/files/3262399543692142814_2048.jpg"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
          {/* Gradient fade into right side */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              bottom: 0,
              width: '50%',
              background: 'linear-gradient(to right, transparent, #1a1a1a)',
              display: 'flex',
            }}
          />
        </div>

        {/* Right side content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            width: '55%',
            padding: '60px 60px 60px 20px',
            position: 'relative',
            zIndex: 10,
          }}
        >
          {/* Logo + brand */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 14,
              marginBottom: 12,
            }}
          >
            <img
              src="https://hotel-breakfast-redesign.vercel.app/logo-white.png"
              width={64}
              height={64}
              style={{ objectFit: 'contain' }}
            />
            <div
              style={{
                fontSize: 26,
                fontWeight: 900,
                color: 'white',
                letterSpacing: '-0.5px',
              }}
            >
              HOTEL BREAKFAST
            </div>
          </div>

          {/* Accent line */}
          <div
            style={{
              display: 'flex',
              width: 60,
              height: 4,
              background: '#E85D4C',
              borderRadius: 4,
              marginBottom: 28,
            }}
          />

          {/* Main headline */}
          <div
            style={{
              fontSize: 56,
              fontWeight: 900,
              color: 'white',
              lineHeight: 1.05,
              marginBottom: 20,
              letterSpacing: '-2px',
            }}
          >
            Because
            <br />
            Champagne is a
            <br />
            <span style={{ color: '#E85D4C' }}>Morning Drink.</span>
          </div>

          {/* Subheadline */}
          <div
            style={{
              fontSize: 20,
              color: 'rgba(255,255,255,0.6)',
              lineHeight: 1.5,
              marginBottom: 32,
            }}
          >
            Premium lifestyle essentials for those who
            <br />
            believe every morning should feel like vacation.
          </div>

          {/* Product thumbnails row */}
          <div
            style={{
              display: 'flex',
              gap: 12,
              alignItems: 'center',
            }}
          >
            {[
              'https://cdn.shopify.com/s/files/1/0751/4456/0894/files/5885969260573620490_2048.jpg',
              'https://cdn.shopify.com/s/files/1/0751/4456/0894/files/1875496474666638470_2048.jpg',
              'https://cdn.shopify.com/s/files/1/0751/4456/0894/files/8999220662666491318_2048.jpg',
              'https://cdn.shopify.com/s/files/1/0751/4456/0894/files/568868594357841610_2048.jpg',
            ].map((src, i) => (
              <div
                key={i}
                style={{
                  width: 64,
                  height: 64,
                  borderRadius: 16,
                  overflow: 'hidden',
                  border: '2px solid rgba(255,255,255,0.15)',
                  display: 'flex',
                }}
              >
                <img
                  src={src}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </div>
            ))}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 64,
                height: 64,
                borderRadius: 16,
                background: 'rgba(255,255,255,0.1)',
                color: 'rgba(255,255,255,0.5)',
                fontSize: 14,
                fontWeight: 700,
              }}
            >
              +8
            </div>
          </div>
        </div>

        {/* Top-right accent */}
        <div
          style={{
            position: 'absolute',
            top: -100,
            right: -100,
            width: 300,
            height: 300,
            borderRadius: '50%',
            background: 'rgba(51, 79, 180, 0.15)',
            display: 'flex',
          }}
        />

        {/* Bottom gradient bar */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: 5,
            background: 'linear-gradient(90deg, #334FB4, #E85D4C, #7A9E7E, #334FB4)',
            display: 'flex',
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  );
}
