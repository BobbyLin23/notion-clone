<script lang="ts" setup>
import { ChevronDown, ChevronRight, type LucideIcon } from 'lucide-vue-next'
import { cn } from '~/lib/utils'

const props = defineProps<{
  id?: number
  documentIcon?: string
  active?: boolean
  expanded?: boolean
  isSearch?: boolean
  level?: number
  label: string
  icon: LucideIcon
  onClick?: () => void
}>()

const ChevronIcon = computed(() => {
  if (props.expanded) {
    return ChevronDown
  }
  else {
    return ChevronRight
  }
})
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
    <div v-if="!!id" role="button" class="h-full rounded-sm hover:bg-neutral-300 dark:bg-neutral-600 mr-1">
      <ChevronIcon class="size-4 shrink-0 text-muted-foreground/50" />
    </div>
    <div v-if="documentIcon" class="shrink-0 mr-2 text-[18px]">
      {{ documentIcon }}
    </div>
    <component :is="icon" class="shrink-0 h-[18px] mr-2 text-muted-foreground" />
    <span class="truncate">
      {{ label }}
    </span>
    <kbd v-if="isSearch" class="ml-auto pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
      <span class="text-xs">⌘</span>
      <span>K</span>
    </kbd>
  </div>
</template>
