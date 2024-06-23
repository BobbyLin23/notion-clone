<script lang="ts" setup>
import type { LucideIcon } from 'lucide-vue-next'
import { cn } from '~/lib/utils'

defineProps<{
  id: number
  documentIcon: string
  active?: boolean
  expanded?: boolean
  isSearch?: boolean
  level?: number
  label: string
  icon: LucideIcon
  onClick?: () => void
}>()
</script>

<template>
  <div
    role="button"
    :style="{
      paddingLeft: level ? `${(level * 12) + 12}px` : '12px',
    }"
    :class="cn('group min-h-[27px] text-sm py-1 pr-3 w-full hover:bg-primary/5 flex items-center text-muted-foreground font-medium',
               active && 'bg-primary/5 text-primary',
    )"
    @click="onClick"
  >
    {{ label }}
  </div>
</template>
