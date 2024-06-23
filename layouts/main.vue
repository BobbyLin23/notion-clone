<script lang="ts" setup>
import { useAuth } from 'vue-clerk'

const { isLoaded, isSignedIn } = useAuth()

if (!isSignedIn.value) {
  navigateTo('/')
}
</script>

<template>
  <template v-if="!isLoaded">
    <div class="h-full flex items-center justify-center">
      <Spinner size="lg" />
    </div>
  </template>
  <template v-else>
    <div class="h-full flex dark:bg-[#1F1F1F]">
      <MainNavigation />
      <main class="flex-1 h-full overflow-y-auto">
        <slot />
      </main>
    </div>
  </template>
</template>
