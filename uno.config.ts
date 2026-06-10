import { defineConfig, definePreset, presetWind4, transformerDirectives, transformerVariantGroup } from 'unocss'
import { presetAnimations } from 'unocss-preset-animations'

const presetAnchorPositioning = definePreset(() => {
  return {
    name: 'unocss-anchor-positioning-preset',
    rules: [
      [
        /(?<=position-anchor-)(?<name>[a-zA-Z0-9]+)/g,
        ([name]) => ({
          'position-anchor': `--${name}`,
        }),
      ],
      [
        /(?<=anchor-name-)(?<name>[a-zA-Z0-9]+)/g,
        ([name]) => ({
          'anchor-name': `--${name}`,
        }),
      ],
      [
        /(?<=anchor-)(?<pos>left|right|top|bottom|inset)/g,
        ([pos]) => {
          if (pos === 'inset') {
            return {
              bottom: 'anchor(bottom)',
              left: 'anchor(left)',
              right: 'anchor(right)',
              top: 'anchor(top)',
            }
          }
          return {
            [pos]: `anchor(${pos})`,
          }
        },
      ],
    ],
  }
})

export default defineConfig({
  presets: [
    presetWind4({
      preflights: { reset: true },
    }),
    presetAnimations,
    presetAnchorPositioning,
  ],
  rules: [
    [
      'scrollbar-gutter-stable',
      {
        'scrollbar-gutter': 'stable',
      },
    ],
    [
      'text-clip',
      {
        'text-box': 'trim-both cap alphabetic',
      },
    ],
    [
      'ease-snappy',
      {
        'transition-timing-function': 'cubic-bezier(0.33, 1, 0.68, 1)',
      },
    ],
    [
      /^(bg|text|border)-(.+)-(hover|press)$/,
      ([, prop, name, state], { theme }: { theme: Record<string, any> }) => {
        const color = (theme.colors as Record<string, string>)[name]
        if (typeof color !== 'string') return
        const cssProp = prop === 'bg' ? 'background-color' : prop === 'text' ? 'color' : 'border-color'
        return { [cssProp]: `oklch(from ${color} calc(l + var(--shift-${state})) c h)` }
      },
    ],
  ],
  safelist: ['group'],
  shortcuts: [
    {
      'z-dialog': 'z-50',
      'z-menu': 'z-70',
      'z-overlay': 'z-50',
      'z-popover': 'z-60',
      'z-tooltip': 'z-80',
    },
  ],
  theme: {
    colors: {
      accent: 'var(--accent)',
      'accent-foreground': 'var(--accent-foreground)',
      background: 'var(--background)',
      border: 'var(--border)',
      'border-strong': 'var(--border-strong)',
      danger: 'var(--danger)',
      'danger-foreground': 'var(--danger-foreground)',
      foreground: 'var(--foreground)',
      hover: 'var(--hover)',
      input: 'var(--input)',
      muted: 'var(--muted)',
      'muted-foreground': 'var(--muted-foreground)',
      overlay: 'var(--overlay)',
      popover: 'var(--popover)',
      'popover-foreground': 'var(--popover-foreground)',
      primary: 'var(--primary)',
      'primary-foreground': 'var(--primary-foreground)',
      ring: 'var(--ring)',
      secondary: 'var(--secondary)',
      'secondary-foreground': 'var(--secondary-foreground)',
      'secondary-raised': 'var(--secondary-raised)',
      selected: 'var(--selected)',
      surface: 'var(--surface)',
      'surface-foreground': 'var(--surface-foreground)',
      'surface-raised': 'var(--surface-raised)',
    },
    duration: {
      DEFAULT: '92.5ms',
      long: '150ms',
    },
    font: {
      mono: 'Paper Mono',
      sans: 'Pretendard',
    },
    shadow: {
      DEFAULT: [`0 1px 3px 0 #00000035`, `0 1px 2px -1px #00000035`],
      lg: [`0 10px 15px -3px #00000035`, `0 4px 6px -4px #00000035`],
      md: [`0 4px 6px -1px #00000035`, `0 2px 4px -2px #00000035`],
      sm: [`0 1px 3px 0 #00000035`, `0 1px 2px -1px #00000035`],
      xl: [`0 20px 25px -5px #00000035`, `0 8px 10px -6px #00000035`],
    },
    text: {
      '2xs': {
        fontSize: '0.7rem',
        lineHeight: '0.875rem',
      },
    },
  },
  transformers: [transformerVariantGroup(), transformerDirectives({ throwOnMissing: false })],
})
