<script lang="ts" setup>
import type { PrimitiveProps } from 'reka-ui'

export interface ButtonProps extends PrimitiveProps {
  disabled?: MaybeRefOrGetter<boolean>
  size?: ButtonVariants['size']
  variant?: ButtonVariants['variant']
  class?: string
  isLoading?: MaybeRefOrGetter<boolean>
}

withDefaults(defineProps<ButtonProps>(), { as: 'button' })
</script>

<template>
  <Primitive
    v-bind="$props"
    :disabled="disabled || isLoading"
    :data-variant="variant"
    :class="
      cn(
        buttonVariants({ variant, size }),
        $props.class,
        isLoading && 'grid grid-cols-1 grid-rows-1 *:col-start-1 *:row-start-1 *:not-first:opacity-0',
      )
    "
    :aria-busy="isLoading || undefined"
  >
    <LazyUSpinner v-if="isLoading" class="mx-auto shrink-0 size-1lh" />
    <slot />
  </Primitive>
</template>
