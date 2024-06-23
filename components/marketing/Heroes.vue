<script lang="ts" setup>

</script>

<template>
  <div class="flex flex-col items-center justify-center max-w-5xl">
    <div class="flex items-center">
      <div class="relative size-[300px] sm:size-[350px] md:size-[400px]">
        <NuxtImg src="/documents.png" class="object-contain dark:hidden" alt="Documents" />
        <NuxtImg src="/documents-dark.png" class="object-contain hidden dark:block" alt="Documents" />
      </div>
      <div class="relative size-[400px]">
        <NuxtImg src="/reading.png" class="object-contain dark:hidden" alt="Reading" />
        <NuxtImg src="/reading-dark.png" class="object-contain hidden dark:block" alt="Reading" />
      </div>
    </div>
  </div>
</template>
