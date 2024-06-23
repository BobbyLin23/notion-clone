<script lang="ts" setup>
definePageMeta({
  layout: 'marketing',
})
</script>

<template>
  <div class="min-h-full flex flex-col dark:bg-[#1F1F1F]">
    <div class="flex flex-col items-center justify-center md:justify-start text-center gap-y-8 flex-1 px-6 pb-10">
      <MarketingHeading />
      <MarketingHeroes />
    </div>
    <MarketingFooter />
  </div>
</template>
