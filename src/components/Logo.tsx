import React from 'react';

interface LogoProps extends React.SVGProps<SVGSVGElement> {
  showText?: boolean;
  verticalLayout?: boolean;
  glow?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

export default function Logo({
  showText = true,
  verticalLayout = false,
  glow = true,
  size = 'md',
  className = '',
  ...props
}: LogoProps) {
  // Dimensions based on size preset
  const sizeMap = {
    sm: { width: verticalLayout ? 120 : 160, height: verticalLayout ? 120 : 40 },
    md: { width: verticalLayout ? 240 : 280, height: verticalLayout ? 220 : 64 },
    lg: { width: verticalLayout ? 360 : 420, height: verticalLayout ? 320 : 96 },
    xl: { width: verticalLayout ? 480 : 560, height: verticalLayout ? 420 : 128 },
  };

  const currentSize = sizeMap[size];

  // Render the SVG
  return (
    <div className={`inline-flex items-center ${verticalLayout ? 'flex-col justify-center text-center' : 'flex-row gap-3'} ${className}`}>
      <svg
        width={currentSize.width}
        height={currentSize.height}
        viewBox={verticalLayout ? "0 0 350 320" : "0 0 360 80"}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="transition-transform duration-300 hover:scale-105"
        {...props}
      >
        <defs>
          {/* Cyber Gradient 1: Electric Cyan to Vivid Cobalt Blue */}
          <linearGradient id="cyber-cyan-blue" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00F0FF" /> {/* Electric Cyan */}
            <stop offset="60%" stopColor="#0077FF" /> {/* Bright Royal Blue */}
            <stop offset="100%" stopColor="#0047FF" /> {/* Vivid Cobalt Blue */}
          </linearGradient>

          {/* Cyber Gradient 2: Royal Indigo to Neon Fuchsia/Magenta */}
          <linearGradient id="cyber-purple-magenta" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#7000FF" /> {/* Royal Purple */}
            <stop offset="50%" stopColor="#B000FF" /> {/* Bright Violet */}
            <stop offset="100%" stopColor="#FF00D6" /> {/* Neon Fuchsia/Magenta */}
          </linearGradient>

          {/* Glow Filters */}
          <filter id="neon-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <filter id="subtle-glow" x="-10%" y="-10%" width="120%" height="120%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* --- VERTICAL LAYOUT (Perfect central design) --- */}
        {verticalLayout ? (
          <g>
            {/* Background Glow Ring */}
            {glow && (
              <circle cx="175" cy="140" r="80" fill="#7000FF" opacity="0.1" filter="url(#neon-glow)" />
            )}

            {/* MAIN MORPH ICON 'M' (Centered Symmetrically at X: 175, Y: 145) */}
            <g>
              {/* Left Stem & Cross Stroke (Cyan-Blue ribbon) */}
              <path
                d="M105 215 L105 85 L205 185"
                stroke="url(#cyber-cyan-blue)"
                strokeWidth="24"
                strokeLinecap="round"
                strokeLinejoin="round"
                filter={glow ? "url(#subtle-glow)" : undefined}
              />

              {/* Right Stem & Cross Stroke (Purple-Magenta ribbon) overlapping the Left for 3D weave */}
              <path
                d="M145 185 L245 85 L245 215"
                stroke="url(#cyber-purple-magenta)"
                strokeWidth="24"
                strokeLinecap="round"
                strokeLinejoin="round"
                filter={glow ? "url(#subtle-glow)" : undefined}
              />

              {/* Code Symbol inside the center bottom pocket `</>` */}
              <g transform="translate(175, 208)" filter={glow ? "url(#subtle-glow)" : undefined}>
                {/* Left Angle Bracket < */}
                <path d="M-10 -5 L-17 0 L-10 5" stroke="#00F0FF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                {/* Right Angle Bracket > */}
                <path d="M10 -5 L17 0 L10 5" stroke="#00F0FF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                {/* Slash / */}
                <path d="M-3 7 L3 -7" stroke="#cbd5e1" strokeWidth="2.5" strokeLinecap="round" />
              </g>

              {/* Floating Pixel blocks dispersing from the top right branch */}
              {/* Near block */}
              <rect x="248" y="75" width="10" height="10" fill="#B000FF" filter={glow ? "url(#subtle-glow)" : undefined} />
              {/* Medium blocks */}
              <rect x="262" y="62" width="12" height="12" fill="#FF00D6" opacity="0.9" />
              <rect x="278" y="78" width="8" height="8" fill="#0077FF" opacity="0.8" />
              <rect x="258" y="48" width="7" height="7" fill="#c084fc" opacity="0.6" />
              {/* Tiny dispersed blocks */}
              <rect x="270" y="38" width="11" height="11" fill="#7000FF" opacity="0.85" />
              <rect x="286" y="52" width="8" height="8" fill="#00F0FF" opacity="0.7" />
              <rect x="298" y="42" width="6" height="6" fill="#FF00D6" opacity="0.5" />
            </g>

            {/* TYPOGRAPHY (Vertical Layout) */}
            {showText && (
              <g>
                {/* "Morph my web" text */}
                <text x="175" y="258" textAnchor="middle" fill="#ffffff" style={{ fontStyle: 'normal', fontWeight: '800', fontSize: '27px', fontFamily: '"Space Grotesk", "Inter", sans-serif', letterSpacing: '0.2px' }}>
                  Morph <tspan fill="#00F0FF">my</tspan> web
                </text>

                {/* Subtitle Accent Line (Left) */}
                <line x1="45" y1="288" x2="110" y2="288" stroke="url(#cyber-cyan-blue)" strokeWidth="1.5" />

                {/* "DIGITAL EVOLUTION" */}
                <text x="175" y="292" textAnchor="middle" fill="#64748b" style={{ fontWeight: '500', fontSize: '10.5px', fontFamily: '"JetBrains Mono", monospace', letterSpacing: '3.8px', textTransform: 'uppercase' }}>
                  digital evolution
                </text>

                {/* Subtitle Accent Line (Right) */}
                <line x1="240" y1="288" x2="305" y2="288" stroke="url(#cyber-purple-magenta)" strokeWidth="1.5" />
              </g>
            )}
          </g>
        ) : (
          /* --- HORIZONTAL NAVIGATION LAYOUT (Unifies the branding perfectly) --- */
          <g>
            {/* MINI ICON 'M' (Centered at Desired Coordinates Symmetrically via Math Scale) */}
            <g transform="translate(35, 40) scale(0.28) translate(-175, -145)">
              {/* Background Glow */}
              {glow && (
                <circle cx="175" cy="140" r="80" fill="#7000FF" opacity="0.15" filter="url(#subtle-glow)" />
              )}
              {/* Left Stem & Cross Stroke */}
              <path
                d="M105 215 L105 85 L205 185"
                stroke="url(#cyber-cyan-blue)"
                strokeWidth="24"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              {/* Right Stem & Cross Stroke */}
              <path
                d="M145 185 L245 85 L245 215"
                stroke="url(#cyber-purple-magenta)"
                strokeWidth="24"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              {/* Code Tag inside */}
              <g transform="translate(175, 208)">
                <path d="M-10 -5 L-17 0 L-10 5" stroke="#00F0FF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M10 -5 L17 0 L10 5" stroke="#00F0FF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M-3 7 L3 -7" stroke="#cbd5e1" strokeWidth="2.5" strokeLinecap="round" />
              </g>
              {/* Pixels exploding */}
              <rect x="248" y="75" width="10" height="10" fill="#B000FF" />
              <rect x="262" y="62" width="12" height="12" fill="#FF00D6" opacity="0.9" />
              <rect x="278" y="78" width="8" height="8" fill="#0077FF" opacity="0.8" />
              <rect x="258" y="48" width="7" height="7" fill="#00F0FF" opacity="0.7" />
            </g>

            {/* TYPOGRAPHY (Horizontal Layout, beside icon) */}
            {showText && (
              <g transform="translate(78, 45)">
                {/* Main Logo Text matching vertical look */}
                <text x="0" y="0" fill="#ffffff" style={{ fontWeight: '800', fontSize: '23px', fontFamily: '"Space Grotesk", "Inter", sans-serif', letterSpacing: '0.2px' }}>
                  Morph <tspan fill="#00F0FF">my</tspan> web
                </text>
                
                {/* Slogan */}
                <text x="1" y="16" fill="#64748b" style={{ fontWeight: '500', fontSize: '8px', fontFamily: '"JetBrains Mono", monospace', letterSpacing: '2.8px', textTransform: 'uppercase' }}>
                  digital evolution
                </text>
              </g>
            )}
          </g>
        )}
      </svg>
    </div>
  );
}
