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
          background: 'linear-gradient(135deg, #334FB4 0%, #1a1a4a 100%)',
        }}
      >
        {/* Large diagonal product image */}
        <div
          style={{
            position: 'absolute',
            top: -40,
            right: -60,
            width: '55%',
            height: '120%',
            transform: 'rotate(6deg)',
            overflow: 'hidden',
            borderRadius: 40,
            display: 'flex',
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
          {/* Overlay on image */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to right, rgba(51, 79, 180, 0.9), transparent 60%)',
              display: 'flex',
            }}
          />
        </div>

        {/* Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '60px 70px',
            width: '60%',
            position: 'relative',
            zIndex: 10,
          }}
        >
          {/* Logo */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 14,
              marginBottom: 16,
            }}
          >
            <img
              src="https://hotel-breakfast-redesign.vercel.app/logo.png"
              width={52}
              height={52}
              style={{ objectFit: 'contain' }}
            />
            <div
              style={{
                fontSize: 22,
                fontWeight: 900,
                color: 'white',
                letterSpacing: '1px',
              }}
            >
              HOTEL BREAKFAST
            </div>
          </div>

          {/* Divider */}
          <div
            style={{
              display: 'flex',
              width: 50,
              height: 3,
              background: '#E85D4C',
              borderRadius: 4,
              marginBottom: 32,
            }}
          />

          {/* Headline */}
          <div
            style={{
              fontSize: 60,
              fontWeight: 900,
              color: 'white',
              lineHeight: 1,
              marginBottom: 24,
              letterSpacing: '-2px',
            }}
          >
            Because
            <br />
            Champagne
            <br />
            is a Morning
            <br />
            <span style={{ color: '#FFF6E1' }}>Drink.</span>
          </div>

          {/* Subtitle */}
          <div
            style={{
              fontSize: 18,
              color: 'rgba(255,255,255,0.6)',
              lineHeight: 1.6,
            }}
          >
            Premium apparel, towels & accessories.
            <br />
            Free shipping on orders $75+
          </div>

          {/* URL */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              marginTop: 32,
              fontSize: 16,
              color: 'rgba(255,255,255,0.4)',
              fontWeight: 600,
            }}
          >
            hotelbreakfast.co
          </div>
        </div>

        {/* Floating product thumbnails */}
        <div
          style={{
            position: 'absolute',
            bottom: 40,
            right: 50,
            display: 'flex',
            gap: 10,
            zIndex: 20,
          }}
        >
          {[
            'https://cdn.shopify.com/s/files/1/0751/4456/0894/files/5885969260573620490_2048.jpg',
            'https://cdn.shopify.com/s/files/1/0751/4456/0894/files/1875496474666638470_2048.jpg',
          ].map((src, i) => (
            <div
              key={i}
              style={{
                width: 72,
                height: 72,
                borderRadius: 18,
                overflow: 'hidden',
                border: '3px solid rgba(255,255,255,0.3)',
                boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
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
        </div>

        {/* Bottom gradient bar */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: 5,
            background: 'linear-gradient(90deg, #E85D4C, #7A9E7E, #334FB4)',
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
