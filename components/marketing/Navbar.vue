<script lang="ts" setup>
import { cn } from '~/lib/utils'

const scrolled = ref(true)
</script>

<template>
  <div :class="cn('z-50 bg-background dark:bg-[#1F1F1F] fixed top-0 flex items-center w-full p-6', scrolled && 'border-b shadow-sm')">
    <MarketingLogo />
    <div class="md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-2">
      <ModeToggle />
    </div>
  </div>
</template>
