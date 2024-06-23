<script lang="ts" setup>
import { type VariantProps, cva } from 'class-variance-authority'
import { Loader } from 'lucide-vue-next'
import { cn } from '~/lib/utils'

withDefaults(defineProps<{
  size: SpinnerVariants['size']
}>(), {
  size: 'default',
})

const spinnerVariants = cva('text-mute-foreground animate-spin', {
  variants: {
    size: {
      default: 'w-4 h-4',
      sm: 'w-2 h-2',
      lg: 'w-6 h-6',
      icon: 'w-10 h-10',
    },
  },
  defaultVariants: {
    size: 'default',
  },
})

type SpinnerVariants = VariantProps<typeof spinnerVariants>
</script>

<template>
  <Loader :class="cn(spinnerVariants({ size }))" />
</template>
