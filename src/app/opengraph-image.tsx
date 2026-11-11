import { ImageResponse } from 'next/og'
import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import { profile } from '@/lib/data/profile'

export const alt =
  'Gabriel Porteiro, Full-Stack Software Engineer at SEO Gets and founder of Fondor Labs'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

const GREEN = '#37aa9c'
const GREEN_LIGHT = '#94f3e4'
const MUTED = 'rgba(255,255,255,0.62)'
const FAINT = 'rgba(255,255,255,0.42)'

const stats = [
  { value: '+127%', label: 'revenue at SEO Gets' },
  { value: '2,000+', label: 'BNPL users served' },
  { value: 'Top 10', label: 'of 98 Air Force pilots' },
]

/** Social share card, rendered at build time in the site's own look. */
export default async function OpenGraphImage() {
  const fontDir = join(process.cwd(), 'src/app/_og')
  const [regular, bold] = await Promise.all([
    readFile(join(fontDir, 'GeistMono-Regular.ttf')),
    readFile(join(fontDir, 'GeistMono-Bold.ttf')),
  ])

  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '56px 72px',
        color: '#fff',
        fontFamily: 'Geist Mono',
        backgroundColor: '#1a1a1b',
        backgroundImage: [
          'radial-gradient(circle at 18% 22%, rgba(55,170,156,0.32), transparent 45%)',
          'radial-gradient(circle at 88% 12%, rgba(148,243,228,0.12), transparent 40%)',
          'linear-gradient(135deg, #1a1a1b 21%, #333f44 100%)',
        ].join(', '),
      }}
    >
      {/* Top bar */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontSize: 26,
        }}
      >
        <div style={{ display: 'flex', fontWeight: 700 }}>{'<GPORTDEV/>'}</div>
        <div style={{ display: 'flex', color: FAINT }}>gportdev.com</div>
      </div>

      {/* Name block */}
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', fontSize: 26, color: GREEN }}>
          <span style={{ color: FAINT, marginRight: 14 }}>~ $</span>whoami
        </div>
        <div
          style={{
            display: 'flex',
            marginTop: 12,
            fontSize: 104,
            fontWeight: 700,
            letterSpacing: -4,
            lineHeight: 1,
          }}
        >
          {profile.name}
        </div>
        <div style={{ display: 'flex', marginTop: 26, fontSize: 36 }}>
          {profile.headline}
          <span style={{ color: GREEN_LIGHT, marginLeft: 18 }}>
            @ {profile.company}
          </span>
        </div>
        <div
          style={{ display: 'flex', marginTop: 14, fontSize: 26, color: MUTED }}
        >
          Founder of Fondor Labs · Former Brazilian Air Force pilot
        </div>
      </div>

      {/* Stats */}
      <div style={{ display: 'flex', gap: 20 }}>
        {stats.map((s) => (
          <div
            key={s.label}
            style={{
              display: 'flex',
              flexDirection: 'column',
              padding: '18px 26px',
              borderRadius: 20,
              border: '1px solid rgba(55,170,156,0.4)',
              backgroundColor: 'rgba(55,170,156,0.1)',
            }}
          >
            <div
              style={{
                display: 'flex',
                fontSize: 40,
                fontWeight: 700,
                color: GREEN_LIGHT,
              }}
            >
              {s.value}
            </div>
            <div
              style={{
                display: 'flex',
                marginTop: 4,
                fontSize: 20,
                color: MUTED,
              }}
            >
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </div>,
    {
      ...size,
      fonts: [
        { name: 'Geist Mono', data: regular, weight: 400, style: 'normal' },
        { name: 'Geist Mono', data: bold, weight: 700, style: 'normal' },
      ],
    }
  )
}
