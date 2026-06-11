// @unocss-include
import type { VariantProps } from 'tailwind-variants'

export const buttonVariants = tv({
  base: 'relative font-medium rounded select-none inline-flex items-center justify-center cursor-pointer disabled:(opacity-50 cursor-not-allowed pointer-events-none)',
  defaultVariants: {
    size: 'default',
    variant: 'soft',
  },
  variants: {
    size: {
      default: 'text-sm h-8 px-2.5 py-3.5',
      lg: 'text-base h-10 px-3.5 py-4.5',
      sm: 'text-xs h-6 px-2 py-3',
    },
    variant: {
      ghost:
        'text-muted-foreground bg-transparent not-disabled:(hover:(text-foreground bg-ghost-hover) focus-visible:(text-foreground bg-ghost-hover) data-[state=open]:(text-foreground bg-ghost-press) active:(text-foreground bg-ghost-press))',
      soft: 'text-foreground bg-secondary border border-border not-disabled:(hover:(text-foreground not-active:border-border-strong) focus-visible:(text-foreground border-border-strong not-active:border-border-strong) data-[state=open]:(text-foreground border-border-strong not-active:border-border-strong) active:(border-border bg-secondary-press))',
    },
  },
})

export type ButtonVariants = VariantProps<typeof buttonVariants>
